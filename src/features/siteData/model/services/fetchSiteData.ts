import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { getSiteData } from 'features/siteData/model/slice/siteDataSlice';

import { SITE_DATA } from "shared";

export const fetchSiteData = createAsyncThunk(SITE_DATA, async (dispatch: any) => {
  const response = await axios.get(SITE_DATA);
  const responseToNumber = response.data.popupCoordinates.map((item: any) => {
    item.lat = Number(item.lat);
    item.lng = Number(item.lng);

    return item;
  });

  response.data.popupCoordinates = responseToNumber;

  dispatch(getSiteData(response.data));
});
