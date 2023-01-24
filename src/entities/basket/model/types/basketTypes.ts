import { IUserRegistration } from "entities/user";
import { INews } from "features/news";
import { IProductions } from "features/productions";
import {
  IrestaurantLocation,
  IrestaurantPagesInfo,
  IRestaurantProductions,
} from "features/restaurant";

export interface IProducts {
  name: string;
  id?: string;
}

export interface IBasketState {
  basket: IAmountProduct[];
  isBasketOpen: boolean;
  recipientName: string | undefined;
  recipientPhone: string | undefined;
  recipientAddress: string;
  recipientCardNumber?: string | undefined;
  recipientCardDate?: string;
  recipientCvc?: string;
  pickupOfGoods: boolean;
  paymentToTheCourier: boolean;
  saveCardDate: boolean;
  comment?: string | undefined;
}

export interface IBasketArray {
  basketState: IBasketState;
}

export interface IChangeAmountAction {
  addAmount: number;
  id: string | undefined;
}

export interface IChangeCostAction {
  addCost: number;
  id: string | undefined;
}

export interface IIngridients {
  baseProduct?: string;
  sauce?: string;
}

export interface IAmountProduct extends IIngridients {
  name: string | undefined;
  amount: number;
  cost: number;
  baseCost?: number;
  imageUrl?: string;
  description?: string;
  id?: string;
}

export interface IHowMuchProduct {
  amount: number;
  cost: number;
}

export interface AmountProductArray {
  amountProduct: IAmountProduct;
}

export interface IAmountProductAction {
  payload: IAmountProduct;
}

export interface IUserOrder {
  userEmail: string | undefined;
  basket: IBasketState;
}

export interface ResponseApi {
  status: string;
  data: IUserRegistration[];
}

export interface ResponseApiMap {
  status: string;
  data: IrestaurantLocation;
}

export interface ResponseApiNews {
  status: string;
  data: INews[];
}

export interface ResponseApiProductions {
  status: string;
  data: IProductions;
}

export interface ResponseApiRestaurantLocation {
  status: string;
  data: IrestaurantLocation;
}

export interface ResponseApiRestaurantPagesInfo {
  status: string;
  data: IrestaurantPagesInfo;
}

export interface ResponseApiRestaurantProductions {
  status: string;
  data: IRestaurantProductions;
}
