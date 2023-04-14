import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  coordinatesToNumber,
  ResponseApiRestaurantLocation,
  restaurantActions
} from 'features/getRestaurantData';

import { IPopupCoordinates } from 'entities/contact';

import { RESTAURANT_LOCATION_URL, ThunkConfig } from 'shared';

export const fetchRestaurantLocation = createAsyncThunk<
  void,
  void,
  ThunkConfig<void>
>('restaurantLocation/fetchRestaurantLocation', async (_, thunkAPI) => {
  try {
    const response = await axios.get<string, ResponseApiRestaurantLocation>(
      RESTAURANT_LOCATION_URL
    );

    const restaurantPopupCoordinatesToNumber = response.data.restaurantPopupCoordinates.map(
      (item: IPopupCoordinates) => {
        coordinatesToNumber(item);

        return item;
      }
    );

    const restaurantMapCenterToNumber = {
      lat: Number(response.data.restaurantMapCenter.lat),
      lng: Number(response.data.restaurantMapCenter.lng),
    };

    thunkAPI.dispatch(restaurantActions.getRestaurantLocation(restaurantPopupCoordinatesToNumber));
    thunkAPI.dispatch(restaurantActions.getRestaurantMapCenter(restaurantMapCenterToNumber));
  } catch (error) {
    console.error(error);
  }
});
