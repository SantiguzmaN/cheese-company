export const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EXPENSES':
      return {
        ...state
      };
    default:
      return state;
  }
};
