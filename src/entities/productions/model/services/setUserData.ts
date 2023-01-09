import axios from "axios";
import { USER_DATA } from "entities/constants/constants";

export const userRigistration = async (userData: any) => {
  const {
    firstName,
    email,
    phone,
    password,
  } = userData;

  const createUser = () => axios
  .post(USER_DATA, {
    firstName: firstName,
    email: email,
    phone: phone,
    password: password,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  const data = await axios
  .get(USER_DATA)
  .then((resp) => {
    const emailIsBusy = resp.data.some((item: any) => {

      return item.email === email
    });

    emailIsBusy || createUser();
  })
  .catch((error) => {
    console.log(error);
  });

};
