import { combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "./favouritesReducer";
import jobReducer from "./jobsReducer";

const rootReducer = combineReducers({
  reducerFavourites: favouritesReducer,
  reducerJobs: jobReducer,
});
export default rootReducer;
