import React, { createContext, useMemo } from 'react';
import { globalReducer } from './globalReducer';
import PropTypes from 'prop-types';

const GlobalStateContext = createContext({});
const GlobalDispatchContext = createContext(() => {
  // Empty function
});

export const useGlobalState = () => {
  const context = React.useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState no puede ser usada sin un GlobalStateProvider');
  }
  return context;
};

export const useGlobalDispatch = () => {
  const context = React.useContext(GlobalDispatchContext);
  if (context === undefined) {
    throw new Error('useGlobalDispatch no puede ser usada sin un GlobalStateProvider');
  }
  return context;
};

const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(globalReducer, {});
  const [stateValue, dispatchValue] = useMemo(() => [state, dispatch], [state]);

  return (
    <GlobalStateContext.Provider value={stateValue}>
      <GlobalDispatchContext.Provider value={dispatchValue}> {children} </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

GlobalStateProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default GlobalStateProvider;
