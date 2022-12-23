import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IIngridients {
  baseProduct?: string;
  sauce?: string;
}

export interface IAmountProduct extends IIngridients {
  name: string | undefined;
  amount: number;
  cost: number;
  baseCost?: number;
  imageUrl?: string;
  description?: string;
  id?: string;
}

export interface IHowMuchProduct {
  amount: number;
  cost: number;
}

export interface AmountProductArray {
  amountProduct: IAmountProduct;
}

export enum AmountProductAction {
  CHANGE_AMOUNT_PRODUCT = "CHANGE_AMOUNT_PRODUCT",
  SET_BASE_PRODUCT = "SET_BASE_PRODUCT",
  SET_SAUCE = "SET_SAUCE",
}

export interface IAmountProductAction {
  type: AmountProductAction;
  payload: IAmountProduct;
}

const initialState: AmountProductArray = {
  amountProduct: {
    name: "",
    amount: 0,
    cost: 0,
    imageUrl: "",
    description: "",
    baseCost: 0,
    baseProduct: "",
    sauce: "",
    id: "",
  },
};

export const amountProductSlice = createSlice({
  name: "amountProduct",
  initialState,
  reducers: {
    setNewProduct: (state, action: PayloadAction<IAmountProduct>) => {
      state.amountProduct = action.payload;
    },
    setAmountProduct: (state, action: PayloadAction<number>) => {
      state.amountProduct.amount = action.payload;
    },
    setCostProduct: (state, action: PayloadAction<number>) => {
      state.amountProduct.cost = action.payload;
    },
    setBaseProduct: (state, action: PayloadAction<string>) => {
      state.amountProduct.baseProduct = action.payload;
    },
    setSauce: (state, action: PayloadAction<string>) => {
      state.amountProduct.sauce = action.payload;
    },
  },
});

export const {
  setNewProduct,
  setAmountProduct,
  setCostProduct,
  setBaseProduct,
  setSauce,
} = amountProductSlice.actions;

export default amountProductSlice.reducer;
