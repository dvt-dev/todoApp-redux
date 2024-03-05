import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const composeEnhancers = composeWithDevTools();

const store = configureStore({ reducer: rootReducer }, composeEnhancers);

export default store;
