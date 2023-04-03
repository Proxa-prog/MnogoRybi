import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IPersonalAreaPagesLinks,
  IUserAccount,
  IUserRegistration
} from "../types/types";
import { IAddedOrder } from "../../../basket/model/services/addOrderToUser";

export interface IUserEnterFull {
  personalAreaLinks: IPersonalAreaPagesLinks[];
  userAccount: IUserAccount;
  userData: IUserRegistration;
}

const initialState: IUserEnterFull = {
  personalAreaLinks: [
    {
      name: "Личные данные",
      id: "personalArea",
      isCurrent: true,
    },
    {
      name: "Мои заказы",
      id: "myOrders",
      isCurrent: false
    },
  ],
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
    currentOrders: [],
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
    addOrderInUserAccount: (state, action: PayloadAction<IAddedOrder>) => {
      state.userData.orders = [...state.userData.orders, action.payload];
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
    },
    changePersonalAreaLinkIsCurrent: (state, action: PayloadAction<string>) => {
      state.personalAreaLinks.map((item) => {
        if (item.id === action.payload) {
          item.isCurrent = true;
        } else {
          item.isCurrent = false;
        }
      })
    },
    sortUserOrders: (state, action: PayloadAction<number>) => {
      state.userData.currentOrders = state.userData.orders.slice(12 * (action.payload - 1), action.payload * 12);
    },
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
  changePersonalAreaLinkIsCurrent,
  addOrderInUserAccount,
  sortUserOrders,
} = userAccountSlice.actions;

export default userAccountSlice.reducer;
