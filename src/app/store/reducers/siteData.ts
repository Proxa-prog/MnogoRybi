import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IContactsCard,
  IPopupCoordinates,
  IProducts,
} from "entities/constants/constants";
import { IDescription } from "./description";

export interface ISiteData {
  popupCoordinates: IPopupCoordinates[];
  mapCenter: IPopupCoordinates;
  products: IProducts[];
  baseProduct: IProducts[];
  sauce: IProducts[];
  info: IProducts[];
  address: IContactsCard[];
  info_footer: IProducts[];
  descriptionImagesLinks: IDescription[];
}

export interface IAllData {
  siteData: ISiteData;
}

const initialState: IAllData = {
  siteData: {
    popupCoordinates: [],
    mapCenter: {
      lat: 0,
      lng: 0,
    },
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
    getMapCenter: (state, action: PayloadAction<IPopupCoordinates>) => {
      state.siteData.mapCenter = action.payload;
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
    getDescriptionImagesLinks: (state, action: PayloadAction<IDescription[]>) => {
      state.siteData.info_footer = action.payload;
    },
  },
});

export const {
  getSiteData,
  getMapCenter,
  getProducts,
  getBaseProduct,
  getSauce,
  getInfo,
  getAddress,
  getInfoFooter,
  getDescriptionImagesLinks,
} = siteDataSlice.actions;

export default siteDataSlice.reducer;
