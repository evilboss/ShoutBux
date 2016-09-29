import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Follow from '../components/follow.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const subscriptionsReady = [Meteor.subscribe('follower.list', '').ready];
  const dataReady = ()=> {
    const followlist = Collections.Followers.findOne();
    const {followers, following} = (followlist) ? followlist : [];
    const user = Meteor.user();
    onData(null, {user, following});
  };
  (subscriptionsReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Follow);
