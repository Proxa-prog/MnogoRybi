import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const addOnBasket = (state: RootState) => state.basket.basketState;

export const openBasket = createSelector(
  [ addOnBasket ],
  (currentProduct) => {

    return currentProduct;
  }
);
