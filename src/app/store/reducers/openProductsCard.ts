import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { StatusMarkerProps } from "shared/ui/StatusMarker/StatusMarker";

export interface IOpenProductsCard {
  isOpen: boolean;
  imageUrl: string | undefined;
  header?: string;
  description?: string;
  cost?: string;
  statuses?: StatusMarkerProps[];
}

export interface OpenProductsCardArray {
  openProductsCard: IOpenProductsCard;
}

export enum OpenProductsCardAction {
  SET_OPEN_PRODUCTS_CARD = "SET_OPEN_PRODUCTS_CARD",
}

export interface IDescriptionsAction {
  type: OpenProductsCardAction;
  payload: IOpenProductsCard[];
}

const initialState: OpenProductsCardArray = {
  openProductsCard: {
    isOpen: false,
    imageUrl: "",
    header: "",
    description: "",
    cost: "",
    statuses: [],
  },
};

export const openProductsCardSlice = createSlice({
  name: "openProductsCard",
  initialState,
  reducers: {
    setOpenProductsCard: (state, action: PayloadAction<IOpenProductsCard>) => {
      state.openProductsCard = action.payload;
    },
  },
});

export const { setOpenProductsCard } = openProductsCardSlice.actions;

export default openProductsCardSlice.reducer;
