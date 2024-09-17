import React, { useReducer } from 'react';
import P from 'prop-types';

function reducer(state, action) {
  switch (action.type) {
    case 'setActive': {
      console.log('reducer');
      return { ...state, activeTab: action.payload };
    }
  }
}

export const TabContext = React.createContext();

export default function TabContextProvider({ children, active }) {
  const tabState = {
    activeTab: active,
  };

  const [state, dispatch] = useReducer(reducer, tabState);

  const setActive = (payload) => {
    dispatch({ type: 'setActive', payload });
  };

  return <TabContext.Provider value={{ state, setActive }}>{children}</TabContext.Provider>;
}

TabContextProvider.propTypes = {
  children: P.node,
  active: P.string.isRequired,
};
