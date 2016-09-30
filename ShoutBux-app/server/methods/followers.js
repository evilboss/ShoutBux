import {Followers} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'followers.update'(toFollowId) {
      check(toFollowId, String);
      const toFollowSelector = {owner: toFollowId};
      const myFollowingSelector = {owner: Meteor.userId()};
      const toFollow = Followers.findOne(toFollowSelector);
      const myFollowing = Followers.findOne(myFollowingSelector);
      const myFollwingList = myFollowing.following;
      const toFollowList = toFollow.followers;
      myFollwingList.push(toFollowId);
      toFollowList.push(Meteor.userId());
      Followers.update({_id: myFollowing._id}, {$set: {following: _.uniq(myFollwingList)}});
      Followers.update({_id: toFollow._id}, {$set: {followers: _.uniq(toFollowList)}});
    }
  });
}
