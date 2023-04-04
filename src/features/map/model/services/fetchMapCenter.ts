import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { mapActions } from 'features/map';

import { ResponseApiMap } from 'entities/basket';

import { RESTAURANT_LOCATION_URL, ThunkConfig } from 'shared';

export const fetchMapCenter = createAsyncThunk<void, void, ThunkConfig<void>>(
  RESTAURANT_LOCATION_URL,
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<string, ResponseApiMap>(
        RESTAURANT_LOCATION_URL
      );
      const mapCenter = response.data.restaurantMapCenter;

      mapCenter.lat = Number(mapCenter.lat);
      mapCenter.lng = Number(mapCenter.lng);

      thunkAPI.dispatch(mapActions.changeMapCenter(mapCenter));
    } catch (error) {
      console.error(error);
    }
  }
);
