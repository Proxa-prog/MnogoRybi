import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import descriptionReducer from "./reducers/description";
import productionsReducer from "./reducers/productions";

const rootReducer = combineReducers({
  description: descriptionReducer,
  productions: productionsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

