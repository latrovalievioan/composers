import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
import { storageMiddleWare } from '../storageMiddleWare';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, storageMiddleWare))
);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
