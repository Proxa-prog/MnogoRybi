import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { USER_DATA, ThunkConfig } from "shared";
import { ResponseApi } from "../../../basket/model/types/basketTypes";

export const fetchOrders = createAsyncThunk<void, string, ThunkConfig<void>>(
  'user/fetchOrders',
  async (email,thunkAPI) => {
  try {
    const response = await axios.get<string, ResponseApi>(`${USER_DATA}?userAccount.email=${email}`);
    console.log('response.data', response.data);
    const orders = response.data[0].userData.orders;
    const ordersLength = Math.ceil(orders.length / 12);
    console.log('orders', orders);

    // thunkAPI.dispatch(getNewsArray(response.data));
  } catch (error) {
    console.error(error)
  }
});
