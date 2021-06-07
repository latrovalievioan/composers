import { composerListReducer } from './composerListReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  composerList: composerListReducer,
});
