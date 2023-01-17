import axios from "axios";
import { NEW_PASSWORD, USER_DATA } from "shared/assets/constants/constants";

const newPassword = async (item: any) => {
  await axios.patch(`${USER_DATA}/${item.id}`, { password: NEW_PASSWORD });
};

export const passwordRecovery = async (userEmail: any) => {
  try {
    const response = await axios.get(USER_DATA);

    const isFind = response.data.map((item: any) => {
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
