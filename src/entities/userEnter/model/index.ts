import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const userEnter = (state: RootState) => state.userEnter.userEnter;

export const openModalUserEnter = createSelector(
  [ userEnter ],
  (isOpen) => {

    return isOpen;
  }
);
