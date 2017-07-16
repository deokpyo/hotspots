import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import SessionReducer from './session_reducer';
import SpotReducer from './spot_reducer';

export default combineReducers ({
  router: routerReducer,
  spots: SpotReducer,
  session: SessionReducer
});
