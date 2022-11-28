import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const productions = (state: RootState) => state.productions.productions

export const getProd = createSelector(
  [ productions ],
  (allProductions) => {
    return allProductions;
  }
);


