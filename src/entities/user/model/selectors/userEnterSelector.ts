import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const userEnter = (state: RootState) => state.userEnter;

export const userEnterSelector = createSelector(
  [ userEnter ],
  (isOpen) => {

    return isOpen;
  }
);
