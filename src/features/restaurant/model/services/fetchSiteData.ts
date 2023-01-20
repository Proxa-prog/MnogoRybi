import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { getSiteData } from 'features/siteData/model/slice/siteDataSlice';

import { SITE_DATA } from "shared";

export const fetchSiteData = createAsyncThunk(SITE_DATA, async (_, thunkAPI) => {
  const response = await axios.get(SITE_DATA);

  thunkAPI.dispatch(getSiteData(response.data));
});
