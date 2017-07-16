import $ from 'jquery';

export const getSpots = (success, error) => {
  $.ajax({
    url: 'api/spots',
    success,
    error
  });
};

export const getSpot = (spotId, success, error) => {
  $.ajax({
    url: `api/spots/${spotId}`,
    success,
    error
  });
};
