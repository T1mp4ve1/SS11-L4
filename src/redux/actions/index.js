export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export const SET_JOBS = "SET_JOBS";
export const CLEAR_JOBS = "CLEAR_JOBS";

export const addToFavourites = (companyName) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: companyName,
  };
};
export const removeFromFavourites = (companyName) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: companyName,
  };
};

export const setJobs = (jobArray) => ({
  type: SET_JOBS,
  payload: jobArray,
});
export const clearJobs = () => ({
  type: CLEAR_JOBS,
});

export const getJobsAction = (query) => {
  return async (dispatch) => {
    const baseEndpoint =
      "https://strive-benchmark.herokuapp.com/api/jobs?search=";

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setJobs(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
