import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const setAmountProduct = (state: RootState) => state.amountProduct.amountProduct;

export const getAmountProduct = createSelector(
  [ setAmountProduct ],
  (setAmountProduct) => {

    return setAmountProduct;
  }
);
