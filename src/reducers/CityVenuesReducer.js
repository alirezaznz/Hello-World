import { VENUES_LIST } from '../actions/types';

const INITIAL_STATE = { venues: {}, loading: false };

export const CityVenuesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VENUES_LIST:
      //console.log(action.payload)
      return { ...state, venues: action.payload };
  default:
    return state;
}
};
