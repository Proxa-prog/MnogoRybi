import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const restaurantLocation = (state: RootState) => state.restaurantLocation.restaurantLocation;

export const getRestaurantLocationSelector = createSelector(
  [ restaurantLocation ],
  (restaurantLocation) => {

    return restaurantLocation;
  }
);
