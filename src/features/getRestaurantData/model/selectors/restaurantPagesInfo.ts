import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const restaurantPagesInfo = (state: RootState) => state.restaurantPagesInfo.restaurantPagesInfo;

export const getRestaurantPagesInfoSelector = createSelector(
  [ restaurantPagesInfo ],
  (restaurantPagesInfo) => {

    return restaurantPagesInfo;
  }
);
