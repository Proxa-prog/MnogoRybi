import axios from "axios";
import { USER_DATA } from "entities/constants/constants";

export const findUserAccount = async (userData: any) => {
  const { email, password } = userData;

  const data = await axios
    .get(USER_DATA)
    .then((resp) => {
      console.log(resp.data);
      resp.data.find((item: any) => {
        if (item.email === email) {
          console.log("Find!");
        }
      })
    })
    .catch((error) => {
      console.log(error);
    });
};
