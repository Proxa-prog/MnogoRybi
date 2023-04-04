import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAllRestaurantPagesInfo, IName } from 'features/restaurant';

import { IContactsCard } from 'entities/contact';
import { IDescription } from 'entities/descriptions';

const initialState: IAllRestaurantPagesInfo = {
  restaurantPagesInfo: {
    pagesNames: [],
    footerLinksNames: [],
    restaurantAddress: [],
    mainPageDescriptionImagesLinks: [],
  },
};

export const restaurantPagesInfoSlice = createSlice({
  name: 'restaurantPagesInfo',
  initialState,
  reducers: {
    getPagesNames: (state, action: PayloadAction<IName[]>) => {
      state.restaurantPagesInfo.pagesNames = action.payload;
    },
    getFooterLinksNames: (state, action: PayloadAction<IName[]>) => {
      state.restaurantPagesInfo.footerLinksNames = action.payload;
    },
    getRestaurantAddress: (state, action: PayloadAction<IContactsCard[]>) => {
      state.restaurantPagesInfo.restaurantAddress = action.payload;
    },
    getMainPageDescriptionImagesLinks: (
      state,
      action: PayloadAction<IDescription[]>
    ) => {
      state.restaurantPagesInfo.mainPageDescriptionImagesLinks = action.payload;
    },
  },
});

export const {
  reducer: restaurantPagesInfoReducer,
  actions: restaurantPagesInfoActions,
} = restaurantPagesInfoSlice;
