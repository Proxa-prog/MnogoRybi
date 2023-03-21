import {RootState} from "app/store";
import {createSelector} from "@reduxjs/toolkit";

const constructor = (state: RootState) => state.constructorReducer.constructor.additionally;

export const additionallySelector = createSelector(
  [constructor],
(additionallyState) => additionallyState
);
