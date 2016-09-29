import {Shouts} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('shout.feed', function (userId) {
    const selector = (userId) ? {owner: userId} : {owner: this.userId};
    return Shouts.find(selector);
  });
  Meteor.publish('shout.count', function (userId) {
    const selector = (userId) ? {owner: userId} : {owner: this.userId};
    return Shouts.find(selector);
  });
}
