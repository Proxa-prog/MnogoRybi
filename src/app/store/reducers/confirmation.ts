import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IConfirmation {
  confirmation: {
    isOpen: boolean;
  }
}

const initialState: IConfirmation = {
  confirmation: {
    isOpen: false,
  }
};

export const confirmationSlice = createSlice({
  name: 'confirmation',
  initialState,
  reducers: {
    changeIsOpenConfirmation: (state, action: PayloadAction<boolean>) => {
      state.confirmation.isOpen = !action.payload;
    },
  }
});

export const {
  changeIsOpenConfirmation,
} = confirmationSlice.actions;

export default confirmationSlice.reducer;
