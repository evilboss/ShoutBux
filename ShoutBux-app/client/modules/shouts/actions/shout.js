export default {
  create({Meteor, LocalState, FlowRouter}, shout) {
    LocalState.set('SHOUT_ERROR', null);
    if (!shout) {
      return LocalState.set('SHOUT_ERROR', 'Your need to shout Something');
    }
    if (shout.length > 32) {
      return LocalState.set('SHOUT_ERROR', 'Maximum Character limit exceed');
    }
    Meteor.call('shouts.insert', shout);
  },
  update({Meteor, LocalState, FlowRouter}, shout) {
    LocalState.set('SHOUT_ERROR', null);
  },
  clearErrors({LocalState}) {
    return LocalState.set('SHOUT_ERROR', null);
  }
}
