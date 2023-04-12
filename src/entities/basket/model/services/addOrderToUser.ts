import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { paymentStatus } from "pages/MyOrders";

import {
  orderStatuses
} from "widgets/OrderHistoryCard";

import {
  IAddedOrder,
  IAmountProduct,
  IUserOrder,
  setTotalCost,
} from 'entities/basket';
import {
  userAccountActions,
  IUserEnterFull,
  ResponseApiUserData,
  IUserEnter,
} from 'entities/user';

import {
  COST_OF_DELIVERY,
  USER_DATA,
  ThunkConfig, MOK_DELIVERY_TIME,
} from 'shared';

export const addOrderToUser = createAsyncThunk<
  void,
  IUserOrder,
  ThunkConfig<void>
>('basket/addOrderToUser', async (userOrder, thunkAPI) => {
  const { userEmail, basket } = userOrder;
  const orderTime = new Date();

  try {
    const response = await axios.get<string, ResponseApiUserData>(`${USER_DATA}`);

    // Общее количество заказов
    // Из - за того, что в Vercel самопроизвольно удаляются и появляются пользователи -
    // не всегда корректно отображаются id
    const orderId = response.data.reduce(
      (total: number, current: IUserEnter) => total + current.userData.orders.length, 1);

    const actualUserId = response.data.find((user: IUserEnter) => {
      return user.userAccount.email === userEmail;
    });

    // Убрал не нужные поля
    const orderInfo = basket.basket.map((currentOrder: IAmountProduct) => {
      return {
        amount: currentOrder.amount,
        baseCost: currentOrder.baseCost,
        cost: currentOrder.cost,
        description: currentOrder.description,
        name: currentOrder.name,
        ingredients: {
          protein: currentOrder.protein,
          topping: currentOrder.topping,
          additionally: currentOrder.additionally,
          baseProduct: currentOrder.baseProduct,
          crunch: currentOrder.crunch,
          fillers: currentOrder.fillers,
          sauce: currentOrder.sauce,
        } ?? null,
      };
    });

    const totalCost = setTotalCost(basket.basket);

    const newOrder: IAddedOrder = {
      orders: orderInfo,
      orderStatus: orderStatuses.prepare,
      deliveryTime: MOK_DELIVERY_TIME,
      paymentStatus: paymentStatus.PENDING,
      numberOfOrder: orderId,
      orderData:  new Date(),
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
      orderId: orderId,
      totalCost: totalCost + COST_OF_DELIVERY,
    };

    thunkAPI.dispatch(userAccountActions.addOrderInUserAccount(newOrder));

    actualUserId &&
      (await axios.patch<string, IUserEnterFull>(
        `${USER_DATA}/${actualUserId.id}`,
        {
          userData: {
            ...actualUserId.userData,
            orders: [...actualUserId.userData.orders, newOrder],
          },
        }
      ));
  } catch (error) {
    console.error(error);
  }
});
