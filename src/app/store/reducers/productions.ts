import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CardProps } from "widgets/ui/Card/Card";

export enum ProductionAction {
  GET_PRODUCTIONS = "GET_PRODUCTIONS",
}

export interface IProductionsAction {
  type: ProductionAction;
  payload: CardProps[];
}

export interface IProductions {
  poke: CardProps[];
  rolls: CardProps[];
  wok: CardProps[];
  curry: CardProps[];
  sandwich: CardProps[];
  deserts: CardProps[];
  beverages: CardProps[];
}

export interface IProductionsArray {
  productions: IProductions;
}

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

export const { getProductionsAction } = productionsSlice.actions;

export default productionsSlice.reducer;
