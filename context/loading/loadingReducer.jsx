export const loadingReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_LOADING':
      return {
        ...state,
        loadingCount: state.loadingCount + 1
      };
    case 'CLOSE_LOADING':
      return {
        ...state,
        loadingCount: state.loadingCount > 0 ? state.loadingCount - 1 : 0
      };
    default:
      return state;
  }
};
