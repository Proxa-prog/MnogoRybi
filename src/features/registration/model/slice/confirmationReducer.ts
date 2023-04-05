import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IConfirmation } from 'features/registration';

const initialState: IConfirmation = {
  confirmation: {
    isOpen: false,
  },
};

export const confirmationSlice = createSlice({
  name: 'confirmation',
  initialState,
  reducers: {
    changeIsOpenConfirmation: (state, action: PayloadAction<boolean>) => {
      state.confirmation.isOpen = !action.payload;
    },
  },
});

export const {
  reducer: confirmationReducer,
  actions: confirmationActions,
} = confirmationSlice;
