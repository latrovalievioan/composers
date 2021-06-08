import { composerListReducer } from './composerListReducer';
import { combineReducers } from 'redux';
import { favoriteComposersReducer } from './favoriteComposersReducer';

export const rootReducer = combineReducers({
  composerList: composerListReducer,
  favoriteComposersIds: favoriteComposersReducer,
});
