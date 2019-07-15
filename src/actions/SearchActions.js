import { Actions } from 'react-native-router-flux';
import { CITY_SELECTED } from './types';

export const citySelected = city => {
  return (dispatch) => {
    dispatch({ type: CITY_SELECTED, payload: city }).then(Actions.cityVenues());
  };
};

// const loginUserSuccess = (dispatch ,user) =>{
//   dispatch({
//     type: LOGIN_USER_SUCCESS,
//     payload: user
//   });
//   Actions.main();
// };
