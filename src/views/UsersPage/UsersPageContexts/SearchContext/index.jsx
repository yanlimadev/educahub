import React, { useReducer, useState } from 'react';
import defaultPropTypes from '../../../../assets/js/defaultPropTypes';

export const SearchContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'searchByName': {
      return { ...state, nome: action.payload };
    }

    case 'searchByCourse': {
      return { ...state, curso: action.payload };
    }
  }
}

export default function SearchContextProvider({ children }) {
  const searchState = { nome: '', curso: '' };
  const [foundStudents, setFoundStudents] = useState(0);

  const [searchValue, dispatch] = useReducer(reducer, searchState);

  const searchByName = (payload) => {
    dispatch({ type: 'searchByName', payload });
  };

  const searchByCourse = (payload) => {
    dispatch({ type: 'searchByCourse', payload });
  };

  return (
    <SearchContext.Provider value={{ searchValue, searchByName, searchByCourse, foundStudents, setFoundStudents }}>
      {children}
    </SearchContext.Provider>
  );
}

SearchContextProvider.propTypes = defaultPropTypes;
