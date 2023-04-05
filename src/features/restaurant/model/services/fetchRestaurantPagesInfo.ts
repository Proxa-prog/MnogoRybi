import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ResponseApiRestaurantPagesInfo, restaurantPagesInfoActions } from 'features/restaurant';

import { RESTAURANT_PAGES_INFO_URL, ThunkConfig } from 'shared';

export const fetchPagesInfo = createAsyncThunk<void, void, ThunkConfig<void>>(
  RESTAURANT_PAGES_INFO_URL,
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<string, ResponseApiRestaurantPagesInfo>(
        RESTAURANT_PAGES_INFO_URL
      );

      thunkAPI.dispatch(
        restaurantPagesInfoActions.getPagesNames(response.data.pagesNames)
      );
      thunkAPI.dispatch(
        restaurantPagesInfoActions.getFooterLinksNames(
          response.data.footerLinksNames
        )
      );
      thunkAPI.dispatch(
        restaurantPagesInfoActions.getRestaurantAddress(
          response.data.restaurantAddress
        )
      );
      thunkAPI.dispatch(
        restaurantPagesInfoActions.getMainPageDescriptionImagesLinks(
          response.data.mainPageDescriptionImagesLinks
        )
      );
    } catch (error) {
      console.error(error);
    }
  }
);
