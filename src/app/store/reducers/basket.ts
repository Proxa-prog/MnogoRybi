import { createSlice } from "@reduxjs/toolkit";
import { IAmountProduct } from "./amountProduct";

export enum IBasketAction {
  ADD_PRODUCT = 'ADD_PRODUCT',
}

export interface IBasketArray {
  basket: IAmountProduct[],
}

const initialState: IBasketArray = {
  basket: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProductInBasket: (state, action) => {
      state.basket = [...state.basket, action.payload];
    },
  },
});

export const { addProductInBasket } = basketSlice.actions;

export default basketSlice.reducer;
