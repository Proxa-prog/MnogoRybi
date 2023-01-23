import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  getPagesNames,
  getFooterLinksNames,
  getRestaurantAddress,
  getMainPageDescriptionImagesLinks
} from "features/restaurant";

import { RESTAURANT_PAGES_INFO_URL } from "shared";

export const fetchPagesInfo = createAsyncThunk(RESTAURANT_PAGES_INFO_URL, async (_, thunkAPI) => {
  const response = await axios.get(RESTAURANT_PAGES_INFO_URL);

  thunkAPI.dispatch(getPagesNames(response.data.pagesNames));
  thunkAPI.dispatch(getFooterLinksNames(response.data.footerLinksNames));
  thunkAPI.dispatch(getRestaurantAddress(response.data.restaurantAddress));
  thunkAPI.dispatch(getMainPageDescriptionImagesLinks(response.data.mainPageDescriptionImagesLinks));
});
