import { IAddedOrder } from 'entities/basket';

export interface IUserEnter extends IUserEnterFull {
  isOpen: boolean;
  id?: number;
}

export interface IUserEnterFull {
  personalAreaLinks: IPersonalAreaPagesLinks[];
  userAccount: IUserAccount;
  userData: IUserRegistration;
  id?: number;
}

export interface ResponseApi {
  status: string;
  data: IUserEnterFull[];
}

export interface IUserAccount {
  isModalAddNewAddressOpen: boolean;
  isModalUserDoesNotExist: boolean;
  isLogin: boolean;
  isModalRecoveryOpen: boolean;
  email: string | undefined;
  password: string | undefined;
}

export interface IUserRegistration {
  firstName: string | undefined;
  phone: string | undefined;
  orders: IAddedOrder[];
  currentOrders: IAddedOrder[];
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
  newDeliveryAddress?: string;
}

export interface IPersonalAreaPagesLinks {
  name: string;
  id: string;
  isCurrent?: boolean;
}

export interface ICreateUserData {
  userUrl: string;
  email: string | undefined;
  password: string | undefined;
  firstName: string | undefined;
  phone: string | undefined;
  orders: IAddedOrder[];
  deliveryAddress: string[];
}
