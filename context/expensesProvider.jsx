import React, { createContext, useMemo } from 'react';
import { expensesReducer } from '../reducers/expensesReducer';
import PropTypes from 'prop-types';

const ExpensesStateContext = createContext({});
const ExpensesDispatchContext = createContext(() => {
  // Empty function
});

export const useExpensesState = () => {
  const context = React.useContext(ExpensesStateContext);
  if (context === undefined) {
    throw new Error('useExpensesState no puede ser usada sin un ExpensesProvider');
  }
  return context;
};

export const useExpensesDispatch = () => {
  const context = React.useContext(ExpensesDispatchContext);
  if (context === undefined) {
    throw new Error('useExpensesDispatch no puede ser usada sin un ExpensesProvider');
  }
  return context;
};

const ExpensesProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(expensesReducer, {});
  const [stateValue, dispatchValue] = useMemo(() => [state, dispatch], [state]);

  return (
    <ExpensesStateContext.Provider value={stateValue}>
      <ExpensesDispatchContext.Provider value={dispatchValue}> {children} </ExpensesDispatchContext.Provider>
    </ExpensesStateContext.Provider>
  );
};

ExpensesProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default ExpensesProvider;
