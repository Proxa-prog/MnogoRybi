import { AdditionallyType, ConstructorType } from 'entities/constructor';
import {
  IPaymentStatus,
} from "../../../../widgets/OrderHistoryCard/model/types/types";

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
  fillers?: ConstructorType[];
  topping?: ConstructorType[];
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

export interface IAddedOrder {
  orders: IAmountProduct[];
  orderStatus: IPaymentStatus | undefined;
  deliveryTime: string;
  paymentStatus: any;
  numberOfOrder: number;
  orderData: Date;
  orderDay: string;
  orderTime: string;
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
  totalCost?: number;
  orderId: number;
}

export interface BasketCardProps {
  product: IAmountProduct;
}
