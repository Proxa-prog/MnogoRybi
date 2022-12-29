import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IRegistration {
  registration: {
    agreement: boolean;
    isOpen: boolean;
    firstName: string | undefined;
    email: string | undefined;
    phone: string | undefined;
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
    firstName: '',
    email: '',
    phone: '',
  }
};

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    changeAgreement: (state, action: PayloadAction<boolean>) => {
      state.registration.agreement = !action.payload;
    },
    changeIsOpenRegistration: (state, action: PayloadAction<boolean>) => {
      state.registration.isOpen = !action.payload;
    },
    changeFirstName: (state, action: PayloadAction<string | undefined>) => {
      state.registration.firstName = action.payload;
    },
    changeEmail: (state, action: PayloadAction<string | undefined>) => {
      state.registration.email = action.payload;
    },
    changePhone: (state, action: PayloadAction<string | undefined>) => {
      state.registration.phone = action.payload;
    },
  },
});

export const {
  changeAgreement,
  changeIsOpenRegistration,
  changeFirstName,
  changeEmail,
  changePhone,
 } = registrationSlice.actions;

export default registrationSlice.reducer;
