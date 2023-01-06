import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserEnter {
  userEnter: {
    isOpen: boolean;
    email: string | undefined;
    password: string | undefined;
  }
}

export enum UserEnterAction {
  CHANGE_IS_OPEN = 'CHANGE_IS_OPEN',
}

export interface IUserEnterAction {
  type: UserEnterAction;
  payload: IUserEnter;
}

const initialState: IUserEnter =  {
  userEnter: {
    isOpen: false,
    email: '',
    password: '',
  }
};

export const userEnterSlice = createSlice({
  name: 'userEnter',
  initialState,
  reducers: {
    changeIsOpenUserEnter: (state, action: PayloadAction<boolean>) => {
      state.userEnter.isOpen = !action.payload;
    },
    changeEmailUserEnter: (state, action: PayloadAction<string | undefined>) => {
      state.userEnter.email = action.payload;
    },
    changePasswordUserEnter: (state, action: PayloadAction<string | undefined>) => {
      state.userEnter.password = action.payload;
    },
  },
});

export const {
  changeIsOpenUserEnter,
  changeEmailUserEnter,
  changePasswordUserEnter,
 } = userEnterSlice.actions;

export default userEnterSlice.reducer;
