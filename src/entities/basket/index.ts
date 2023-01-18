export { openBasketSelector } from "./model/selectors/openBasketSelector";
export { getAmountProductSelector } from "./model/selectors/getAmountProductSelector";
export { addOrderToUser } from "./model/services/addOrderToUser";
export { setTotalCost } from "./model/services/setTotalCost";
export {
  setNewProduct,
  setAmountProduct,
  setCostProduct,
  setBaseProduct,
  setSauce,
} from "./model/slice/amountProductReduser";
export {
  addProductInBasket,
  openBasketBlock,
  changeAmount,
  changeCost,
  removeProduct,
  addRecipientName,
  addRecipientPhone,
  addRecipientAddress,
  changePickupOfGoods,
  addRecipientCardNumber,
  addRecipientCardDate,
  addRecipientCardCvc,
  changePaymentToTheCourier,
  addComment,
  changeSaveCardDate,
} from "./model/slice/basketReducer";
export {
  IProducts,
  IBasketState,
  IBasketArray,
  IChangeAmountAction,
  IChangeCostAction,
  IIngridients,
  IAmountProduct,
  IHowMuchProduct,
  AmountProductArray,
  IAmountProductAction,
  IUserOrder,

} from "./model/types/basketTypes";
