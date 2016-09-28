export default {
  create({Meteor, LocalState, FlowRouter}, shout) {
    LocalState.set('SHOUT_ERROR', null);

    if (!shout) {
      return LocalState.set('SHOUT_ERROR', 'Your need to shout Something');
    }
    Meteor.call('shouts.insert', shout);
  },
  update({Meteor, LocalState, FlowRouter}, shout) {

  },
  clearErrors({LocalState}) {
    return LocalState.set('SHOUT_ERROR', null);
  }
}
