/**
 * Created by jr on 9/29/16.
 */
import {Followers} from '/lib/collections/';
const addFollowers = ()=> {
  console.log('Adding Followers');
  const userList = _.pluck(Meteor.users.find().fetch(), '_id');
  _.each(userList, (userId)=> {
    Followers.insert({
      owner: userId,
      followers: _.sample(_.without(userList, userId), _.random(1, 10)),
      following: _.sample(_.without(userList, userId), _.random(1, 10))
    })
  });
};
const removeFollowers = ()=> {
  console.log('Removing Followers');
  const userList = _.pluck(Meteor.users.find().fetch(), '_id');
  _.each(userList, (userId)=> {
    Followers.remove({owner: userId});
  });

};
Migrations.add({
  version: 2,
  name: 'Add Default Followers and Following to default Users',
  up: ()=> {
    addFollowers();
  },
  down: ()=> {
    removeFollowers();
  }
});