import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import FollowBtn from '../components/follow_btn.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  follow: actions.users.follow,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(FollowBtn);
