import axios from 'axios';
import { ICreateUserData, ResponseApi } from "entities/user";

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
        deliveryAddress: deliveryAddress,
      },
    })
  );
};
