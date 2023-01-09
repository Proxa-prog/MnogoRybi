import { IDescription } from "app/store/reducers/description";

export const CENTER_LAT = 57.628497;
export const CENTER_LNG = 39.905368;
export const NEWS_LIMIT = 3;

export interface IProducts {
  name: string;
  id?: string;
};

export interface IContactsCard extends IPopupCoordinates {
  name: string;
  workTime: string;
  phone: string;
};

export interface IPopupCoordinates {
  lat: number;
  lng: number;
};

export const POPUP_COORDINATES = [
  {
    lat: 57.64647,
    lng: 39.85169,
  },
  {
    lat: 57.622014,
    lng: 39.822954,
  },
  {
    lat: 57.641119,
    lng: 39.910650,
  },
  {
    lat: 57.623386,
    lng: 39.960096,
  },
];

export const PRODUCTS = [
  {
    name: "Поке",
    id: "Poke",
  },
  {
    name: "Роллы",
    id: "Rolls",
  },
  {
    name: "Супы и карри",
    id: "Curry",
  },
  {
    name: "Вок",
    id: "Wok",
  },
  {
    name: "Сэндвичи",
    id: "Sandwich",
  },
  {
    name: "Десерты",
    id: "Deserts",
  },
  {
    name: "Напитки",
    id: "Drinks",
  },
];

export const BASE_PRODUCT = [
  { name: "Рисовая лапша" },
  { name: "Пшеничная лапша" },
  { name: "Лапша удон" },
  { name: "Лапша сомен" },
  { name: "Лапша рамен" },
  { name: "Лапша соба" },
  { name: "Фунчоза" },
];

export const SAUCE = [
  { name: "Соевый соус" },
  { name: "Сливочный-чили соус" },
  { name: "Медовый соус" },
  { name: "Терияки соус" },
  { name: "Унаги соус" },
  { name: "Спайси соус" },
  { name: "Кимчи соус" },
];

export const INFO = [
  {
    name: "Франшиза",
    id: "franchise",
  },
  {
    name: "Доставка",
    id: "delivery",
  },
  {
    name: "Новости",
    id: "news",
  },
  {
    name: "Контакты",
    id: "contacts",
  },
];

export const INFO_FOOTER = [
  { name: "Доставка и оплата" },
  { name: "Новости" },
  { name: "Франшиза" },
  { name: "Контакты" },
  { name: "Личный кабинет" },
];

export const ADDRESS: IContactsCard[] = [
  {
    name: "Ярославль, Тургенева 1а",
    workTime: "пн-вс: 9:00—22:00",
    phone: "Телефон: 8 (4852) 980-100",
    lat: 57.64647,
    lng: 39.85169,
  },
  {
    name: "Ярославль, Некрасова 52/35",
    workTime: "пн-вс: 11:00—23:00",
    phone: "Телефон: 8 (4852) 980-100",
    lat: 57.622014,
    lng: 39.822954,
  },
  {
    name: "Ярославль, Свободы 52/39",
    workTime: "пн-вс: 9:00—22:00",
    phone: "Телефон: 8 (4852) 980-100",
    lat: 57.641119,
    lng: 39.910650,
  },
  {
    name: "Ярославль, Урицкого 39",
    workTime: "пн-вс: 9:00—22:00",
    phone: "Телефон: 8 (4852) 980-100",
    lat: 57.623386,
    lng: 39.960096,
  },
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
    name: "poke/poke_with_turkey.jpg",
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

export const POKE_URL = "http://localhost:3001/productions";
export const NEWS_URL = "http://localhost:3001/news";
export const USER_DATA = "http://localhost:3001/users";

export const MOK_PASSWORD = 'qwerty';
