import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Shoutfeed from '../components/shoutfeed.jsx';

export const composer = ({context, userId}, onData) => {
  const {Meteor, Collections} = context();

  const subscriptionsReady = [Meteor.subscribe('shout.feed', userId).ready];
  const dataReady = ()=> {
    const options = {sort: {date: -1}};
    const shouts = Collections.Shouts.find({}, options).fetch();
    onData(null, {shouts});
  };
  (subscriptionsReady) ? dataReady() : onData();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Shoutfeed);
