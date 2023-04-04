import { RootState } from 'app/store';
import { createSelector } from '@reduxjs/toolkit';

const getConstructorToppingState = (state: RootState) =>
  state.constructorReducer.constructor.topping;

export const toppingSelector = createSelector(
  [getConstructorToppingState],
  (constructorToppingState) => {
    return constructorToppingState;
  }
);
