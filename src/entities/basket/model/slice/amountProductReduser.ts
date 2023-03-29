import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AmountProductArray, IAmountProduct } from "../types/basketTypes";

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
  AmountOfProductsInConstructor: {
    name: "",
    amount: 0,
    cost: 0,
    baseCost: 440,
  }
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
    setAmountOfProductsInConstructor: (state, action: PayloadAction<number>) => {
      state.AmountOfProductsInConstructor.amount = action.payload;
    },
    setCostOfProductsInConstructor: (state, action: PayloadAction<number>) => {
      state.AmountOfProductsInConstructor.cost = action.payload;
    },
    setBaseCostOfProductsInConstructor: (state, action: PayloadAction<number>) => {
      state.AmountOfProductsInConstructor.baseCost = state.AmountOfProductsInConstructor.baseCost + action.payload;
      state.AmountOfProductsInConstructor.cost = state.AmountOfProductsInConstructor.baseCost * state.AmountOfProductsInConstructor.amount;
    },
  },
});

export const {
  setNewProduct,
  setAmountProduct,
  setCostProduct,
  setBaseProduct,
  setSauce,
  setAmountOfProductsInConstructor,
  setCostOfProductsInConstructor,
  setBaseCostOfProductsInConstructor,
} = amountProductSlice.actions;

export default amountProductSlice.reducer;
