import { RootState } from 'app/store';
import { createSelector } from '@reduxjs/toolkit';

const getConstructorProtein = (state: RootState) => state.constructorReducer.constructor.protein;

export const proteinSelector = createSelector([getConstructorProtein], (constructorProteinState) => {
  return constructorProteinState;
});
