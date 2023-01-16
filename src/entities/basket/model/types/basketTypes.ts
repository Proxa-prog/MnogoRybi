import { IAmountProduct } from "entities/amountProduct/model/slice/amountProductReduser";

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
