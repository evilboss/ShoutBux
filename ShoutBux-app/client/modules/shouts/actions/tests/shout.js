const {describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import actions from '../shout';

describe('shouts.actions.shout', () => {

  describe('create', () => {
    it('should clear older LocalState for SHOUT_ERROR', () => {
      const Meteor = {uuid: spy(), call: spy()};
      const LocalState = {set: spy()};
      const FlowRouter = {go: spy()};

      actions.create({LocalState, Meteor, FlowRouter}, 'shout');
      expect(LocalState.set.args[0]).to.deep.equal(['SHOUT_ERROR', null]);
    });
    it('should reject if shout is not there', () => {
      const LocalState = {set: spy()};
      actions.create({LocalState}, null);
      const args = LocalState.set.args[0];
      expect(args[0]).to.be.equal('SHOUT_ERROR');
    });
    it('should reject if has more than 32 characters', () => {
      const LocalState = {set: spy()};
      actions.create({LocalState}, '123456789012345678901234567890123');
      const args = LocalState.set.args[0];
      expect(args[0]).to.be.equal('SHOUT_ERROR');
    });
  });
  describe('update', () => {
    it('should clear older LocalState for SHOUT_ERROR', () => {
      const Meteor = {uuid: spy(), call: spy()};
      const LocalState = {set: spy()};
      const FlowRouter = {go: spy()};
      actions.create({LocalState, Meteor, FlowRouter}, 'shout');
      expect(LocalState.set.args[0]).to.deep.equal(['SHOUT_ERROR', null]);
    });
    it('should reject if shout is not there', () => {
      const LocalState = {set: spy()};
      actions.create({LocalState}, null);
      const args = LocalState.set.args[0];
      expect(args[0]).to.be.equal('SHOUT_ERROR');
    });
  });
});

