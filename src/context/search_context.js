import React, { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/search_reducer';
import { searchResultsForeword } from '../utils/constants';
import { getJSON } from '../utils/helpers';
import {
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  SET_QUERY,
  SET_SEARCH_DATA,
} from '../actions';

const SearchContext = React.createContext();

const initialState = {
  query: '',
  page: 1,
  data: [],
  loading: false,
};

const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    setLoadingTrue();
    try {
      const data = await getJSON(
        `${searchResultsForeword}&query=${state.query}&page=${state.page}&include_adult=false`
      );
      dispatch({ type: SET_SEARCH_DATA, payload: data });
    } catch (error) {
      console.log(error);
    }
    setLoadingFalse();
  };

  const changeQuery = input => {
    dispatch({ type: SET_QUERY, payload: input });
  };

  function setLoadingTrue() {
    dispatch({ type: SET_LOADING_TRUE });
  }

  function setLoadingFalse() {
    dispatch({ type: SET_LOADING_FALSE });
  }

  return (
    <SearchContext.Provider value={{ ...state, changeQuery, fetchData }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};

export default SearchProvider;