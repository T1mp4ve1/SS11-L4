import { CLEAR_JOBS, SET_JOBS } from "../actions";

const initialState = {
  jobs: [],
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };

    case CLEAR_JOBS:
      return {
        ...state,
        jobs: [],
      };

    default:
      return state;
  }
};
export default jobReducer;
