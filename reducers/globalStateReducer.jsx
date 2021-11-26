export const globalStateReducer = (state, action) => {
  switch (action.type) {
    case 'HIDE_SIDEBAR':
      return {
        ...state,
        hideSidebar: action.payload.hideSidebar
      };
    default:
      return state;
  }
};
