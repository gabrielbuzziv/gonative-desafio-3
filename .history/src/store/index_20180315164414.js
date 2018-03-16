import { createStore } from 'redux';

import reducers from './ducks';
import { create } from 'handlebars';

const middlewares = [];

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
const store = createAppropriateStore(reducers);
