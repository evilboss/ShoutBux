import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ShoutItem from '../components/shout_item.jsx';

export const composer = ({context, userId}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const err = LocalState.get('SHOUT_ERROR');
  const subscriptionsReady = [Meteor.subscribe('user.current', userId).ready];
  const dataReady = ()=> {
    const user = (userId) ? Meteor.users.findOne({_id: userId}) : Meteor.user();
    onData(null, {user, err});
  };
  (subscriptionsReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  update: actions.shout.update,
  _remove: actions.shout.delete,
  clearErrors: actions.shout.clearError,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ShoutItem);
