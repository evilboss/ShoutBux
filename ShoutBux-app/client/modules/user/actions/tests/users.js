const {describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import actions from '../users';

describe('user.actions.users', () => {
  describe('login', () => {
    it('should clear older LocalState for LOGIN_ERROR', () => {
      const Meteor = {uuid: spy(), call: spy()};
      const LocalState = {set: spy()};
      const FlowRouter = {go: spy()};
      actions.login({LocalState, Meteor, FlowRouter}, 'shout');
      expect(LocalState.set.args[0]).to.deep.equal(['LOGIN_ERROR', null]);
    });
    it('should reject if username is not there', () => {
      const LocalState = {set: spy()};
      actions.login({LocalState}, null, 'password');
      const args = LocalState.set.args[0];
      expect(args[0]).to.be.equal('LOGIN_ERROR');
    });
    it('should reject if password is not there', () => {
      const LocalState = {set: spy()};
      actions.login({LocalState}, 'username', null);
      const args = LocalState.set.args[0];
      expect(args[0]).to.be.equal('LOGIN_ERROR');
    });
  });
});
