import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DescriptionsArray, IDescription } from 'entities/descriptions';

const initialState: DescriptionsArray = {
  descriptions: [],
};

export const descriptionSlice = createSlice({
  name: 'descriptions',
  initialState,
  reducers: {
    changeDescription: (state, action: PayloadAction<IDescription[]>) => {
      state.descriptions = action.payload;
    },
  },
});

export const {
  reducer: descriptionReducer,
  actions: descriptionsActions
} = descriptionSlice;
