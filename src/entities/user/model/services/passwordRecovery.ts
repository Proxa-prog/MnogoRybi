import axios from "axios";

import { ResponseApi } from "entities/basket";
import { IUserRegistration } from "entities/user";

import { NEW_PASSWORD, USER_DATA } from "shared";

const newPassword = async (item: IUserRegistration) => {
  await axios.patch<string, string>(`${USER_DATA}/${item.id}`, { password: NEW_PASSWORD });
};

export const passwordRecovery = async (userEmail: string) => {
  try {
    const response = await axios.get<string, ResponseApi>(USER_DATA);

    const isFind = response.data.map((item: IUserRegistration) => {
      console.log("item", item);

      if (item.email === userEmail) {
        newPassword(item);
      } else {
        console.log("No Email!");
      }

      return item;
    });
  } catch (error) {
    console.error(error);
  }
};
