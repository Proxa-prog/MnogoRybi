import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  IAddedOrder,
  IAmountProduct,
  IUserOrder,
  setTotalCost,
} from 'entities/basket';
import { userAccountActions, IUserEnterFull } from 'entities/user';

import { ThunkConfig, USER_DATA } from 'shared';

export const addOrderToUser = createAsyncThunk<
  void,
  IUserOrder,
  ThunkConfig<void>
>(USER_DATA, async (userOrder, thunkAPI) => {
  const { userEmail, basket } = userOrder;
  const orderTime = new Date();
  const id = nanoid();

  try {
    const response = await axios.get<string, any>(`${USER_DATA}`);
    // response.data.map((item: any) => {
    //   axios.delete<string, IUserEnterFull>(
    //     `${USER_DATA}/${item.id}`,
    //
    //   )
    // })

    const actualUserId = response.data.find((user: any) => {
      return user.userAccount.email === userEmail;
    });

    // Убрал не нужные поля
    const orderInfo = basket.basket.map((currentOrder: IAmountProduct) => {
      return {
        amount: currentOrder.amount,
        baseCost: currentOrder.baseCost,
        baseProduct: currentOrder.baseProduct,
        cost: currentOrder.cost,
        description: currentOrder.description,
        name: currentOrder.name,
        sauce: currentOrder.sauce,
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
