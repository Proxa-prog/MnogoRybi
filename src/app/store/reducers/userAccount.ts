import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAmountProduct } from "../../../entities/amountProduct/model/slice/amountProductReduser";

interface IUserAccount {
  userAccount: {
    isLogin: boolean;
    recoveryIsOpen: boolean;
    email: string | undefined;
    basket: IAmountProduct[];
  }
}

const initialState: IUserAccount = {
  userAccount: {
    isLogin: false,
    recoveryIsOpen: false,
    email: '',
    basket: [],
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
    changeEmailUserAccount: (state, action: PayloadAction<string | undefined>) => {
      state.userAccount.email = action.payload;
    },
  }
});

export const {
  changeIsLoginUserAccount,
  changeIsOpenRecovery,
  changeEmailUserAccount,
} = userAccountSlice.actions;

export default userAccountSlice.reducer;
