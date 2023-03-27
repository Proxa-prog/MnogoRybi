import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IUserAccount, IUserRegistration} from "../types/types";

export interface IUserEnterFull {
  userAccount: IUserAccount;
  userData: IUserRegistration;
}

const initialState: IUserEnterFull = {
  userAccount: {
    isLogin: false,
    recoveryIsOpen: false,
    email: '',
    password: '',
  },
  userData: {
    firstName: '',
    phone: '',
    orders: [],
    userUrl: '',
    deliveryAddress: [],
  }
};

export const userAccountSlice = createSlice({
  name: 'userAccount',
  initialState,
  reducers: {
    setUserDataInUserAccount: (state, action: PayloadAction<IUserEnterFull>) => {
      state.userAccount = action.payload.userAccount;
      state.userData = action.payload.userData;
    },
    changeIsLoginUserAccount: (state, action: PayloadAction<boolean>) => {
      state.userAccount.isLogin = !action.payload;
    },
    changeIsOpenRecovery: (state, action: PayloadAction<boolean>) => {
      state.userAccount.recoveryIsOpen = !action.payload;
    },
    changeEmailUserAccount: (state, action: PayloadAction<string | undefined>) => {
      state.userAccount.email = action.payload;
    },
    removeDeliveryAddress: (state, action: PayloadAction<string>) => {
      state.userData.deliveryAddress = state.userData.deliveryAddress.filter((item) => item !== action.payload);
    },
  }
});

export const {
  setUserDataInUserAccount,
  changeIsLoginUserAccount,
  changeIsOpenRecovery,
  changeEmailUserAccount,
  removeDeliveryAddress,
} = userAccountSlice.actions;

export default userAccountSlice.reducer;
