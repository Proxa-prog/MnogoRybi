export enum ViewPorts {
  "MOBILE" = 320,
  "TABLET" = 768,
  "DESKTOP" = 1024,
}

export const IMAGE_NEWS_HEIGHT = 450;

export const COST_OF_DELIVERY = 200;

export const MAP_ICON_SIZE = 60;
export const MAP_ZOOM = 13;

export const LOGO_WIDTH = 235.9;
export const LOGO_HEIGHT = 70;

export const NEWS_LIMIT = 3;

export const ONE_HUNDRED_PIXEL_SCROLL = 100;

// db.json URL

export const POKE_URL = "http://localhost:3001/productions";
export const NEWS_URL = "http://localhost:3001/news";
export const USER_DATA = "http://localhost:3001/users";
export const RESTAURANT_LOCATION_URL = "http://localhost:3001/restaurantLocation";
export const RESTAURANT_PRODUCTIONS_URL = "http://localhost:3001/restaurantProductions";
export const RESTAURANT_PAGES_INFO_URL = "http://localhost:3001/restaurantPagesInfo";

// Vercel URL

// export const POKE_URL = "https://json-server-mnogo.vercel.app/productions";
// export const NEWS_URL = "https://json-server-mnogo.vercel.app/news";
// export const USER_DATA = "https://json-server-mnogo.vercel.app/users";
// export const RESTAURANT_LOCATION_URL = "https://json-server-mnogo.vercel.app/restaurantLocation";
// export const RESTAURANT_PRODUCTIONS_URL = "https://json-server-mnogo.vercel.app/restaurantProductions";
// export const RESTAURANT_PAGES_INFO_URL = "https://json-server-mnogo.vercel.app/restaurantPagesInfo";

export const MOK_PASSWORD = "qwerty";
export const NEW_PASSWORD = "12345";

export const MAIN_PAGE_ROUTE = "/";
export const CONTACTS_ROUTE = "/contacts";
export const NEWS_ROUTE = "/news";
export const NEWS_PAGE_ROUTE = "/:newsId";
export const PERSONAL_AREA_ROUTE = "/PersonalArea";
export const FRANCHISE_ROUTE = "/franchise";
export const DELIVERY_ROUTE = "/delivery";

// Для storybook.
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
