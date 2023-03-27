import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ResponseApi } from "entities/basket";
import {
  changeEmailUserAccount,
  changeIsLoginUserAccount,
  changeIsOpenUserEnter,
  IUserData, setUserDataInUserAccount,
} from "entities/user";
import { ThunkConfig, USER_DATA } from "shared";
import {getUserData} from "./getUserData";

export const findUserAccount = createAsyncThunk<void, IUserData, ThunkConfig<void>>(
  USER_DATA,
  async (userData, thunkAPI) => {
    const {
      email,
      password,
      isWindowUserEnterOpen,
      isUserLogin
    } = userData;

    try {
      const response = await axios.get<string, ResponseApi>(
        `${USER_DATA}?email=${email}`
      );
      if (response.data.length !== 0 && response.data[0].userAccount.password === password) {
        (thunkAPI.dispatch(changeIsOpenUserEnter(isWindowUserEnterOpen)),
          thunkAPI.dispatch(changeEmailUserAccount(email)));
          // email && getUserData(email);
          const actualUser = response.data.find((user) => email === user.userAccount.email);
          actualUser && thunkAPI.dispatch(setUserDataInUserAccount(actualUser));
          thunkAPI.dispatch(changeIsLoginUserAccount()),
        console.log('findUserAccount', actualUser);
      }
    } catch (error) {
      console.error(error);
    }
  }
);
