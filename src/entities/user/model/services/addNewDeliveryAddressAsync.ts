import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig, USER_DATA } from "shared";
import axios from "axios";
import { ResponseApi } from "../../../basket";
import { IUserData } from "../types/types";
import { IUserEnterFull } from "../slice/userAccountSlice";

const setNewAddress = async (item: IUserEnterFull) => {
    await axios.patch<string, string>(
      `${USER_DATA}/1/userData`,
      item.userData,
    );
};

export const addNewDeliveryAddressAsync = createAsyncThunk<void, IUserData, ThunkConfig<void>>(
  USER_DATA,
  async (userData: IUserData, thunkAPI) => {
  const { email } = userData;
  try {
    const state = thunkAPI.getState();
    const response = await axios.get<string, any>(`${USER_DATA}`);

    const actualUserId = response.data.find((user: any) => {

      return user.userAccount.email === email;
    });

    actualUserId &&
    (await axios.patch<string, IUserEnterFull>(
      `${USER_DATA}/${actualUserId.id}`,
      {
        userData: {
          ...actualUserId.userData,
          deliveryAddress: [...state.userAccount.userData.deliveryAddress,]
        },
      }
    ));
  } catch (error) {
    console.log(error);
  }
})
