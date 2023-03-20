import { RootState } from "app/store";
import { createSelector } from "@reduxjs/toolkit";

const constructor = (state: RootState) => state.constructorReducer.constructor.topping && state.constructorReducer.constructor.topping;

export const toppingSelector = createSelector(
  [ constructor ],
  (constructorState) => {

    return constructorState;
  }
);
