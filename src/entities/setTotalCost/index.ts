import { IAmountProduct } from "entities/amountProduct/model/slice/amountProductReduser";

export const setTotalCost = (basket: IAmountProduct[]) => {
  return basket.reduce((totalCost, currentValue) => {

    return totalCost + Number(currentValue.cost);
  }, 0);
};
