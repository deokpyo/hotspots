import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  LOGOUT,
  TOGGLE_MODAL
} from '../actions/session_actions.js';

import {merge} from 'lodash';

let _defaultState = {
    currentUser: {
      username: ''
    },
    errors: [],
    modal: false
  };

export const SessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let username = action.currentUser.username;
      return merge(newState, { currentUser: {username}, errors: [] });
    case RECEIVE_ERRORS:
      return merge(newState, { errors: action.errors });
    case LOGOUT:
      return merge({}, _defaultState);
    case TOGGLE_MODAL:
      return merge(newState, { modal: !newState.modal });
    default:
      return state;
  }
};

export default SessionReducer;
