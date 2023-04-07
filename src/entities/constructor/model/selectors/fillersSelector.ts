import { RootState } from 'app/store';
import { createSelector } from '@reduxjs/toolkit';

const getConstructorFillersState = (state: RootState) =>
  state.constructorReducer.constructor.fillers;

export const fillersSelector = createSelector(
  [getConstructorFillersState],
  (constructorFillersState) => {
    return constructorFillersState;
  }
);
