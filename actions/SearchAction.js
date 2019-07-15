import SEARCH_RESULTS from './types';

export function searchResults(results) {
  return (dispatch) => {
      dispatch({ type: SEARCH_RESULTS,
                payload: results 
            });
};
}
