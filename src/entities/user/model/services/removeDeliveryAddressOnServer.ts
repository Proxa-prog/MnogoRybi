import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

import {
  IUserEnterFull,
  ResponseApi,
} from 'entities/user';

import { ThunkConfig, USER_DATA } from 'shared';

interface IRemoveDeliveryAddress {
  userEmail: string;
  deliveryAddress: string;
}
export const removeDeliveryAddressOnServer = createAsyncThunk<void, IRemoveDeliveryAddress, ThunkConfig<void>>(
  'userAccount/removeDeliveryAddress',
  async (data: IRemoveDeliveryAddress, thunkAPI) => {
    const { userEmail, deliveryAddress } = data;

    try {
      const state = thunkAPI.getState();
      const response = await axios.get<string, ResponseApi>(`${USER_DATA}`);

      const actualUserId = response.data.find((user: IUserEnterFull) => {
        return user.userAccount.email === userEmail;
      });

      const actualDeliveryAddresses = state.userAccount.userData.deliveryAddress.filter((item) => {
        return item !== deliveryAddress
      });

      actualUserId &&
      (await axios.patch<string, IUserEnterFull>(`${USER_DATA}/${actualUserId.id}`, {
        userData: {
          deliveryAddress: actualDeliveryAddresses,
        },
      }));
    } catch (error) {
      console.log(error);
    }
  }
);
