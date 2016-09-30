export default {
  login({Meteor, LocalState, FlowRouter}, username, password) {
    LocalState.set('LOGIN_ERROR', null);
    if (!username || !password) {
      return LocalState.set('LOGIN_ERROR', 'Username & Password are required!');
    }

    Meteor.loginWithPassword(username, password, (err) => {
      if (err && err.reason) {
        return LocalState.set('LOGIN_ERROR', err.reason);
      }
    });

  },
  follow({Meteor, LocalState, FlowRouter}, toFollowId) {
    LocalState.set('FOLLOW_ERROR', null);
    if (!toFollowId) {
      return LocalState.set('FOLLOW_ERROR', 'toFollowRequired');
    }
    Meteor.call('followers.update', toFollowId);
  },
  clearErrors({LocalState}) {
    return LocalState.set('LOGIN_ERROR', null);
  }
}
