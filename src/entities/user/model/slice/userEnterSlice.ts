import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUserEnter } from 'entities/user';

const initialState: IUserEnter = {
  isOpen: false,
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

export const userEnterSlice = createSlice({
  name: 'userEnter',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<IUserEnter>) => {
      state = action.payload;
    },
    changeIsOpenUserEnter: (state,action: PayloadAction<boolean>) => {
      state.isOpen = !action.payload;
    },
    changeEmailUserEnter: (state,action: PayloadAction<string | undefined>) => {
      state.userAccount.email = action.payload;
    },
    changePasswordUserEnter: (state,action: PayloadAction<string | undefined>) => {
      state.userAccount.password = action.payload;
    },
  },
});

export const {
  reducer: userEnterReducer,
  actions: userEnterActions,
} = userEnterSlice;
