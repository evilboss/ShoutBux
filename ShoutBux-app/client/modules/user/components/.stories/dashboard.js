import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Dashboard from '../dashboard.jsx';

storiesOf('user.Dashboard', module)
  .add('default view', () => {
    return (
      <Dashboard />
    );
  })
