const initialState = {
  count: 0,
  favourites: [],
};

const mainReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + action.payload,
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - action.payload,
      };

    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };

    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: state.favourites.filter(
          (company) => company !== action.payload
        ),
      };

    default:
      return state;
  }
};
export default mainReducer;
