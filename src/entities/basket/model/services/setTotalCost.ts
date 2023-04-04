import { IAmountProduct } from "entities/basket";

export const setTotalCost = (basket: IAmountProduct[]) => {
  return basket.reduce((totalCost, currentValue) => {

    return totalCost + Number(currentValue.cost);
  }, 0);
};
