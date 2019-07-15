import { SEARCH_RESULTS } from '../actions/types';

const INITIAL_STATE = { city: {}, loading: false };

export const SearchReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
      case SEARCH_RESULTS:
        return action.payload;
      default:
        return state;
      }
    };
    
  // switch (action.type) {
  //   case CITY_SELECTED:
  //     return { ...state, city: action.payload };
  //   default:
  //     return state;
  // }
