import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig, USER_DATA} from "shared";
import axios from "axios";
import {ResponseApiUserData} from "../types/types";

interface userData {
  userEmail: string;
  newDeliveryAddress: string;
}

export const addDeliveryAddressToUser = createAsyncThunk<void, userData, ThunkConfig<void>>(
  USER_DATA,
  async (userData: userData) => {
    const {
      userEmail,
      newDeliveryAddress,
    } = userData;

    try {
      const response = await axios.get<string, ResponseApiUserData>(`${USER_DATA}`);

      const actualUserId = response.data.find((user) => user.userAccount.email === userEmail);

      actualUserId &&
      (await  axios.patch<string, string[]>(
        `${USER_DATA}/${actualUserId.userData.id}`,
        {
          deliveryAddress: [...actualUserId.userData.deliveryAddress, newDeliveryAddress]
        }
      ))
    } catch (error) {
      console.log(error);
    }
  }
)
