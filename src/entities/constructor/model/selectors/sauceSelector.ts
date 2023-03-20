import { RootState } from "app/store";
import { createSelector } from "@reduxjs/toolkit";

const constructor = (state: RootState) => state.constructorReducer.constructor.sauce && state.constructorReducer.constructor.sauce;

export const sauceSelector = createSelector(
  [ constructor ],
  (constructorState) => {

    return constructorState;
  }
);
