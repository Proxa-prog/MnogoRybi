import IMask from "imask";
import {INPUT_MASK} from "../../../../assets/constants/constants";

export const inputMask = (id: string) => {
  const element = document.getElementById(id);

  if (id === 'Телефон') {
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
};
