export const RECEIVE_ALL_SPOTS = 'RECEIVE_ALL_SPOTS';
export const FETCH_ALL_SPOTS = 'FETCH_ALL_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';
export const FETCH_SPOT = 'FETCH_SPOT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveAllSpots = (spots) => {
  type: RECEIVE_ALL_SPOTS,
  spots
};

export const receiveSpot = spot => {
  type: RECEIVE_SPOT,
  spot
};

export const fetchAllSpots = () => {
  type: FETCH_ALL_SPOTS
};

export const fetchSpot = spot => {
  type: FETCH_SPOT,
  spot
};

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
