import { configureStore } from "@reduxjs/toolkit";
import { counterReducer, userReducer } from "./slice";


// Creacion del store utilizando Redux toolkit
const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  }
});

export default store;