import { IAmountProduct } from "app/store/reducers/amountProduct";

export const setTotalCost = (basket: IAmountProduct[]) => {
  return basket.reduce((totalCost, currentValue) => {

    return totalCost + Number(currentValue.cost);
  }, 0);
};
