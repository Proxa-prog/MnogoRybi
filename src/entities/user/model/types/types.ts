import { IAmountProduct } from "entities/basket/model/types/basketTypes";
import {IUserEnterFull} from "../slice/userAccountSlice";
import {IUserEnter} from "../slice/userEnterSlice";
import {IAddedOrder} from "../../../basket/model/services/addOrderToUser";

export interface IUserAccount {
  isAddNewAddressOpen: boolean;
  isLogin: boolean;
  recoveryIsOpen: boolean;
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
