import { IBasketState } from "entities/basket";

export interface IRegistration {
  registration: {
    agreement: boolean;
    isOpen: boolean;
    firstName: string | undefined;
    email: string | undefined;
    password: string | undefined;
    phone: string | undefined;
    orders: IBasketState[];
  };
}

export interface IDescriptionsAction {
  payload: IRegistration;
}
