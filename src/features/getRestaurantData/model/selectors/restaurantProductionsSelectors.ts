import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const restaurantProductions = (state: RootState) => state.restaurantProductions.restaurantProductions;

export const getRestaurantProductionsSelector = createSelector(
  [ restaurantProductions ],
  (restaurantProductions) => {

    return restaurantProductions;
  }
);
