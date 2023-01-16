import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const productions = (state: RootState) => state.productions.productions;

export const getProdSelector = createSelector(
  [ productions ],
  (allProductions) => {

    return allProductions;
  }
);
