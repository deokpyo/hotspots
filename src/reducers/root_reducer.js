import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import SessionReducer from './session_reducer';

export default combineReducers ({
  router: routerReducer,
  session: SessionReducer
});
