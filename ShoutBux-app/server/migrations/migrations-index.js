/**
 * Created by jr on 9/28/16.
 */

/**
 * Migration Version list
 * V1: seed app with 10 default users
 * V2: seed users with shouts
 */

import {Followers} from '/lib/collections/';

const runToLatest = () => {
  Migrations.migrateTo('latest');
};
Meteor.startup(function () {
  runToLatest();
});