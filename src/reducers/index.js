import { combineReducers } from 'redux';
import { SearchReducer } from './SearchReducer';
import { CityVenuesReducer } from './CityVenuesReducer';

export default combineReducers({
   SearchReducer,
   CityVenuesReducer,
});
