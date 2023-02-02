import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const setAmountProduct = (state: RootState) => state.amountProduct.amountProduct;

export const getAmountProductSelector = createSelector(
  [ setAmountProduct ],
  (amountProduct) => {

    return amountProduct;
  }
);
