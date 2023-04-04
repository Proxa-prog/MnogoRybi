import { RootState } from 'app/store';
import { createSelector } from '@reduxjs/toolkit';

const getConstructorCrunchState = (state: RootState) =>
  state.constructorReducer.constructor.crunch;

export const crunchSelector = createSelector(
  [getConstructorCrunchState],
  (constructorCrunchState) => {
    return constructorCrunchState;
  }
);
