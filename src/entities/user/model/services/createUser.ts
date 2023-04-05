import axios from 'axios';
import { ResponseApi } from 'entities/basket';
import { ICreateUserData } from "entities/user";

export const createUser = (userData: ICreateUserData) => {
  const {
    password,
    email,
    firstName,
    phone,
    orders,
    userUrl,
    deliveryAddress,
  } = userData;

  return (
    axios.post<string, ResponseApi>(userUrl, {
      userAccount: {
        isLogin: false,
        isModalRecoveryOpen: false,
        email: email,
        password: password,
      },
      userData: {
        firstName: firstName,
        phone: phone,
        orders,
        userUrl: '',
        deliveryAddress,
      },
    })
  );
};
