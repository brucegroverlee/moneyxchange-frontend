import { combineReducers } from 'redux'

import currenciesReducer from './currenciesReducer';
import exchangesReducer from './exchangesReducer';
import languageReducer from './languageReducer';
import pagesReducer from './pagesReducer';
import userReducer from './userReducer';

export default combineReducers({
  currencies: currenciesReducer,
  exchanges: exchangesReducer,
  language: languageReducer,
  pages: pagesReducer,
  user: userReducer,
})