import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { combineReducers } from 'redux';

import {
  productionsReducer as productions,
  openProductsCardReducer as openProductsCard,
  pokeIngredientsReducer as pokeIngredients
} from 'features/productions';
import { mapReducer as map } from 'features/map';
import { newsReducer as news } from 'features/news';
import {
  registrationReducer as registration,
  confirmationReducer as confirmation,
} from 'features/registration';
import {
  restaurantReducer as restaurant,
  restaurantProductionsReducer as restaurantProductions,
  restaurantPagesInfoReducer as restaurantPagesInfo,
} from 'features/restaurant';

import { descriptionReducer as description } from 'entities/descriptions';
import {
  amountProductReducer as amountProduct,
  basketReducer as basket,
} from 'entities/basket';
import {
  userEnterReducer as userEnter,
  userAccountReducer as userAccount,
} from 'entities/user';
import {
  constructorReducer as constructor,
  filtersReducer as filters,
} from 'entities/constructor';

const rootReducer = combineReducers({
  description: description,
  productions: productions,
  openProductsCard: openProductsCard,
  amountProduct: amountProduct,
  basket: basket,
  map: map,
  news: news,
  registration: registration,
  userEnter: userEnter,
  confirmation: confirmation,
  userAccount: userAccount,
  restaurantLocation: restaurant,
  restaurantProductions: restaurantProductions,
  restaurantPagesInfo: restaurantPagesInfo,
  ingredients: pokeIngredients,
  constructorReducer: constructor,
  filters: filters,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
