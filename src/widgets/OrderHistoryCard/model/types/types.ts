import { ButtonColor } from "../../../../shared/ui/StatusMarker/StatusMarker";

export const enum paymentStatus {
  PENDING = 'Оплата при получении',
  FULLFILED = 'Оплачен онлайн',
  REJECTED = 'Не оплачен',
}

export interface IPaymentStatus {
  text: string;
  color: ButtonColor;
}

export interface IPaymentStatuses {
  delivered: IPaymentStatus;
  prepare: IPaymentStatus;
  canceled: IPaymentStatus;
}

export const orderStatuses: IPaymentStatuses = {
  delivered: {
    text: 'Доставлен',
    color: 'blue',
  },
  prepare: {
    text: 'Готовиться',
    color: 'yellow',
  },
  canceled: {
    text: 'Отменён',
    color: 'gray',
  },
};
