import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  changeEmailUserAccount,
  changeIsLoginUserAccount,
  changeIsOpenUserEnter,
  IUserData,
} from "entities/user";
import { USER_DATA } from "shared";

export const findUserAccount = createAsyncThunk(USER_DATA, async (userData: IUserData, thunkAPI) => {
  const {
    email,
    password,
    isWindowUserEnterOpen,
    isUserLogin
  } = userData;

  try {
    const response = await axios.get(`${USER_DATA}?email=${email}`);
    response.data.length !== 0 &&
      response.data[0].password === password &&
      (thunkAPI.dispatch(changeIsOpenUserEnter(isWindowUserEnterOpen)),
      thunkAPI.dispatch(changeIsLoginUserAccount(isUserLogin)),
      thunkAPI.dispatch(changeEmailUserAccount(email)));
  } catch (error) {
    console.error(error);
  }
}
);
