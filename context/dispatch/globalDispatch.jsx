export const showLoading = dispatch => {
  return dispatch({ type: 'SHOW_LOADING' });
};

export const closeLoading = dispatch => {
  return dispatch({ type: 'CLOSE_LOADING' });
};

export const toggleSidebar = (dispatch, collapsed) => {
  return dispatch({ type: 'HIDE_SIDEBAR', payload: { hideSidebar: collapsed } });
};
