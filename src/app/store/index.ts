import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { combineReducers } from "redux";
import descriptionReducer from "entities/Description/model/slice/descriptionSlice";
import productionsReducer from "features/productions/model/slice/productionsReducer";
import openProductsCardReducer from "features/openProductsCard/model/slice/openProductsCardSlice";
import amountProductReduser from "entities/basket/model/slice/amountProductReduser";
import basketReduser from "entities/basket/model/slice/basketReducer";
import mapReduser from "features/map/model/slice/mapReducer";
import newsReduser from "features/news/model/slice/newsReducer";
import registrationReduser from "features/ModalRegistration/model/slice/registrationReducer";
import userEnterReduser from "entities/user/model/slice/userEnterSlice";
import configmationReduser from "features/Confirmation/model/slice/confirmationReducer";
import userAccountReduser from "entities/user/model/slice/userAccountSlice";
import siteDataReduser from "features/siteData/model/slice/siteDataSlice";

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
  siteData: siteDataReduser,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
