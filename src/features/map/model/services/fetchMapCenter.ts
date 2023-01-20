import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { changeMapCenter } from "features/map";

import { RESTAURANT_LOCATION_URL } from "shared";

export const fetchMapCenter = createAsyncThunk(RESTAURANT_LOCATION_URL, async (_, thunkAPI) => {
  const response = await axios.get(RESTAURANT_LOCATION_URL);
  const mapCenter = response.data.restautantMapCenter;

  mapCenter.lat = Number(mapCenter.lat);
  mapCenter.lng = Number(mapCenter.lng);

  thunkAPI.dispatch(changeMapCenter(mapCenter));
});
