import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ResponseApiRestaurantProductions } from "entities/basket";

import {
  getRestaurantBaseProduct,
  getRestaurantProducts,
  getRestaurantSauce,
} from "features/restaurant";

import { RESTAURANT_PRODUCTIONS_URL } from "shared";

export const fetchRestaurantProductions = createAsyncThunk<void, undefined, {}>(RESTAURANT_PRODUCTIONS_URL, async (_, thunkAPI) => {
  try {
    const response = await axios.get<string, ResponseApiRestaurantProductions>(RESTAURANT_PRODUCTIONS_URL);

    thunkAPI.dispatch(getRestaurantProducts(response.data.products));
    thunkAPI.dispatch(getRestaurantBaseProduct(response.data.baseProduct));
    thunkAPI.dispatch(getRestaurantSauce(response.data.sauce));
  } catch (error) {
    console.error(error)
  }
}
);
