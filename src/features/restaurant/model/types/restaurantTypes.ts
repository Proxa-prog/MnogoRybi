import { IProducts } from "entities/basket";
import { IContactsCard, IPopupCoordinates } from "entities/contact";
import { IDescription } from "entities/descriptions";

export interface IName {
  name: string;
}

export interface IRestaurantLocation {
  restaurantPopupCoordinates: IPopupCoordinates[];
  restaurantMapCenter: IPopupCoordinates;
}

export interface IAllIRestaurantLocationData {
  restaurantLocation: IRestaurantLocation;
}

export interface IRestaurantProductions {
  products: IProducts[];
  baseProduct: IProducts[];
  sauce: IProducts[];
}

export interface IAllIRestaurantProductionsData {
  restaurantProductions: IRestaurantProductions;
}

export interface IAllRestaurantPagesInfo {
  restaurantPagesInfo: IrestaurantPagesInfo;
}

export interface IrestaurantPagesInfo {
  pagesNames: IName[];
  footerLinksNames: IName[];
  restaurantAddress: IContactsCard[];
  mainPageDescriptionImagesLinks: IDescription[];
}
