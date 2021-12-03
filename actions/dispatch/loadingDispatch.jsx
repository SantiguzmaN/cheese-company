export const activateSpinner = dispatch => {
  return dispatch({ type: 'SHOW_LOADING' });
};

export const desactiveSpinner = dispatch => {
  return dispatch({ type: 'CLOSE_LOADING' });
};
