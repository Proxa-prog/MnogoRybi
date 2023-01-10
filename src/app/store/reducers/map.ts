import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IMap {
  lat: number;
  lng: number;
}

export enum MapAction {
  CHANGE_MAP_CENTER = 'CHANGE_MAP_CENTER',
}

export interface IMapAction {
  type: MapAction;
  payload: IMap;
}

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
