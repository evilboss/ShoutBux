import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import userModule from './modules/user';
import shoutsModule from './modules/shouts';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(userModule);
app.loadModule(shoutsModule);
app.init();
