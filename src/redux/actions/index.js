export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

// export const SET_JOBS = "SET_JOBS";
// export const CLEAR_JOBS = "CLEAR_JOBS";

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