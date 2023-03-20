import { RootState } from "app/store";
import { createSelector } from "@reduxjs/toolkit";

const constructor = (state: RootState) => state.constructorReducer.constructor.crunch && state.constructorReducer.constructor.crunch;

export const crunchSelector = createSelector(
  [ constructor ],
  (constructorState) => {

    return constructorState;
  }
);
