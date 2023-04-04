import { RootState } from 'app/store';
import { createSelector } from '@reduxjs/toolkit';

const getConstructorFillersTypeState = (state: RootState) =>
  state.constructorReducer.constructor.fillersType;

export const fillersTypeSelector = createSelector(
  [getConstructorFillersTypeState],
  (constructorFillersTypeState) => {
    return constructorFillersTypeState;
  }
);
