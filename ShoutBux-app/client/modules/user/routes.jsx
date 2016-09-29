import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import Timeline from './containers/timeline';
export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/:userId', {
    name: 'following',
    action(params) {
      console.log(params.userId);
      mount(MainLayoutCtx, {
        content: () => (<Timeline userId={params.userId}/>)
      });
    }
  });
}
