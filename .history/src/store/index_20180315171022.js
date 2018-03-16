import { createStore } from 'redux';

import reducers from './ducks';

// const middlewares = [];

// const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
const createAppropriateStore = createStore;
const store = createAppropriateStore(reducers);

export default store;
