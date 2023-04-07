import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  ResponseApiRestaurantProductions,
  restaurantProductionsActions,
} from 'features/restaurant';

import { RESTAURANT_PRODUCTIONS_URL, ThunkConfig } from 'shared';

export const fetchRestaurantProductions = createAsyncThunk<void, void, ThunkConfig<void>>(
  'restaurantProductions/fetchRestaurantProductions',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<string, ResponseApiRestaurantProductions>(
        RESTAURANT_PRODUCTIONS_URL
      );
      thunkAPI.dispatch(
        restaurantProductionsActions.getRestaurantProducts(response.data.products)
      );
      thunkAPI.dispatch(
        restaurantProductionsActions.getRestaurantBaseProduct(response.data.baseProduct)
      );
      thunkAPI.dispatch(restaurantProductionsActions.getRestaurantSauce(response.data.sauce));
    } catch (error) {
      console.error(error);
    }
  }
);
