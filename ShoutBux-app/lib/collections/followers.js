import {Mongo} from 'meteor/mongo';

const Followers = new Mongo.Collection('followers');

export default Followers;
