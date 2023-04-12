import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUserEnterFull } from 'entities/user';
import { IAddedOrder } from 'entities/basket';

const initialState: IUserEnterFull = {
  personalAreaLinks: [
    {
      name: 'Личные данные',
      id: 'PersonalArea',
      isCurrent: true,
    },
    {
      name: 'Мои заказы',
      id: 'MyOrders',
      isCurrent: false,
    },
  ],
  userAccount: {
    isModalAddNewAddressOpen: false,
    isModalUserDoesNotExist: false,
    isLogin: false,
    isModalRecoveryOpen: false,
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
  },
};

export const userAccountSlice = createSlice({
  name: 'userAccount',
  initialState,
  reducers: {
    setUserDataInUserAccount: (
      state,
      action: PayloadAction<IUserEnterFull>
    ) => {
      state.userAccount = action.payload.userAccount;
      state.userData = action.payload.userData;
    },
    setRegistrationUserDataInUserAccount: (
      state,
      action: PayloadAction<IUserEnterFull>
    ) => {
      state.userData = action.payload.userData;
    },
    addOrderInUserAccount: (state, action: PayloadAction<IAddedOrder>) => {
      state.userData.orders = [...state.userData.orders, action.payload];
    },
    changeIsLoginUserAccount: (state) => {
      state.userAccount.isLogin = !state.userAccount.isLogin;
    },
    changeIsModalRecoveryOpen: (state, action: PayloadAction<boolean>) => {
      state.userAccount.isModalRecoveryOpen = !action.payload;
    },
    changeEmailUserAccount: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
      state.userAccount.email = action.payload;
    },
    addDeliveryAddress: (state, action: PayloadAction<string>) => {
      state.userData.deliveryAddress = [
        ...state.userData.deliveryAddress,
        action.payload,
      ];
    },
    removeDeliveryAddress: (state, action: PayloadAction<string>) => {
      state.userData.deliveryAddress = state.userData.deliveryAddress.filter(
        (item) => item !== action.payload
      );
    },
    changeIsModalAddNewAddressOpen: (state) => {
      state.userAccount.isModalAddNewAddressOpen =
        !state.userAccount.isModalAddNewAddressOpen;
    },
    changeIsModalUserDoesNotExist: (state) => {
      state.userAccount.isModalUserDoesNotExist =
        !state.userAccount.isModalUserDoesNotExist;
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
      });
    },
    sortUserOrders: (state, action: PayloadAction<number>) => {
      state.userData.currentOrders = state.userData.orders.slice(
        12 * (action.payload - 1),
        action.payload * 12
      );
    },
  },
});

export const {
  reducer: userAccountReducer,
  actions: userAccountActions,
} = userAccountSlice;
