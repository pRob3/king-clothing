import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root-reducer';

// Own logger middleware (clearer when debugging)
// const loggerMiddleWare = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }

//   console.log('type: ', action.type);
//   console.log('payload: ', action.payload);
//   console.log('currentState: ', store.getState());

//   next(action);

//   console.log('nextState: ', store.getState());
// };

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
