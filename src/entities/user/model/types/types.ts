import { IAmountProduct } from "entities/basket/model/types/basketTypes";

export interface IUserAccount {
  userAccount: {
    isLogin: boolean;
    recoveryIsOpen: boolean;
    email: string | undefined;
    basket: IAmountProduct[];
  }
}

export interface IUserRegistration {
  firstName: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  password: string | undefined;
  orders: IAmountProduct[];
  closeWindow: () => void;
}

export interface IResponse {
  data: IUserRegistration[];
}
