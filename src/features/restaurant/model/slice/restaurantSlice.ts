import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IPopupCoordinates } from "entities/contact";
import { IAllIrestaurantLocationData } from "features/restaurant";

const initialState: IAllIrestaurantLocationData = {
  restaurantLocation: {
    restautantPopupCoordinates: [],
    restautantMapCenter: {
      lat: 0,
      lng: 0,
    },
  }
}

export const restaurantLocationSlice = createSlice({
  name: "restaurantLocation",
  initialState,
  reducers: {
    getRestaurantLocation: (state, action: PayloadAction<IPopupCoordinates[]>) => {
      state.restaurantLocation.restautantPopupCoordinates = action.payload;
    },
    getRestaurantMapCenter: (state, action: PayloadAction<IPopupCoordinates>) => {
      state.restaurantLocation.restautantMapCenter = action.payload;
    }
  }
});

export const {
  getRestaurantLocation,
  getRestaurantMapCenter,
} = restaurantLocationSlice.actions;

export default restaurantLocationSlice.reducer;
