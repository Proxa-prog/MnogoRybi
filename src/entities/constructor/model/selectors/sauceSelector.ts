import { RootState } from 'app/store';
import { createSelector } from '@reduxjs/toolkit';

const getConstructorSauceState = (state: RootState) =>
  state.constructorReducer.constructor.sauce;

export const sauceSelector = createSelector(
  [getConstructorSauceState],
  (constructorSauceState) => {
    return constructorSauceState;
  }
);
