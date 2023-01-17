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
