import axios from "axios";
import { ResponseApi } from "entities/basket";

import { IResponse, IUserRegistration } from "entities/user";


const checkEmailExistence = (resp: IResponse, email: string | undefined) => {
  const emailIsBusy = resp.data.some((item: IUserRegistration) => {

    return item.email === email;
  });

  return emailIsBusy;
};

export const registerUser = async (userData: IUserRegistration) => {
  const {
    firstName,
    email,
    phone,
    password,
    orders,
    closeWindow,
    userUrl,
  } = userData;

  try {
    const createUser = () => axios
      .post<string, ResponseApi>(userUrl, {
        firstName: firstName,
        email: email,
        phone: phone,
        password: password,
        orders,
      });

    const data = await axios.get<string, ResponseApi>(userUrl);

    const check = checkEmailExistence(data, email);

    if (!check) {
      createUser();
      closeWindow();
    } else {
      console.log("Пользователь с таким email уже существует.");
    }
  } catch (error) {
    console.error(error);
  }
};
