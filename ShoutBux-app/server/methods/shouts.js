import {Shouts} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'shouts.insert'(text) {
      check(text,String);
      const shout = {
        owner: this.userId,
        text:text,
        date:new Date(),
      };
      Shouts.insert(shout);
    }
  });
}
