import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { confirmationActions, registrationActions } from 'features/registration';

import {
  createUser,
  IResponse,
  IUserEnterFull,
  ResponseApi,
} from 'entities/user';

import { ThunkConfig } from 'shared';

const checkEmailExistence = (resp: IResponse, email: string) => {
  const emailIsBusy = resp.data.some((item: IUserEnterFull) => {
    return item.userAccount.email === email;
  });

  return emailIsBusy;
};

export const registerUser = createAsyncThunk<void, IUserEnterFull, ThunkConfig<void>>(
  'confirmation/registerUser',
  async (user: IUserEnterFull, thunkAPI) => {
    const { userAccount, userData } = user;
    const { password, email } = userAccount;
    const {
      firstName,
      phone,
      orders,
      userUrl,
      deliveryAddress,
    } = userData;

    try {
      const newUserData = () => {
        return {
          password,
          email,
          firstName,
          phone,
          orders,
          userUrl,
          deliveryAddress,
        };
      };

      const data = await axios.get<string, ResponseApi>(userUrl);
      const check = email && checkEmailExistence(data, email);
      const state = thunkAPI.getState();

      if (!check) {
        thunkAPI.dispatch(
          confirmationActions.changeIsOpenConfirmation(state.confirmation.confirmation.isOpen)
        );
        thunkAPI.dispatch(
          registrationActions.changeIsOpenRegistration(state.registration.registration.isOpen)
        );
        await createUser(newUserData());
      } else {
        console.log('Пользователь с таким email уже существует.');
      }
    } catch (error) {
      console.error(error);
    }
  }
);
