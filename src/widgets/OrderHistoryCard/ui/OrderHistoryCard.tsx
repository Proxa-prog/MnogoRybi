import React, { FC } from "react";
import classNames from "classnames";

import { IPaymentStatuses } from "../model/types/types";

import { StatusMarker } from "shared";

interface IOrderHistoryCard {
  numberOfOrder: number;
  orderData: string;
  deliveryTime: string;
  deliveryAddress: string;
  cost: string;
  commentToOrder?: string;
  paymentStatus: string;
  orderStatus: IPaymentStatuses;
}

import style from "./OrderHistoryCard.module.scss";

export const OrderHistoryCard: FC<IOrderHistoryCard> = (props: IOrderHistoryCard) => {
  const {
    numberOfOrder,
    orderData,
    deliveryTime,
    deliveryAddress,
    cost,
    commentToOrder,
    paymentStatus,
    orderStatus,
  } = props;

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <span className={style.numberOfOrder}>
          № {numberOfOrder}
        </span>
        <StatusMarker
          color={orderStatus?.prepare?.color}
        >
          {orderStatus?.prepare?.text}
        </StatusMarker>
      </div>
      <div className={style.orderInformation}>
        <span className={style.informationName}>
          Дата заказа: <span className={style.informationValue}>{orderData}</span>
        </span>
        <span className={style.informationName}>
          Время доставки: <span className={style.informationValue}>{deliveryTime}</span>
        </span>
        <span className={style.informationName}>
          Адрес доставки: <span className={style.informationValue}>{deliveryAddress}</span>
        </span>
        <span className={style.informationName}>
          Сумма заказа: <span className={style.informationValue}>{cost} ₽</span>
        </span>
        <span className={style.informationName}>
          Комментарий к заказу: <span className={style.informationValue}>{commentToOrder}</span>
        </span>
        <span className={style.informationName}>
          Оплата: <span className={classNames(
          style.informationValue,
          {
            [style.rejected]: paymentStatus === 'Не оплачен',
            [style.fulfilled]: paymentStatus === 'Оплачен онлайн',
            [style.pending]: paymentStatus === 'Оплата при получении',
          },
          []
        )}>{paymentStatus}</span>
        </span>
      </div>
    </div>
  )
};
