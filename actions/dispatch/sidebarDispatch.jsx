export const sidebarToggle = (dispatch, collapsed) => {
  return dispatch({ type: 'HIDE_SIDEBAR', payload: { hideSidebar: collapsed } });
};
