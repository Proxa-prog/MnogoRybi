import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IRegistration } from "features/registration";

const initialState: IRegistration = {
  registration: {
    agreement: true,
    isOpen: false,
    firstName: "",
    email: "",
    password: "",
    phone: "",
    orders: [],
  },
};

export const registrationSlice = createSlice({
  name: "registration",
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
    changePassword: (state, action: PayloadAction<string | undefined>) => {
      state.registration.password = action.payload;
    },
    changePhone: (state, action: PayloadAction<string | undefined>) => {
      state.registration.phone = action.payload;
    },
    setPassword: (state, action: PayloadAction<string | undefined>) => {
      state.registration.password = action.payload;
    },
  },
});

export const {
  reducer: registrationReducer,
  actions: registrationActions,
} = registrationSlice
