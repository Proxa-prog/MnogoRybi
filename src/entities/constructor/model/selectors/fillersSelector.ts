import { RootState } from "app/store";
import { createSelector } from "@reduxjs/toolkit";

const constructor = (state: RootState) => state.constructorReducer.constructor.fillers && state.constructorReducer.constructor.fillers;

export const fillersSelector = createSelector(
  [ constructor ],
  (fillersState) => {

    return fillersState;
  }
);
