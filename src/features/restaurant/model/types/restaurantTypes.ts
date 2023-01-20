import { IProducts } from "entities/basket";
import { IPopupCoordinates } from "entities/contact";

export interface IrestaurantLocation {
  restautantPopupCoordinates: IPopupCoordinates[];
  restautantMapCenter: IPopupCoordinates;
}

export interface IAllIrestaurantLocationData {
  restaurantLocation: IrestaurantLocation;
}

export interface IrRstaurantProductions {
  products: IProducts[],
  baseProduct: IProducts[],
  sauce: IProducts[],
}

export interface IAllIRestaurantProductionsData {
restaurantProductions: IrRstaurantProductions;
}
