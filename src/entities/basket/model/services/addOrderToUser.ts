import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

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

import { ThunkConfig, USER_DATA } from 'shared';

export const addOrderToUser = createAsyncThunk<
  void,
  IUserOrder,
  ThunkConfig<void>
>('basket/addOrderToUser', async (userOrder, thunkAPI) => {
  const { userEmail, basket } = userOrder;
  const orderTime = new Date();
  const id = nanoid();

  try {
    const response = await axios.get<string, ResponseApiUserData>(
      `${USER_DATA}`
    );

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
      totalCost: totalCost,
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
