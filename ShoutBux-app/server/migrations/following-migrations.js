/**
 * Created by jr on 9/29/16.
 */
import {Followers} from '/lib/collections/';
const addFollowing = ()=> {
  console.log('updating whos following');
  const userList = _.pluck(Meteor.users.find().fetch(), '_id');
  _.each(userList, (userId)=> {
    Followers.update({owner: userId}, {$set: {followers: _.pluck(Followers.find({following: {$in: [userId]}}).fetch(), '_id')}})
  });
};
const removeFollowing = ()=> {
  console.log('Removing Followers');
  const userList = _.pluck(Meteor.users.find().fetch(), '_id');
  _.each(userList, (userId)=> {
  });

};
Migrations.add({
  version: 3,
  name: 'Add Correct Followers',
  up: ()=> {
    addFollowing();
  },
  down: ()=> {
    removeFollowing();
  }
});