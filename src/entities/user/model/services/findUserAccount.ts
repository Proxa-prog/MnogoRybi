import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ResponseApi } from 'entities/basket';
import {
  userAccountActions,
  userEnterActions,
  IUserData,
  IUserEnterFull,
} from 'entities/user';

import { ThunkConfig, USER_DATA } from 'shared';

export const findUserAccount = createAsyncThunk<void, IUserData, ThunkConfig<void>>(
  'userAccount/findUserAccount',
  async (userData, thunkAPI) => {
    const {
      email,
      password,
      isWindowUserEnterOpen,
    } = userData;

    try {
      const response = await axios.get<string, ResponseApi>(`${USER_DATA}?email=${email}`);

      const findUser = response.data.map((item: IUserEnterFull) => {
        if (
          response.data.length !== 0 &&
          item.userAccount.email === email &&
          item.userAccount.password === password
        ) {
            thunkAPI.dispatch(userEnterActions.changeIsOpenUserEnter(isWindowUserEnterOpen));
            thunkAPI.dispatch(userAccountActions.changeEmailUserAccount(email));

            const actualUser = response.data.find((user) => email === user.userAccount.email);

            actualUser &&
            thunkAPI.dispatch(userAccountActions.setUserDataInUserAccount(actualUser));
            thunkAPI.dispatch(userAccountActions.changeIsLoginUserAccount());
        }

        return item;
      });
    } catch (error) {
      console.error(error);
    }
  }
);
