/* eslint-disable arrow-body-style */
import { Actions } from 'react-native-router-flux';
import { VENUES_LIST } from './types';

export const venuesFetch = city => {
    return dispatch => {
      dispatch({
        type: VENUES_LIST,
        payload: city.venues
      });
      Actions.cityVenues();
    };
 };
