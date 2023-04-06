import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAllIRestaurantLocationData } from 'features/restaurant';

import { IPopupCoordinates } from 'entities/contact';

const initialState: IAllIRestaurantLocationData = {
  restaurantLocation: {
    restaurantPopupCoordinates: [],
    restaurantMapCenter: {
      lat: 0,
      lng: 0,
    },
  },
};

export const restaurantLocationSlice = createSlice({
  name: 'restaurantLocation',
  initialState,
  reducers: {
    getRestaurantLocation: (
      state,
      action: PayloadAction<IPopupCoordinates[]>
    ) => {
      state.restaurantLocation.restaurantPopupCoordinates = action.payload;
    },
    getRestaurantMapCenter: (
      state,
      action: PayloadAction<IPopupCoordinates>
    ) => {
      state.restaurantLocation.restaurantMapCenter = action.payload;
    },
  },
});

export const {
  reducer: restaurantReducer,
  actions: restaurantActions,
} =
  restaurantLocationSlice;
