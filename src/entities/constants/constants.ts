import { IDescription } from "app/store/reducers/description";

export interface IProducts {
  name: string;
}

export const PRODUCTS = [
  { name: "Поке" },
  { name: "Роллы" },
  { name: "Супы и карри" },
  { name: "Вок" },
  { name: "Сэндвичи" },
  { name: "Десерты" },
  { name: "Напитки" },
];

export const INFO = [
  { name: "Франшиза" },
  { name: "Доставка" },
  { name: "Новости" },
  { name: "Контакты" },
];

export const INFO_FOOTER = [
  { name: "Доставка и оплата" },
  { name: "Новости" },
  { name: "Франшиза" },
  { name: "Контакты" },
  { name: "Личный кабинет" },
];

export const ADDRESS = [
  { name: "Ярославль, Некрасова 52/35" },
  { name: "Ярославль, Тургенева 1а" },
  { name: "Ярославль, Свободы 52/39" },
  { name: "Ярославль, Урицкого 39" },
];

export const PHONES = [{ name: "8 (4852) 980-100" }];

export const DESCRIPTION_IMAGES_LINKS: IDescription[] = [
  {
    name: "description_background.jpg",
    isCurrent: true,
  },
  {
    name: "cheesecake.jpg",
    isCurrent: false,
  },
  {
    name: "poke_with_turkey.jpg",
    isCurrent: false,
  },
];

export const DESCRIPTION_COUNT_LENGTS = 2;

export const ONE_HUNDRED_PIXEL_SCROLL = 100;

export enum ViewPorts {
  "MOBILE" = 320,
  "TABLET" = 768,
  "DESKTOP" = 1024,
}
