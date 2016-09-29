import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Dashboard from '../components/dashboard.jsx';
export const composer = ({context, userId}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionsReady = [Meteor.subscribe('user.current', userId).ready, Meteor.subscribe('follower.list', '').ready, Meteor.subscribe('shout.count', userId).ready];
  const dataReady = ()=> {
    const followlist = Collections.Followers.findOne();
    const {followers, following} = (followlist) ? followlist : [];
    const shoutCount = Collections.Shouts.find().count();
    const stats = {
      shouts: shoutCount,
      follwers: _.size(followers),
      following: _.size(following),
    };
    const user = (userId) ? Meteor.users.findOne({_id: userId}) : Meteor.user();
    onData(null, {user, stats});
  };
  (subscriptionsReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Dashboard);
