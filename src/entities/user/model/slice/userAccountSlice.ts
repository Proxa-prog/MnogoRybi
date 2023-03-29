import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IUserAccount, IUserRegistration} from "../types/types";

export interface IUserEnterFull {
  userAccount: IUserAccount;
  userData: IUserRegistration;
}

const initialState: IUserEnterFull = {
  userAccount: {
    isAddNewAddressOpen: false,
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
    changeIsLoginUserAccount: (state) => {
      state.userAccount.isLogin = !state.userAccount.isLogin;
    },
    changeIsOpenRecovery: (state, action: PayloadAction<boolean>) => {
      state.userAccount.recoveryIsOpen = !action.payload;
    },
    changeEmailUserAccount: (state, action: PayloadAction<string | undefined>) => {
      state.userAccount.email = action.payload;
    },
    addDeliveryAddress: (state, action: PayloadAction<string>) => {
      state.userData.deliveryAddress = [...state.userData.deliveryAddress, action.payload];
    },
    removeDeliveryAddress: (state, action: PayloadAction<string>) => {
      state.userData.deliveryAddress = state.userData.deliveryAddress.filter((item) => item !== action.payload);
    },
    changeIsAddNewAddressOpen: (state) => {
      state.userAccount.isAddNewAddressOpen = !state.userAccount.isAddNewAddressOpen;
    },
    logoutUserAccount: (state) => {
      state.userAccount = initialState.userAccount;
      state.userData = initialState.userData;
    }
  }
});

export const {
  setUserDataInUserAccount,
  changeIsLoginUserAccount,
  changeIsOpenRecovery,
  changeEmailUserAccount,
  addDeliveryAddress,
  removeDeliveryAddress,
  changeIsAddNewAddressOpen,
  logoutUserAccount,
} = userAccountSlice.actions;

export default userAccountSlice.reducer;
