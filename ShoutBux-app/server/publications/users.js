import {Users} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('user.current', function (userId) {
    const selector = (userId) ? {_id: usersId} : {_id: this.userId};
    return Meteor.users.find(selector);
  });
}
