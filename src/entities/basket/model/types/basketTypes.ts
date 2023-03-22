import { IUserRegistration } from "entities/user";
import { INews } from "features/news";
import { IProductions } from "features/productions";
import {
  IrestaurantLocation,
  IrestaurantPagesInfo,
  IRestaurantProductions,
} from "features/restaurant";
import {AdditionallyType} from "../../../constructor/model/slice/constructorSlice";

export interface IProducts {
  name: string;
  id?: string;
  isCurrent?: boolean;
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

export interface IIngredients {
  baseProduct?: string;
  sauce?: string;
  protein?: string;
  fillers?: string[];
  topping?: string[];
  crunch?: string;
  additionally?: AdditionallyType[];
}

export interface IAmountProduct extends IIngredients {
  name: string | undefined;
  amount: number;
  cost: number;
  baseCost: number;
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
  AmountOfProductsInConstructor: IAmountProduct;
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

export interface ResponseApiIngredients {
  status: string;
  data: any;
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
