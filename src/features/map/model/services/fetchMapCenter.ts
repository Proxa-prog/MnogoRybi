import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { changeMapCenter } from "features/map";

import { SITE_DATA } from "shared";

export const fetchMapCenter = createAsyncThunk(SITE_DATA, async (_, thunkAPI) => {
  const response = await axios.get(SITE_DATA);
  const mapCenter = response.data.mapCenter;

  mapCenter.lat = Number(mapCenter.lat);
  mapCenter.lng = Number(mapCenter.lng);

  thunkAPI.dispatch(changeMapCenter(mapCenter));
});
