import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Shoutfeed from '../components/shoutfeed.jsx';

export const composer = ({context, userId}, onData) => {
	const {Meteor, Collections} = context();
	
	const subscriptionsReady = [Meteor.subscribe('shout.feed', userId).ready, Meteor.subscribe('follower.list', '').ready];
	const dataReady = ()=> {
		const options = {sort: {date: -1}};
		const followlist = Collections.Followers.findOne();
		const {followers, following} = (followlist) ? followlist : [];
		const selector = {};
		const userShout = Collections.Shouts.find(selector, options).fetch();
		const shouts = (userId) ?
			(Meteor.userId() == userId) ?
				userShout
				: (_.contains(following, userId)) ?
				userShout
				: ''
			: userShout;
		onData(null, {shouts});
	};
	(subscriptionsReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
	context: () => context
});

export default composeAll(
	composeWithTracker(composer),
	useDeps(depsMapper)
)(Shoutfeed);
