import React, { FC } from "react";
import classNames from "classnames";

import { StatusMarker } from "shared";
import { ButtonColor } from "shared/ui/StatusMarker/StatusMarker";

export interface IPaymentStatus {
  text: string;
  color: ButtonColor;
}

interface IOrderHistoryCard {
  numberOfOrder: number;
  orderData: string;
  deliveryTime: string;
  deliveryAddress: string;
  cost: string;
  commentToOrder?: string;
  paymentStatus: string;
  orderStatus: IPaymentStatus;
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
        <span className={style.number_of_order}>
          № {numberOfOrder}
        </span>
        <StatusMarker
          color={orderStatus.color}
        >
          {orderStatus.text}
        </StatusMarker>
      </div>
      <div className={style.order_information}>
        <span className={style.information_name}>
          Дата заказа: <span className={style.information_value}>{orderData}</span>
        </span>
        <span className={style.information_name}>
          Время доставки: <span className={style.information_value}>{deliveryTime}</span>
        </span>
        <span className={style.information_name}>
          Адрес доставки: <span className={style.information_value}>{deliveryAddress}</span>
        </span>
        <span className={style.information_name}>
          Сумма заказа: <span className={style.information_value}>{cost}</span>
        </span>
        <span className={style.information_name}>
          Комментарий к заказу: <span className={style.information_value}>{commentToOrder}</span>
        </span>
        <span className={style.information_name}>
          Оплата: <span className={classNames(
          style.information_value,
          { [style.rejected]: paymentStatus === 'Не оплачен' },
          { [style.fulfilled]: paymentStatus === 'Оплачен онлайн' },
          { [style.pending]: paymentStatus === 'Оплата при получении' },
          []
        )}>{paymentStatus}</span>
        </span>
      </div>
    </div>
  )
};
