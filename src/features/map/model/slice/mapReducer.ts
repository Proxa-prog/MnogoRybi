import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMap } from "features/map";

const initialState: IMap =  {
  lat: 0,
  lng: 0,
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    changeMapCenter: (state, action: PayloadAction<IMap>) => {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
    },
  },
});

export const { changeMapCenter } = mapSlice.actions;

export default mapSlice.reducer;
