import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const setOpenProductsCard = (state: RootState) => state.openProductsCard.openProductsCard;

export const openProductsCard = createSelector(
  [ setOpenProductsCard ],
  (getOpenProductsCard) => {

    return getOpenProductsCard;
  }
);
