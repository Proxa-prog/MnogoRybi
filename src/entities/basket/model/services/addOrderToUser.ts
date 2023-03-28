import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

import {
  IAmountProduct,
  IUserOrder,
  ResponseApi
} from "entities/basket";
import { IUserRegistration } from "entities/user";

import { ThunkConfig, USER_DATA } from "shared";
import {IUserEnter} from "../../../user/model/slice/userEnterSlice";
import {IUserEnterFull} from "../../../user/model/slice/userAccountSlice";

export const addOrderToUser = createAsyncThunk<void, IUserOrder, ThunkConfig<void>>(
  USER_DATA,
  async (userOrder) => {
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
        console.log('user.userAccount.email', user.userAccount.email);
        console.log('userEmail', userEmail);
        return user.userAccount.email === userEmail;
      });
      console.log('actualUserId', actualUserId);
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
      };

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
  }
);
