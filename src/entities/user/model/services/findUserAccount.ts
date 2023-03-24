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
          thunkAPI.dispatch(changeIsLoginUserAccount(isUserLogin)),
          thunkAPI.dispatch(changeEmailUserAccount(email)));
          // email && getUserData(email);
          thunkAPI.dispatch(setUserDataInUserAccount(response.data[0]));
        console.log('findUserAccount', response.data);
      }
    } catch (error) {
      console.error(error);
    }
  }
);
