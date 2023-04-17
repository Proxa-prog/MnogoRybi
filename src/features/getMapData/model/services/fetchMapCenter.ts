import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import {mapActions} from "features/getMapData";
import { ResponseApiMap } from "features/getRestaurantData";

import { RESTAURANT_LOCATION_URL, ThunkConfig } from 'shared';

export const fetchMapCenter = createAsyncThunk<void, void, ThunkConfig<void>>(
  'getMapData/fetchMapCenter',
  async (_, thunkAPI) => {
    try {
      console.log('fetchMapCenter')
      const response = await axios.get<string, ResponseApiMap>(RESTAURANT_LOCATION_URL);
      const mapCenter = response.data.restaurantMapCenter;

      mapCenter.lat = Number(mapCenter.lat);
      mapCenter.lng = Number(mapCenter.lng);

      thunkAPI.dispatch(mapActions.changeMapCenter(mapCenter));
    } catch (error) {
      console.error(error);
    }
  }
);
