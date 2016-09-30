import {Followers} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('follower.list', function (userId) {
    const selector = (userId) ? {owner: userId} : {owner: this.userId};
    return Followers.find(selector);
  });
  Meteor.publish('follower.unfollowed', function () {
    const selector = {owner: this.userId};
    const options = {fields: {_id: 1}};
    const yourFollowers = Followers.findOne(selector);
    const unfollowedSelector = {_id: {$nin: yourFollowers.following}};
    return Meteor.users.find(unfollowedSelector, options);

  });

}
