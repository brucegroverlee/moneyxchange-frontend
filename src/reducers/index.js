import { combineReducers } from 'redux'

import exchangesReducer from './exchangesReducer';
import languageReducer from './languageReducer';
import pagesReducer from './pagesReducer';
import userReducer from './userReducer';

export default combineReducers({
  exchanges: exchangesReducer,
  language: languageReducer,
  pages: pagesReducer,
  user: userReducer,
})