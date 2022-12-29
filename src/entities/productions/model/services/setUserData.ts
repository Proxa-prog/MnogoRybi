import axios from "axios";
import { USER_DATA } from "entities/constants/constants";

export const userRigistration = async (userData: any) => {
  const {
    firstName,
    email,
    phone,
  } = userData;

  const data = await axios
    .post(USER_DATA, {
      firstName: firstName,
      email: email,
      phone: phone,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
