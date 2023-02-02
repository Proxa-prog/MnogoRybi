import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  getPagesNames,
  getFooterLinksNames,
  getRestaurantAddress,
  getMainPageDescriptionImagesLinks
} from "features/restaurant";

import { ResponseApiRestaurantPagesInfo } from "entities/basket";

import { RESTAURANT_PAGES_INFO_URL, ThunkConfig } from "shared";

export const fetchPagesInfo = createAsyncThunk<void, void, ThunkConfig<void>>(RESTAURANT_PAGES_INFO_URL, async (_, thunkAPI) => {
  try {
    const response = await axios.get<string, ResponseApiRestaurantPagesInfo>(RESTAURANT_PAGES_INFO_URL);

    thunkAPI.dispatch(getPagesNames(response.data.pagesNames));
    thunkAPI.dispatch(getFooterLinksNames(response.data.footerLinksNames));
    thunkAPI.dispatch(getRestaurantAddress(response.data.restaurantAddress));
    thunkAPI.dispatch(getMainPageDescriptionImagesLinks(response.data.mainPageDescriptionImagesLinks));
  } catch (error) {
    console.error(error)
  }
});
