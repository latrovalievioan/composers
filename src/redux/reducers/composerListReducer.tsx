import { PayloadAction } from '@reduxjs/toolkit';
import { Composer } from '../../types';
const initialState = {
  essentialComposers: [] as readonly Composer[],
  popularComposers: [] as readonly Composer[],
};

export const composerListReducer = (
  state = initialState,
  action: PayloadAction<readonly Composer[]>
) => {
  switch (action.type) {
    case 'SET_ESSENTIAL_COMPOSERS':
      return {
        ...state,
        essentialComposers: action.payload,
      };
    case 'SET_POPULAR_COMPOSERS':
      return {
        ...state,
        popularComposers: action.payload,
      };
    default:
      return state;
  }
};
