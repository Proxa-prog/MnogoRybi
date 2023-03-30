import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

import {
  IAmountProduct,
  IUserOrder,
  ResponseApi, setTotalCost
} from "entities/basket";
import {addOrderInUserAccount, IUserRegistration} from "entities/user";

import { ThunkConfig, USER_DATA } from "shared";
import {IUserEnter} from "../../../user/model/slice/userEnterSlice";
import {IUserEnterFull} from "../../../user/model/slice/userAccountSlice";

export interface IAddedOrder {
  orders: IAmountProduct[],
  orderDay: string;
  orderTime: string;
  recipientName: string | undefined;
  recipientPhone: string | undefined;
  recipientAddress: string;
  recipientCardNumber?: string | undefined;
  recipientCardDate?: string;
  recipientCvc?: string;
  pickupOfGoods: boolean;
  paymentToTheCourier: boolean;
  saveCardDate: boolean;
  comment?: string | undefined;
  totalCost?: number;
  orderId: string;
}

export const addOrderToUser = createAsyncThunk<void, IUserOrder, ThunkConfig<void>>(
  USER_DATA,
  async (userOrder,thunkAPI) => {
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

      thunkAPI.dispatch(addOrderInUserAccount(newOrder));

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
