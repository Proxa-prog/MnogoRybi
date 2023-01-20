import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProducts } from "entities/basket/model/types/basketTypes";

import {
  IContactsCard,
  IPopupCoordinates,
} from "entities/contact";
import { IDescription } from "entities/descriptions";

import { IAllData, ISiteData } from "../types/siteDataTypes";

const initialState: IAllData = {
  siteData: {
    popupCoordinates: [],
    products: [],
    baseProduct: [],
    sauce: [],
    info: [],
    address: [],
    info_footer: [],
    descriptionImagesLinks: [],
  },
};

export const siteDataSlice = createSlice({
  name: "siteData",
  initialState,
  reducers: {
    getSiteData: (state, action: PayloadAction<ISiteData>) => {
      state.siteData = action.payload;
    },
    getProducts: (state, action: PayloadAction<IProducts[]>) => {
      state.siteData.products = action.payload;
    },
    getBaseProduct: (state, action: PayloadAction<IProducts[]>) => {
      state.siteData.baseProduct = action.payload;
    },
    getSauce: (state, action: PayloadAction<IProducts[]>) => {
      state.siteData.sauce = action.payload;
    },
    getInfo: (state, action: PayloadAction<IProducts[]>) => {
      state.siteData.info = action.payload;
    },
    getAddress: (state, action: PayloadAction<IContactsCard[]>) => {
      state.siteData.address = action.payload;
    },
    getInfoFooter: (state, action: PayloadAction<IProducts[]>) => {
      state.siteData.info_footer = action.payload;
    },
    getDescriptionImagesLinks: (
      state,
      action: PayloadAction<IDescription[]>
    ) => {
      state.siteData.info_footer = action.payload;
    },
  },
});

export const {
  getSiteData,
  getProducts,
  getBaseProduct,
  getSauce,
  getInfo,
  getAddress,
  getInfoFooter,
  getDescriptionImagesLinks,
} = siteDataSlice.actions;

export default siteDataSlice.reducer;
