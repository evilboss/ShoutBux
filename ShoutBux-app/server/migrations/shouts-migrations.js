/**
 * Created by jr on 9/29/16.
 */
import {Shouts} from '/lib/collections/';
const generateShouts = (userId, count)=> {
  for (var i = 0; i < count; i++) {
    Shouts.insert({owner: userId, text: faker.lorem.words(), date: faker.date.recent()})
  }
};
const addShouts = ()=> {
  console.log('Adding shouts');
  const userList = _.pluck(Meteor.users.find().fetch(), '_id');
  _.each(userList, (userId)=> {
    generateShouts(userId,_.random(1, 100));
  });
};
const removeShouts = ()=> {
  console.log('Removing Shouts');
  const userList = _.pluck(Meteor.users.find().fetch(), '_id');
  _.each(userList, (userId)=> {
    Shouts.remove({owner:userId});
  });

};
Migrations.add({
  version: 4,
  name: 'Add Shouts to users',
  up: ()=> {
    addShouts();
  },
  down: ()=> {
    removeShouts();
  }
});