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

export const ONE_HUNDRED_PIXEL_SCROLL = 100;

export enum ViewPorts {
  "MOBILE" = 320,
  "TABLET" = 768,
  "DESKTOP" = 1024,
}
