import { IProducts } from "entities/basket";
import { IContactsCard, IPopupCoordinates } from "entities/contact";
import { IDescription } from "entities/descriptions";

export interface IName {
  name: string;
}

export interface IrestaurantLocation {
  restautantPopupCoordinates: IPopupCoordinates[];
  restautantMapCenter: IPopupCoordinates;
}

export interface IAllIrestaurantLocationData {
  restaurantLocation: IrestaurantLocation;
}

export interface IrRstaurantProductions {
  products: IProducts[];
  baseProduct: IProducts[];
  sauce: IProducts[];
}

export interface IAllIRestaurantProductionsData {
  restaurantProductions: IrRstaurantProductions;
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
