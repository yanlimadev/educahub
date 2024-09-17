import React, { useReducer } from 'react';
import defaultPropTypes from '../../../../assets/js/defaultPropTypes';

export const SearchContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'searchName': {
      console.log('reducer');
      return { ...state, nome: action.payload };
    }
  }
}

export default function SearchContextProvider({ children }) {
  const searchState = { nome: '' };

  const [state, dispatch] = useReducer(reducer, searchState);

  const searchName = (payload) => {
    dispatch({ type: 'searchName', payload });
  };

  return <SearchContext.Provider value={{ state, searchName }}>{children}</SearchContext.Provider>;
}

SearchContextProvider.propTypes = defaultPropTypes;
