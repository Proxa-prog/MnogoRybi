import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { combineReducers } from "redux";
import descriptionReducer from "./reducers/description";
import productionsReducer from "./reducers/productions";
import openProductsCardReducer from "./reducers/openProductsCard";
import amountProductReduser from "./reducers/amountProduct";
import basketReduser from "./reducers/basket";

const rootReducer = combineReducers({
  description: descriptionReducer,
  productions: productionsReducer,
  openProductsCard: openProductsCardReducer,
  amountProduct: amountProductReduser,
  basket: basketReduser,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
