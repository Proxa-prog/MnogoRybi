import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const setMapCenter = (state: RootState) => state.map;

export const setMapSelector = createSelector(
  [ setMapCenter ],
  (map) => {

    return map;
  }
);
