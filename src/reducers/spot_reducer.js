import {
  RECEIVE_ALL_SPOTS,
  RECEIVE_ERRORS,
  RECEIVE_SPOT
} from '../actions/spot_actions.js';

import {merge} from 'lodash';

let _defaultState = {};

export const SpotReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALL_SPOTS:
      return merge(newState, { errors: [] });
    case RECEIVE_ERRORS:
      return merge(newState, { errors: action.errors });
    case RECEIVE_SPOT:
      return merge({}, _defaultState);
    default:
      return state;
  }
};

export default SpotReducer;
