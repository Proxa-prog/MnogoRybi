import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const setAmountProduct = (state: RootState) => state.amountProduct.amountProduct;
const setAmountConstructorProduct = (state: RootState) => state.amountProduct.AmountOfProductsInConstructor;

export const getAmountProductSelector = createSelector(
  [ setAmountProduct ],
  (amountProduct) => {

    return amountProduct;
  }
);

export const getAmountConstructorProductSelector = createSelector(
  [ setAmountConstructorProduct ],
  (amountConstructorProduct) => {

    return amountConstructorProduct;
  }
);
