import { ButtonColor } from "shared/ui/StatusMarker/StatusMarker";

export interface IPaymentStatus {
  text: string;
  color: ButtonColor;
}

export interface IPaymentStatuses {
  delivered?: IPaymentStatus | undefined;
  prepare?: IPaymentStatus | undefined;
  canceled?: IPaymentStatus | undefined;
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
