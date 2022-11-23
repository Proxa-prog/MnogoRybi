import { IDescription } from "app/store/reducers/description";
import { StatusMarkerProps } from "shared/ui/StatusMarker/StatusMarker";
import { CardProps } from "widgets/ui/Card/Card";

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

export const cards: CardProps[] = [
  {
      id: "1",
      imageUrl: "poke_with_turkey.jpg",
      header: "Фирменный поке с индейкой",
      description: "Состав на усмотрение шеф-повара",
      cost: 360,
      previousCost: 360,
      buttonColor: 'yellow',
      statuses: [
          {
              "children": "Новинка",
              "color": "blue"
          },
          {
              "children": "234",
              "color": "purple"
          },
          {
              "children": "Хит Сезона!",
              "color": "gray"
          },
          {
              "children": "Блюдо дня",
              "color": "yellow"
          },
          {
              "children": "Старинка",
              "color": "green"
          }
      ]
  },
  {
      id: "2",
      imageUrl: "poke_with_turkey.jpg",
      header: "Фирменный поке с индейкой",
      description: "Состав на усмотрение шеф-повара",
      cost: 460,
      previousCost: 560,
      statuses: [
          {
              "children": "Новинка",
              "color": "blue"
          },
          {
              "children": "234",
              "color": "purple"
          },
          {
              "children": "Хит Сезона!",
              "color": "gray"
          },
          {
              "children": "Блюдо дня",
              "color": "yellow"
          },
          {
              "children": "Старинка",
              "color": "green"
          }
      ]
  },
  {
      id: "3",
      imageUrl: "poke_with_turkey.jpg",
      header: "Фирменный поке с индейкой",
      description: "Состав на усмотрение шеф-повара",
      cost: 460,
      previousCost: 560,
      statuses: [
          {
              "children": "Новинка",
              "color": "blue"
          },
          {
              "children": "234",
              "color": "purple"
          },
          {
              "children": "Хит Сезона!",
              "color": "gray"
          },
          {
              "children": "Блюдо дня",
              "color": "yellow"
          },
          {
              "children": "Старинка",
              "color": "green"
          }
      ]
  },
  {
      id: "4",
      imageUrl: "poke_with_turkey.jpg",
      header: "Фирменный поке с индейкой",
      description: "Состав на усмотрение шеф-повара",
      cost: 460,
      previousCost: 560,
      statuses: [
          {
              "children": "Новинка",
              "color": "blue"
          },
          {
              "children": "234",
              "color": "purple"
          },
          {
              "children": "Хит Сезона!",
              "color": "gray"
          },
          {
              "children": "Блюдо дня",
              "color": "yellow"
          },
          {
              "children": "Старинка",
              "color": "green"
          }
      ]
  },
  {
      id: "5",
      imageUrl: "poke_with_turkey.jpg",
      header: "Фирменный поке с индейкой",
      description: "Состав на усмотрение шеф-повара",
      cost: 460,
      previousCost: 560,
      statuses: [
          {
              "children": "Новинка",
              "color": "blue"
          },
          {
              "children": "234",
              "color": "purple"
          },
          {
              "children": "Хит Сезона!",
              "color": "gray"
          },
          {
              "children": "Блюдо дня",
              "color": "yellow"
          },
          {
              "children": "Старинка",
              "color": "green"
          }
      ]
  },
  {
      id: "6",
      imageUrl: "poke_with_turkey.jpg",
      header: "Фирменный поке с индейкой",
      description: "Состав на усмотрение шеф-повара",
      cost: 460,
      previousCost: 560,
      statuses: [
          {
              "children": "Новинка",
              "color": "blue"
          },
          {
              "children": "234",
              "color": "purple"
          },
          {
              "children": "Хит Сезона!",
              "color": "gray"
          },
          {
              "children": "Блюдо дня",
              "color": "yellow"
          },
          {
              "children": "Старинка",
              "color": "green"
          }
      ]
  },
  {
      id: "7",
      imageUrl: "poke_with_turkey.jpg",
      header: "Фирменный поке с индейкой",
      description: "Состав на усмотрение шеф-повара",
      cost: 460,
      previousCost: 560,
      statuses: [
          {
              "children": "Новинка",
              "color": "blue"
          },
          {
              "children": "234",
              "color": "purple"
          },
          {
              "children": "Хит Сезона!",
              "color": "gray"
          },
          {
              "children": "Блюдо дня",
              "color": "yellow"
          },
          {
              "children": "Старинка",
              "color": "green"
          }
      ]
  },
  {
      id: "8",
      imageUrl: "poke_with_turkey.jpg",
      header: "Фирменный поке с индейкой",
      description: "Состав на усмотрение шеф-повара",
      cost: 460,
      previousCost: 560,
      statuses: [
          {
              "children": "Новинка",
              "color": "blue"
          },
          {
              "children": "234",
              "color": "purple"
          },
          {
              "children": "Хит Сезона!",
              "color": "gray"
          },
          {
              "children": "Блюдо дня",
              "color": "yellow"
          },
          {
              "children": "Старинка",
              "color": "green"
          }
      ]
  },
  {
      id: "9",
      imageUrl: "poke_with_turkey.jpg",
      header: "Фирменный поке с индейкой",
      description: "Состав на усмотрение шеф-повара",
      cost: 460,
      previousCost: 560,
      statuses: [
          {
              "children": "Новинка",
              "color": "blue"
          },
          {
              "children": "234",
              "color": "purple"
          },
          {
              "children": "Хит Сезона!",
              "color": "gray"
          },
          {
              "children": "Блюдо дня",
              "color": "yellow"
          },
          {
              "children": "Старинка",
              "color": "green"
          }
      ]
  },
  {
      id: "10",
      imageUrl: "poke_with_turkey.jpg",
      header: "Фирменный поке с индейкой",
      description: "Состав на усмотрение шеф-повара",
      cost: 460,
      previousCost: 560,
      statuses: [
          {
              "children": "Новинка",
              "color": "blue"
          },
          {
              "children": "234",
              "color": "purple"
          },
          {
              "children": "Хит Сезона!",
              "color": "gray"
          },
          {
              "children": "Блюдо дня",
              "color": "yellow"
          },
          {
              "children": "Старинка",
              "color": "green"
          }
      ]
  },
  {
      id: "11",
      imageUrl: "poke_with_turkey.jpg",
      header: "Фирменный поке с индейкой",
      description: "Состав на усмотрение шеф-повара",
      cost: 460,
      previousCost: 560,
      statuses: [
          {
              "children": "Новинка",
              "color": "blue"
          },
          {
              "children": "234",
              "color": "purple"
          },
          {
              "children": "Хит Сезона!",
              "color": "gray"
          },
          {
              "children": "Блюдо дня",
              "color": "yellow"
          },
          {
              "children": "Старинка",
              "color": "green"
          }
      ]
  },
  {
      id: "12",
      imageUrl: "poke_with_turkey.jpg",
      header: "Фирменный поке с индейкой",
      description: "Состав на усмотрение шеф-повара",
      cost: 460,
      previousCost: 560,
      statuses: [
          {
              "children": "Новинка",
              "color": "blue"
          },
          {
              "children": "234",
              "color": "purple"
          },
          {
              "children": "Хит Сезона!",
              "color": "gray"
          },
          {
              "children": "Блюдо дня",
              "color": "yellow"
          },
          {
              "children": "Старинка",
              "color": "green"
          }
      ]
  },
  {
      id: "13",
      imageUrl: "poke_with_turkey.jpg",
      header: "Фирменный поке с индейкой",
      description: "Состав на усмотрение шеф-повара",
      cost: 460,
      previousCost: 560,
      statuses: [
          {
              "children": "Новинка",
              "color": "blue"
          },
          {
              "children": "234",
              "color": "purple"
          },
          {
              "children": "Хит Сезона!",
              "color": "gray"
          },
          {
              "children": "Блюдо дня",
              "color": "yellow"
          },
          {
              "children": "Старинка",
              "color": "green"
          }
      ]
  },
  {
      id: "14",
      imageUrl: "poke_with_turkey.jpg",
      header: "Фирменный поке с индейкой",
      description: "Состав на усмотрение шеф-повара",
      cost: 460,
      previousCost: 560,
      statuses: [
          {
              "children": "Новинка",
              "color": "blue"
          },
          {
              "children": "234",
              "color": "purple"
          },
          {
              "children": "Хит Сезона!",
              "color": "gray"
          },
          {
              "children": "Блюдо дня",
              "color": "yellow"
          },
          {
              "children": "Старинка",
              "color": "green"
          }
      ]
  }
]
