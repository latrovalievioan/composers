export const favoriteComposersReducer = (
  state = new Set<string>(),
  action: any
) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES': {
      const newState = new Set(state);
      newState.add(action.payload);
      return newState;
    }
    case 'REMOVE_FROM_FAVORITES': {
      const newState = new Set(state);
      newState.delete(action.payload);
      return newState;
    }
    case 'LOAD_FROM_FAVORITES': {
      return action.payload;
    }

    default:
      return state;
  }
};
