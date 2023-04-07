import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "app/store";

const getMapCenter = (state: RootState) => state.map;

export const setMapSelector = createSelector(
  [ getMapCenter ],
  (map) => {

    return map;
  }
);
