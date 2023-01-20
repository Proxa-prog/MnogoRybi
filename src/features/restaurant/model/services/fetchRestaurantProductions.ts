import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  getRestaurantBaseProduct,
  getRestaurantProducts,
  getRestaurantSauce,
} from "features/restaurant";

import { RESTAURANT_PRODUCTIONS_URL } from "shared";

export const fetchRestaurantProductions = createAsyncThunk(RESTAURANT_PRODUCTIONS_URL, async (_, thunkAPI) => {
  const response = await axios.get(RESTAURANT_PRODUCTIONS_URL);

  thunkAPI.dispatch(getRestaurantProducts(response.data.products));
  thunkAPI.dispatch(getRestaurantBaseProduct(response.data.baseProduct));
  thunkAPI.dispatch(getRestaurantSauce(response.data.sauce));
  }
);
