import { IPopupCoordinates } from "entities/contact";

export interface IrestaurantLocation {
  restautantPopupCoordinates: IPopupCoordinates[];
  restautantMapCenter: IPopupCoordinates;
}

export interface IAllIrestaurantLocationData {
  restaurantLocation: IrestaurantLocation;
}
