import {RootState} from "../../../../app/store";
import {createSelector} from "@reduxjs/toolkit";

export const stateFilters = (state: RootState) => state.filters;

export const filtersSelector = createSelector(
  [ stateFilters ],
  (filtersState) => {

    return filtersState;
  }
);
