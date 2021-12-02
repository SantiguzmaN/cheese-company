import React, { createContext,  useContext } from 'react';
import { loadingReducer } from './loadingReducer';

const initialState = { loadingCount: 0 };

const LoadingStateContext = createContext(initialState);
const LoadingDispatchContext = createContext(() => {
  // Empty function
});

export function useLoadingState() {
  const context = useContext(LoadingStateContext);
  if (context === undefined) {
    throw new Error('useLoadingState must be used within a LoadingProvider');
  }
  return context;
}

export function useLoadingDispatch() {
  const context = useContext(LoadingDispatchContext);
  if (context === undefined) {
    throw new Error('useLoadingDispatch must be used within a LoadingProvider');
  }
  return context;
}

const LoadingProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(loadingReducer, initialState);

  return (
    <LoadingStateContext.Provider value={state}>
      <LoadingDispatchContext.Provider value={dispatch}> {children} </LoadingDispatchContext.Provider>
    </LoadingStateContext.Provider>
  );
};

export default LoadingProvider;
