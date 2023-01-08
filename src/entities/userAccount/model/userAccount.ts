import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const userAccount = (state: RootState) => state.userAccount.userAccount;

export const setUserAccountState = createSelector(
  [ userAccount ],
  (userAccountState) => {

    return userAccountState;
  }
);
