import axios from "axios";
import { ResponseApi } from "entities/basket";

import { IResponse, IUserRegistration } from "entities/user";
import {IUserEnterFull} from "../slice/userAccountSlice";
import {changeIsOpenConfirmation, changeIsOpenRegistration} from "../../../../features/registration";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {RESTAURANT_LOCATION_URL, ThunkConfig, USER_DATA} from "../../../../shared";


const checkEmailExistence = (resp: IResponse, email: string | undefined) => {
  console.log('resp', resp);
  const emailIsBusy = resp.data.some((item: IUserEnterFull) => {

    return item.userAccount.email === email;
  });

  return emailIsBusy;
};

export const registerUser = createAsyncThunk<void, IUserEnterFull, ThunkConfig<void>>(USER_DATA,async (user: IUserEnterFull, thunkAPI) => {
  const { userAccount, userData } = user;
  const {
    firstName,
    phone,
    orders,
    userUrl,
    deliveryAddress,
    id,
  } = userData;

  const {
    password,
    email,
  } = userAccount;
  console.log('++')
  try {
    const createUser = () => axios
      .post<string, ResponseApi>(userUrl, {
          userAccount: {
            isLogin: false,
            recoveryIsOpen: false,
            email: email,
            password: password,
          },
          userData: {
            firstName: firstName,
            phone: phone,
            orders,
            userUrl: '',
            deliveryAddress,
          }
        }
      );

    const data = await axios.get<string, ResponseApi>(userUrl);
    console.log(data);
    const check = checkEmailExistence(data, email);

    const state = thunkAPI.getState();
    console.log(state);
    if (!check) {
      createUser();
      thunkAPI.dispatch(changeIsOpenConfirmation(state.configmation.confirmation.isOpen));
      thunkAPI.dispatch(changeIsOpenRegistration(state.registration.registration.isOpen));
    } else {
      console.log("Пользователь с таким email уже существует.");
    }
  } catch (error) {
    console.error(error);
  }
});
