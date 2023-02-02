import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProducts } from "entities/basket";
import { IAllIRestaurantProductionsData } from "features/restaurant";

const initialState: IAllIRestaurantProductionsData = {
  restaurantProductions: {
    products: [],
    baseProduct: [],
    sauce: [],
  }
};

export const restaurantProductionsSlice = createSlice({
  name: "restaurantProductions",
  initialState,
  reducers: {
    getRestaurantProducts: (state, action: PayloadAction<IProducts[]>) => {
      state.restaurantProductions.products = action.payload;
    },
    getRestaurantBaseProduct: (state, action: PayloadAction<IProducts[]>) => {
      state.restaurantProductions.baseProduct = action.payload;
    },
    getRestaurantSauce: (state, action: PayloadAction<IProducts[]>) => {
      state.restaurantProductions.sauce = action.payload;
    },
  }
});

export const {
  getRestaurantProducts,
  getRestaurantBaseProduct,
  getRestaurantSauce,
} = restaurantProductionsSlice.actions;

export default restaurantProductionsSlice.reducer;
