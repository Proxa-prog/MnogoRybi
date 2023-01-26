import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ResponseApiRestaurantLocation } from "entities/basket";
import { IPopupCoordinates } from "entities/contact";
import {
  getRestaurantLocation,
  getRestaurantMapCenter,
} from "features/restaurant";

import { RESTAURANT_LOCATION_URL, ThunkConfig } from "shared";

const coordinatesToNumber = (coordinates: IPopupCoordinates) => {
  coordinates.lat = Number(coordinates.lat);
  coordinates.lng = Number(coordinates.lng);

  return coordinates;
};

export const fetchRestaurantLocation = createAsyncThunk<void, void, ThunkConfig<void>>(
  RESTAURANT_LOCATION_URL,
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<string, ResponseApiRestaurantLocation>(RESTAURANT_LOCATION_URL);

      const restautantPopupCoordinatesToNumber =
        response.data.restautantPopupCoordinates.map(
          (item: IPopupCoordinates) => {
            coordinatesToNumber(item);

            return item;
          }
        );

      const restautantMapCenterToNumber = {
        lat: Number(response.data.restautantMapCenter.lat),
        lng: Number(response.data.restautantMapCenter.lng),
      };

      thunkAPI.dispatch(getRestaurantLocation(restautantPopupCoordinatesToNumber));
      thunkAPI.dispatch(getRestaurantMapCenter(restautantMapCenterToNumber));
    } catch (error) {
      console.error(error)
    }
  }
);
