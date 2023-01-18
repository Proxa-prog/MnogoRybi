import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { changeMapCenter } from "features/map";

import { SITE_DATA } from "shared/assets/constants/constants";

export const fetchMapCenter = createAsyncThunk(SITE_DATA, async (dispatch: any) => {
  const response = await axios.get(SITE_DATA);
  const mapCenter = response.data.mapCenter;

  mapCenter.lat = Number(mapCenter.lat);
  mapCenter.lng = Number(mapCenter.lng);

  dispatch(changeMapCenter(mapCenter));
});
