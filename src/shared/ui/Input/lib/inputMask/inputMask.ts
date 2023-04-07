import IMask from "imask";

import { INPUT_MASK } from "shared";

export const inputMask = (id: string) => {
  const element = document.getElementById(id);

  if (id === 'Телефон' || id === 'recipient_phone') {
    element && IMask(element, INPUT_MASK.PHONE_MASK);
  }

  if (id.includes('Дата')) {
    element && IMask(
      element,
      {
        mask: Date,
        min: new Date(1, 0, 1),
        max: new Date(9999, 0, 1),
        lazy: false
      });
  }

  if (id === 'Номер карты') {
    element && IMask(element, INPUT_MASK.CARD_NUMBER);
  }

  if (id === 'Срок действия') {
    element && IMask(element, INPUT_MASK.CARD_VALIDITY);
  }

  if (id === 'CVC') {
    element && IMask(element, INPUT_MASK.CARD_CVC);
  }
};
