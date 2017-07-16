import {
  receiveCurrentUser,
  receiveErrors,
  LOGIN,
  LOGOUT
} from '../actions/session_actions';
import { login, logout } from '../utils/session_api_util';
import {hashHistory} from 'react-router';

export default ({getState, dispatch}) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = errors => dispatch(receiveErrors(errors.responseJSON));

  switch (action.type) {
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logout(() => {
        next(action);
        hashHistory.push('/');
      });
      return next(action);
    default:
      return next(action);
  }
};
