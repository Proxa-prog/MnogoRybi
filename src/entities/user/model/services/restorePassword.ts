import axios from "axios";

import { ResponseApi } from "entities/basket";
import {IUserEnterFull, IUserRegistration} from "entities/user";

import { NEW_PASSWORD, USER_DATA } from "shared";

const setNewPassword = async (item: IUserEnterFull) => {
  await axios.patch<string, string>(`${USER_DATA}/${item.userData.id}`, { password: NEW_PASSWORD });
};

export const restorePassword = async (userEmail: string) => {
  try {
    const response = await axios.get<string, ResponseApi>(USER_DATA);

    const isFind = response.data.map((item: IUserEnterFull) => {
      if (item.userAccount.email === userEmail) {
        setNewPassword(item);
      } else {
        console.log("No Email!");
      }

      return item;
    });
  } catch (error) {
    console.error(error);
  }
};
