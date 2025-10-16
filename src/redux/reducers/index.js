import { combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "./favouritesReducer";

const rootReducer = combineReducers({
  reducerFavourites: favouritesReducer,
});
export default rootReducer;
