import axios from "axios";
import { ResponseApi } from "entities/basket";

import { IResponse, IUserRegistration } from "entities/user";
import {IUserEnterFull} from "../slice/userAccountSlice";


const checkEmailExistence = (resp: IResponse, email: string | undefined) => {
  console.log('resp', resp);
  const emailIsBusy = resp.data.some((item: IUserEnterFull) => {

    return item.userAccount.email === email;
  });

  return emailIsBusy;
};

export const registerUser = async (user: IUserEnterFull) => {
  const { userAccount, userData } = user;
  const {
    firstName,
    phone,
    orders,
    closeWindow,
    userUrl,
    deliveryAddress,
    id,
  } = userData;

  const {
    password,
    email,
  } = userAccount;

  // {
  //   firstName: firstName,
  //     email: email,
  //   phone: phone,
  //   password: password,
  //   orders,
  //   deliveryAddress,
  // }
  try {
    const createUser = () => axios
      .post<string, ResponseApi>(userUrl, {
        userAccount: {
          isLogin: false,
          recoveryIsOpen: false,
          email: email,
          password: password,
        },
        userData: {
          firstName: firstName,
          phone: phone,
          orders,
          closeWindow: () => {},
          userUrl: '',
          deliveryAddress,
        }
      }
    );

    const data = await axios.get<string, ResponseApi>(userUrl);
    console.log(data);
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
