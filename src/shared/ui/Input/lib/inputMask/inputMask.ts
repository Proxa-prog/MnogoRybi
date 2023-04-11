import IMask from "imask";

import { INPUT_MASK } from "shared";

export const inputMask = (id: string, element: HTMLElement | null) => {
  if (
    id === 'Телефон'
    || id === 'recipient_phone'
    || id === 'personalAreaPhone'
  ) {
    element && IMask(element, INPUT_MASK.PHONE_MASK);
  }

  if (id.includes('Дата')) {
    element && IMask(
      element,
      {
        mask: Date,
        blocks: {
          d: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 31,
            maxLength: 2,
          },
          m: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12,
            maxLength: 2,
          },
          Y: {
            mask: IMask.MaskedRange,
            from: 1900,
            to: 2023,
          }
        },
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
