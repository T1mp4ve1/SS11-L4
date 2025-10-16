import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";

const store = configureStore({
  reducer: {
    main: mainReducer,
  },
});
export default store;
