import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IRegistration {
  registration: {
    agreement: boolean;
    isOpen: boolean;
  }
}

export enum RegistrationAction {
  CHANGE_AGREEMENT = 'CHANGE_AGREEMENT',
}

export interface IDescriptionsAction {
  type: RegistrationAction;
  payload: IRegistration;
}

const initialState: IRegistration =  {
  registration: {
    agreement: true,
    isOpen: false,
  }
};

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    changeAgreement: (state, action: PayloadAction<boolean>) => {
      state.registration.agreement = !action.payload;
    },
    changeIsOpen: (state, action: PayloadAction<boolean>) => {
      state.registration.isOpen = !action.payload;
    },
  },
});

export const {
  changeAgreement,
  changeIsOpen,
 } = registrationSlice.actions;

export default registrationSlice.reducer;
