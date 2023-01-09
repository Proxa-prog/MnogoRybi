import axios from "axios";
import { USER_DATA } from "entities/constants/constants";

export const findUserAccount = async (userData: any) => {
  const { email, password } = userData;
  let isTrue = false;

  const data = await axios
    .get(USER_DATA)
    .then((resp) => {
      console.log(resp.data);
      resp.data.find((item: any) => {
        if (item.email === email && item.password === password) {
          console.log("Find!");
          isTrue = true;

        } else {
          console.log("nothing!");
          isTrue = false;
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });

    return isTrue;
};
