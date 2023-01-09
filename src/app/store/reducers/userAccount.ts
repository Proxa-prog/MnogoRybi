import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserAccount {
  userAccount: {
    isLogin: boolean;
  }
}

const initialState: IUserAccount = {
  userAccount: {
    isLogin: false,
  }
};

export const userAccountSlice = createSlice({
  name: 'userAccount',
  initialState,
  reducers: {
    changeIsLoginUserAccount: (state, action: PayloadAction<boolean>) => {
      state.userAccount.isLogin = !action.payload;
    },
  }
});

export const {
  changeIsLoginUserAccount,
} = userAccountSlice.actions;

export default userAccountSlice.reducer;
