import { RootState } from "app/store";
import { createSelector } from "@reduxjs/toolkit";

const constructor = (state: RootState) => state.constructorReducer.constructor.baseProduct && state.constructorReducer.constructor.baseProduct;

export const baseProductSelector = createSelector(
  [ constructor ],
  (constructorState) => {

    return constructorState;
  }
);
