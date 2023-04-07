import { RootState } from 'app/store';
import { createSelector } from '@reduxjs/toolkit';

const getConstructorBaseProduct = (state: RootState) =>
  state.constructorReducer.constructor.baseProduct;

export const baseProductSelector = createSelector(
  [getConstructorBaseProduct],
  (baseProductState) => {
    return baseProductState;
  }
);
