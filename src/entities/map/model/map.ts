import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const setMapCenter = (state: RootState) => state.map;

export const setMap = createSelector(
  [ setMapCenter ],
  (map) => {

    return map;
  }
);
