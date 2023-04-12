import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  IUserEnterFull,
  ResponseApi,
  userAccountActions
} from 'entities/user';

import {
  NEW_PASSWORD,
  ThunkConfig,
  USER_DATA
} from 'shared';

const setNewPassword = async (item: IUserEnterFull) => {
  await axios.patch<string, string>(`${USER_DATA}/${item.userData.id}`, {
    password: NEW_PASSWORD,
  });
};

export const restorePassword = createAsyncThunk<void, string, ThunkConfig<void>>(
  'userAccount/restorePassword',
  async (userEmail: string, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const response = await axios.get<string, ResponseApi>(USER_DATA);

      const actualUserId = response.data.find((user: IUserEnterFull) => {
        return user.userAccount.email === userEmail;
      });

      if (actualUserId) {
        thunkAPI.dispatch(
          userAccountActions.changeIsModalRecoveryOpen(
            state.userAccount.userAccount.isModalRecoveryOpen
          )
        );
        await axios.patch<string, string>(`${USER_DATA}/${actualUserId.id}`, {
          userAccount: {
            ...actualUserId.userAccount,
            password: NEW_PASSWORD,
          },
        });
      } else {
        thunkAPI.dispatch(userAccountActions.changeIsModalUserDoesNotExist());
      }
    } catch (error) {
      console.error(error);
    }
  }
);
