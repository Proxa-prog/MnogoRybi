import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { IAmountProduct } from "entities/basket/model/types/basketTypes";
import { USER_DATA } from "shared/assets/constants/constants";

export interface IUserRegistration {
  firstName: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  password: string | undefined;
  orders: IAmountProduct[];
  closeWindow: () => void;
}

export interface IResponse {
  data: IUserRegistration[];
}

const checkEmail = (resp: IResponse, email: string | undefined) => {
  const emailIsBusy = resp.data.some((item: IUserRegistration) => {

    return item.email === email
  });

   return emailIsBusy;
}

export const userRigistration = createAsyncThunk(USER_DATA, async (userData: IUserRegistration) => {
  const {
    firstName,
    email,
    phone,
    password,
    orders,
    closeWindow,
  } = userData;

  const createUser = () => axios
  .post(USER_DATA, {
    firstName: firstName,
    email: email,
    phone: phone,
    password: password,
    orders,
  });

  const data = await axios.get(USER_DATA);

  const check = checkEmail(data, email);

  if (!check) {
    createUser();
    closeWindow();
  } else {
    console.log("Пользователь с таким email уже существует.");
  }
});
