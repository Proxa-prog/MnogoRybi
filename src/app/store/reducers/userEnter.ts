import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserEnter {
  userEnter: {
    isOpen: boolean;
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
  }
};

export const userEnterSlice = createSlice({
  name: 'userEnter',
  initialState,
  reducers: {
    changeIsOpenUserEnter: (state, action: PayloadAction<boolean>) => {
      state.userEnter.isOpen = !action.payload;
    },
  },
});

export const {
  changeIsOpenUserEnter,
 } = userEnterSlice.actions;

export default userEnterSlice.reducer;
