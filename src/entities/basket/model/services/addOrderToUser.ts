import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

import { IAmountProduct } from "entities/basket/model/types/basketTypes";
import { IBasketState } from "entities/basket/model/types/basketTypes";
import { IUserRegistration } from "entities/user/model/services/setUserData";

import { USER_DATA } from "shared/assets/constants/constants";

export interface IUserOrder {
  userEmail: string | undefined;
  basket: IBasketState;
}

export const addOrderToUser = createAsyncThunk(USER_DATA, async (userOrder: IUserOrder) => {
  const {
    userEmail,
    basket,
  } = userOrder;
  const orderTime = new Date();
  const id = nanoid();

  const response = await axios.get(`${USER_DATA}`);
  const actualUserId = response.data.find((user: IUserRegistration) => {

    return user.email === userEmail;
  });

  // Убрал не нужные поля
  const orderInfo = basket.basket.map((currnetOrder: IAmountProduct) => {

    return {
      amount: currnetOrder.amount,
      baseCost: currnetOrder.baseCost,
      baseProduct: currnetOrder.baseProduct,
      cost: currnetOrder.cost,
      description: currnetOrder.description,
      name: currnetOrder.name,
      sauce: currnetOrder.sauce,
    }
  });

  const newOrder = {
    orders: orderInfo,
    orderDay: orderTime.toLocaleDateString(),
    orderTime: orderTime.toLocaleTimeString(),
    comment: basket.comment,
    paymentToTheCourier: basket.paymentToTheCourier,
    pickupOfGoods: basket.pickupOfGoods,
    recipientAddress: basket.recipientAddress,
    recipientCardDate: basket.recipientCardDate,
    recipientCardNumber: basket.recipientCardNumber,
    recipientCvc: basket.recipientCvc,
    recipientName: basket.recipientName,
    recipientPhone: basket.recipientPhone,
    saveCardDate: basket.saveCardDate,
    orderId: id,
  }
  console.log('newOrder', newOrder);
  await axios.patch(`${USER_DATA}/${actualUserId.id}`, { orders: [...actualUserId.orders, newOrder] });
});
