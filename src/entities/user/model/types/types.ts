import { IAmountProduct } from "entities/basket/model/types/basketTypes";

export interface IUserAccount {
  userAccount: {
    isLogin: boolean;
    recoveryIsOpen: boolean;
    email: string | undefined;
    basket: IAmountProduct[];
  }
}
