import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const siteData = (state: RootState) => state.siteData.siteData;

export const getSiteDataSelector = createSelector(
  [ siteData ],
  (siteData) => {

    return siteData;
  }
);
