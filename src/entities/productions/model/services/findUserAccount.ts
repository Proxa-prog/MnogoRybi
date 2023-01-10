import axios from "axios";
import { USER_DATA } from "entities/constants/constants";

export const findUserAccount = async (userData: any) => {
  const { email, password } = userData;
  let isTrue = false;

  const data = await axios
    .get(USER_DATA)
    .then((resp) => {
      const isFind = resp.data.find(
        (item: any) => item.email === email && item.password === password
      );

      if (isFind) {
        isTrue = true;
      } else {
        isTrue = false;
      }
    })
    .catch((error) => {
      console.log(error);
    });

  return isTrue;
};
