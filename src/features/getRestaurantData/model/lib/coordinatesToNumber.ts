import {IPopupCoordinates} from "entities/contact";

export const coordinatesToNumber = (coordinates: IPopupCoordinates) => {
  coordinates.lat = Number(coordinates.lat);
  coordinates.lng = Number(coordinates.lng);

  return coordinates;
};
