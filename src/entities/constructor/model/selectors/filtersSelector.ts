import { RootState } from 'app/store';
import { createSelector } from '@reduxjs/toolkit';

export const getConstructorFilters = (state: RootState) => state.filters;

export const filtersSelector = createSelector(
  [getConstructorFilters],
  (constructorFilters) => {

    return constructorFilters;
  }
);
