import { RootState } from "app/store";
import { createSelector } from "@reduxjs/toolkit";

const constructor = (state: RootState) => state.constructorReducer.constructor.protein && state.constructorReducer.constructor.protein;

export const proteinSelector = createSelector(
  [ constructor ],
  (constructorState) => {

    return constructorState;
  }
);
