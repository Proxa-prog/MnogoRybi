import axios from "axios";

import { IResponse, IUserRegistration } from "entities/user";


const checkEmail = (resp: IResponse, email: string | undefined) => {
  const emailIsBusy = resp.data.some((item: IUserRegistration) => {

    return item.email === email;
  });

   return emailIsBusy;
};

export const userRigistration = async (userData: IUserRegistration) => {
  const {
    firstName,
    email,
    phone,
    password,
    orders,
    closeWindow,
    userUrl,
  } = userData;

  const createUser = () => axios
  .post(userUrl, {
    firstName: firstName,
    email: email,
    phone: phone,
    password: password,
    orders,
  });

  const data = await axios.get(userUrl);

  const check = checkEmail(data, email);

  if (!check) {
    createUser();
    closeWindow();
  } else {
    console.log("Пользователь с таким email уже существует.");
  }
};
