export default {
  login({Meteor, LocalState, FlowRouter}, username, password) {
    if (!username || !password) {
      return LocalState.set('LOGIN_ERROR', 'Username & Password are required!');
    }

    LocalState.set('LOGIN_ERROR', null);

    Meteor.loginWithPassword(username, password, (err) => {
      if (err && err.reason) {
        return LocalState.set('LOGIN_ERROR', err.reason);
      }
    });

  },
  clearErrors({LocalState}) {
    return LocalState.set('LOGIN_ERROR', null);
  }
}
