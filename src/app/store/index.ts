import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import descriptionReducer from "./reducers/description";

const rootReducer = combineReducers({
  description: descriptionReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

