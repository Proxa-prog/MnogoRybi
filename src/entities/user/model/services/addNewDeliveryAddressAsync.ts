import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IUserData, IUserEnterFull, ResponseApi } from 'entities/user';

import { ThunkConfig, USER_DATA } from 'shared';

export const addNewDeliveryAddressAsync = createAsyncThunk<void, IUserData, ThunkConfig<void>>(
  'userAccount/addNewDeliveryAddressAsync',
  async (userData: IUserData, thunkAPI) => {
    const { email } = userData;
    try {
      const state = thunkAPI.getState();
      const response = await axios.get<string, ResponseApi>(`${USER_DATA}`);

      const actualUserId = response.data.find((user: IUserEnterFull) => {
        return user.userAccount.email === email;
      });

      actualUserId &&
        (await axios.patch<string, IUserEnterFull>(`${USER_DATA}/${actualUserId.id}`, {
          userData: {
            ...actualUserId.userData,
            deliveryAddress: [...state.userAccount.userData.deliveryAddress],
          },
        }));
    } catch (error) {
      console.log(error);
    }
  }
);
