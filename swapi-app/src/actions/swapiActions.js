export const fetchSwapiData = (url) => async (dispatch) => {
    dispatch({ type: 'FETCH_SWAPI_REQUEST' });
    try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: 'FETCH_SWAPI_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'FETCH_SWAPI_FAILURE', payload: error.message });
    }
};

export const clearSwapiData = () => ({ type: 'CLEAR_SWAPI_DATA' });