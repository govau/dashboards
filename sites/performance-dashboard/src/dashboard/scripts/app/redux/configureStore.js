/* eslint-disable */
let win = typeof global === 'undefined' ? window : global;

import {createStore, applyMiddleware, compose} from 'redux';

import rootReducer from './rootReducer';


const configureStore = (bootState) => {
  const middleware = [];

  const composeEnhancers = process.env.NODE_ENV === 'development' && win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
  );

  const store = createStore(rootReducer, bootState, enhancer);

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
