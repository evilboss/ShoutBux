import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Follow from '../components/follow.jsx';

export const composer = ({context}, onData) => {
	const {Meteor, Collections} = context();
	const subscriptionsReady = [Meteor.subscribe('follower.list', '').ready, Meteor.subscribe('follower.unfollowed').ready];
	const dataReady = ()=> {
			const followlist = Collections.Followers.findOne({owner: Meteor.userId()});
			const {followers, following} = (followlist) ? followlist : [];
			const user = Meteor.user();
			const selector = {_id: {$ne: Meteor.userId()}};
			console.log(Meteor.users.find(selector).fetch());
			const unfollowedUsers = _.pluck(Meteor.users.find(selector).fetch(), '_id');
			onData(null, {user, following, unfollowedUsers});
		}
		;
	(subscriptionsReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
	context: () => context
});

export default composeAll(
	composeWithTracker(composer),
	useDeps(depsMapper)
)(Follow);
