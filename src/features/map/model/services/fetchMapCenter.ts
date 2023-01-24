import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { changeMapCenter } from "features/map";

import { ResponseApiMap } from "entities/basket";

import { RESTAURANT_LOCATION_URL } from "shared";

export const fetchMapCenter = createAsyncThunk<void, undefined, {}>(RESTAURANT_LOCATION_URL, async (_, thunkAPI) => {
  const response = await axios.get<string, ResponseApiMap>(RESTAURANT_LOCATION_URL);
  const mapCenter = response.data.restautantMapCenter;

  mapCenter.lat = Number(mapCenter.lat);
  mapCenter.lng = Number(mapCenter.lng);

  thunkAPI.dispatch(changeMapCenter(mapCenter));
});
