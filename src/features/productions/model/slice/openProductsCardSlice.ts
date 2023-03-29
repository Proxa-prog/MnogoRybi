import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IOpenProductsCard, OpenProductsCardArray } from "features/productions/model/types/openProductsCardTypes";

const initialState: OpenProductsCardArray = {
  openProductsCard: {
    isOpen: false,
    imageUrl: "",
    header: "",
    description: "",
    cost: "",
    statuses: [],
    isPreview: false,
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
