import {
  fetchAllSpots,
  fetchSpot,
  receiveErrors,
  FETCH_ALL_SPOTS,
  FETCH_SPOT
} from '../actions/spot_actions';
import { getSpots, getSpot } from '../utils/spot_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = spots => dispatch(receiveAllSpots(spots));
  const errorCallback = errors => dispatch(receiveErrors(errors.responseJSON));

  switch (action.type) {
    case FETCH_ALL_SPOTS:
      getSpots(successCallback, errorCallback);
      return next(action);
    case FETCH_SPOT:
      getSpot(action.spot.id, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
