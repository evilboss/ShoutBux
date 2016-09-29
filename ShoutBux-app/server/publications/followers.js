import {Followers} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('follower.list', function (userId) {
    const selector = (userId) ? {owner: userId} : {owner: this.userId};
    return Followers.find(selector);
  });
  Meteor.publish('follower.following', function (userId) {
    
  });

}
