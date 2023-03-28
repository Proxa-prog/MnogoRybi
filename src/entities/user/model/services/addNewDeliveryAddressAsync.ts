import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig, USER_DATA} from "shared";
import axios from "axios";
import {ResponseApi} from "../../../basket";
import {IUserData} from "../types/types";
import {IUserEnterFull} from "../slice/userAccountSlice";

interface IId extends IUserEnterFull {
  id?: number;
}

interface INewAddressData {
  userData: IId,
  email: string,
  newDeliveryAddress: string,
}

const setNewAddress = async (item: INewAddressData) => {
    await axios.patch<string, string>(
      `${USER_DATA}/${item.userData.id}`,
      {userData: {
        ...item.userData,
          deliveryAddress: [...item.userData.userData.deliveryAddress, item.newDeliveryAddress]
      }});
};

export const addNewDeliveryAddressAsync = createAsyncThunk<void, IUserData, ThunkConfig<void>>(USER_DATA, async (userData: IUserData, thunkAPI) => {
  const {email, newDeliveryAddress} = userData;
  try {
    const response = await axios.get<string, ResponseApi>(`${USER_DATA}?email=${email}`);

    const isFind = response.data.map((item: IUserEnterFull) => {
      if (item.userAccount.email === email) {
        email && newDeliveryAddress && setNewAddress({
          userData: item,
          email: email,
          newDeliveryAddress: newDeliveryAddress,
        });
      }

      return item;
    });
  } catch (error) {
    console.log(error);
  }
})
