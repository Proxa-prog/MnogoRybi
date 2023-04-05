import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPopupCoordinates } from 'entities/contact';
import { ResponseApiRestaurantLocation, restaurantActions } from 'features/restaurant';
import { RESTAURANT_LOCATION_URL, ThunkConfig } from 'shared';

const coordinatesToNumber = (coordinates: IPopupCoordinates) => {
  coordinates.lat = Number(coordinates.lat);
  coordinates.lng = Number(coordinates.lng);

  return coordinates;
};

export const fetchRestaurantLocation = createAsyncThunk<
  void,
  void,
  ThunkConfig<void>
>(RESTAURANT_LOCATION_URL, async (_, thunkAPI) => {
  try {
    const response = await axios.get<string, ResponseApiRestaurantLocation>(
      RESTAURANT_LOCATION_URL
    );

    const restaurantPopupCoordinatesToNumber =
      response.data.restaurantPopupCoordinates.map(
        (item: IPopupCoordinates) => {
          coordinatesToNumber(item);

          return item;
        }
      );

    const restaurantMapCenterToNumber = {
      lat: Number(response.data.restaurantMapCenter.lat),
      lng: Number(response.data.restaurantMapCenter.lng),
    };

    thunkAPI.dispatch(
      restaurantActions.getRestaurantLocation(restaurantPopupCoordinatesToNumber)
    );
    thunkAPI.dispatch(restaurantActions.getRestaurantMapCenter(restaurantMapCenterToNumber));
  } catch (error) {
    console.error(error);
  }
});
