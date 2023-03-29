import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const userAccount = (state: RootState) => state.userAccount;

export const setUserAccountStateSelector = createSelector(
  [ userAccount ],
  (userAccountState) => {

    return userAccountState;
  }
);
