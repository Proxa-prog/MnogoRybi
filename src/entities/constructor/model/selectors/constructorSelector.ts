import { RootState } from "app/store";
import { createSelector } from "@reduxjs/toolkit";

const constructor = (state: RootState) => state.constructorReducer.constructor;

export const constructorSelector = createSelector(
  [ constructor ],
  (constructorState) => {

    return constructorState;
  }
);
