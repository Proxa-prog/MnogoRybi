import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IUserRegistration} from "../types/types";
import {IUserEnterFull} from "./userAccountSlice";

export interface IUserEnter extends IUserEnterFull {
  isOpen: boolean;
}

export enum UserEnterAction {
  CHANGE_IS_OPEN = 'CHANGE_IS_OPEN',
}

export interface IUserEnterAction {
  type: UserEnterAction;
  payload: IUserEnter;
}

const initialState: IUserEnter =  {
  isOpen: false,
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
    closeWindow: () => {},
    userUrl: '',
    deliveryAddress: [],
  }
};

export const userEnterSlice = createSlice({
  name: 'userEnter',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<IUserEnter>) => {
      state = action.payload;
    },
    changeIsOpenUserEnter: (state, action: PayloadAction<boolean>) => {
      state.isOpen = !action.payload;
    },
    changeEmailUserEnter: (state, action: PayloadAction<string | undefined>) => {
      state.userAccount.email = action.payload;
    },
    changePasswordUserEnter: (state, action: PayloadAction<string | undefined>) => {
      state.userAccount.password = action.payload;
    },
  },
});

export const {
  setUserData,
  changeIsOpenUserEnter,
  changeEmailUserEnter,
  changePasswordUserEnter,
 } = userEnterSlice.actions;

export default userEnterSlice.reducer;
