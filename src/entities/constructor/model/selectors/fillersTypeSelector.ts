import { RootState } from "app/store";
import { createSelector } from "@reduxjs/toolkit";

const constructor = (state: RootState) => state.constructorReducer.constructor.fillersType && state.constructorReducer.constructor.fillersType;

export const fillersTypeSelector = createSelector(
  [ constructor ],
  (constructorState) => {

    return constructorState;
  }
);
