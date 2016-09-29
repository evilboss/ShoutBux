/**
 * Created by jr on 9/28/16.
 */
import {Followers, Shouts} from '/lib/collections/';
const defautUsers = [
  {
    username: 'logan',
    password: 'password',
    profile: {
      displayPhoto: 'xmen/logan.jpg',
      fullname: 'James Howlett',
    }
  },
  {
    username: 'scott',
    password: 'password',
    profile: {
      displayPhoto: 'xmen/scott.jpg',
      fullname: 'Scott Summers',
    }
  },
  {
    username: 'cable',
    password: 'password',
    profile: {
      displayPhoto: 'xmen/cable.jpg',
      fullname: 'Christopher Charles Summers',
    }
  },
  {
    username: 'xavier',
    password: 'password',
    profile: {
      displayPhoto: 'xmen/xavier.jpg',
      fullname: 'Charles Francis Xavier',
    }
  },
  {
    username: 'quicksilver',
    password: 'password',
    profile: {
      displayPhoto: 'xmen/quicksilver.jpg',
      fullname: 'Pietro Django Maximoff',
    }
  },
  {
    username: 'tony',
    password: 'password',
    profile: {
      displayPhoto: 'avengers/tony.jpg',
      fullname: 'Anthony Stark'
    }
  },
  {
    username: 'steve',
    password: 'password',
    profile: {
      displayPhoto: 'avengers/steve.jpg',
      fullname: 'Steven Rogers'
    }
  },
  {
    username: 'natasha',
    password: 'password',
    profile: {
      displayPhoto: 'avengers/natasha.jpg',
      fullname: 'Natalia Alianovna Romanova'
    }
  },
  {
    username: 'clint',
    password: 'password',
    profile: {
      displayPhoto: 'avengers/clint.jpg',
      fullname: 'Clinton Francis Barton'
    }
  },
  {
    username: 'rhodey',
    password: 'password',
    profile: {
      displayPhoto: 'avengers/rhodes.jpg',
      fullname: 'James Rupert Rhodes',
    }
  },
];
const loadUsers = ()=> {
  console.log('seeding 10 users');
  _.each(defautUsers, (user)=> {
    Accounts.createUser(user);
  });
};
const removeUsers = ()=> {
  console.log('removing 10 seeded users');
  _.each(defautUsers, (user)=> {
    console.log(user);
    const removeUser = Meteor.users.findOne({'username': user.username});
    (removeUser) ? Meteor.users.remove(removeUser._id) : '';
  });
};
Migrations.add({
  version: 1,
  name: 'Add Default users to Shoutbux',
  up: ()=> {
    loadUsers();
  },
  down: ()=> {
    removeUsers();
  }
});