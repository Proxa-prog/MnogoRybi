import { IAmountProduct } from "entities/basket/model/types/basketTypes";
import {IUserEnterFull} from "../slice/userAccountSlice";
import {IUserEnter} from "../slice/userEnterSlice";

export interface IUserAccount {
  isLogin: boolean;
  recoveryIsOpen: boolean;
  email: string | undefined;
  password: string | undefined;
}

export interface IUserRegistration {
  firstName: string | undefined;
  phone: string | undefined;
  orders: IAmountProduct[];
  closeWindow: () => void;
  userUrl: string;
  id?: string;
  deliveryAddress: string[];
}

export interface IResponse {
  data: IUserEnterFull[];
}
export interface ResponseApiUserData {
  status: string;
  data: IUserEnter[];
}


export interface IUserData {
  email: string | undefined;
  password: string | undefined;
  isWindowUserEnterOpen: boolean;
  isUserLogin: boolean;
}
