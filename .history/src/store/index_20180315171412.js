import { createStore, applyMiddleware } from 'redux';

import reducers from './ducks';

const middlewares = [];

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
const store = createAppropriateStore(reducers, applyMiddleware(...middlewares));

export default store;
