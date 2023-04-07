import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProductions, IProductionsArray } from "../types/productionTypes";

const initialState: IProductionsArray = {
  productions: {
    poke: [],
    rolls: [],
    wok: [],
    curry: [],
    sandwich: [],
    deserts: [],
    beverages: [],
  },
};

export const productionsSlice = createSlice({
  name: "productions",
  initialState,
  reducers: {
    getProductionsAction: (state, action: PayloadAction<IProductions>) => {
      state.productions = action.payload;
    },
  },
});

export const {
  reducer: productionsReducer,
  actions: productionsActions,
} = productionsSlice;
