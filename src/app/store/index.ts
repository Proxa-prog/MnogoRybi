import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { combineReducers } from "redux";
import descriptionReducer from "./reducers/description";
import productionsReducer from "./reducers/productions";
import openProductsCardReducer from "./reducers/openProductsCard";
import amountProductReduser from "./reducers/amountProduct";
import basketReduser from "./reducers/basket";
import mapReduser from "./reducers/map";
import newsReduser from "./reducers/news";
import registrationReduser from "./reducers/registration";
import userEnterReduser from "./reducers/userEnter";
import configmationReduser from "./reducers/confirmation";
import userAccountReduser from "./reducers/userAccount";

const rootReducer = combineReducers({
  description: descriptionReducer,
  productions: productionsReducer,
  openProductsCard: openProductsCardReducer,
  amountProduct: amountProductReduser,
  basket: basketReduser,
  map: mapReduser,
  news: newsReduser,
  registration: registrationReduser,
  userEnter: userEnterReduser,
  configmation: configmationReduser,
  userAccount: userAccountReduser,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
