import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ShoutBox from '../components/shout_box.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const err = LocalState.get('SHOUT_ERROR');
  onData(null, {err});
};

export const depsMapper = (context, actions) => ({
  create: actions.shout.create,
  clearErrors: actions.shout.clearError,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ShoutBox);
