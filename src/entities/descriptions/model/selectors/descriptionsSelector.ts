import { RootState } from 'app/store';
import { createSelector } from '@reduxjs/toolkit';

const description = (state: RootState) => state.description.descriptions;

export const getDescriptionSelector = createSelector(
  [description],
  (descriptionSelector) => descriptionSelector
);
