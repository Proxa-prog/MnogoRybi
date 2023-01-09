import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserAccount {
  userAccount: {
    isLogin: boolean;
    recoveryIsOpen: boolean;
  }
}

const initialState: IUserAccount = {
  userAccount: {
    isLogin: false,
    recoveryIsOpen: false,
  }
};

export const userAccountSlice = createSlice({
  name: 'userAccount',
  initialState,
  reducers: {
    changeIsLoginUserAccount: (state, action: PayloadAction<boolean>) => {
      state.userAccount.isLogin = !action.payload;
    },
    changeIsOpenRecovery: (state, action: PayloadAction<boolean>) => {
      state.userAccount.recoveryIsOpen = !action.payload;
    },
  }
});

export const {
  changeIsLoginUserAccount,
  changeIsOpenRecovery,
} = userAccountSlice.actions;

export default userAccountSlice.reducer;
