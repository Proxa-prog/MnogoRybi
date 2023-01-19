import axios from "axios";
import { USER_DATA } from "shared";

export const findUserAccount = async (userData: any) => {
  const { email, password } = userData;
  let isTrue = false;

  try {
    const response = await axios.get(USER_DATA);

    const isFind = response.data.find(
      (item: any) => item.email === email && item.password === password
    );

    if (isFind) {
      isTrue = true;
    } else {
      isTrue = false;
    }

    return isTrue;

  } catch (error) {
    console.error(error);
  }
};
