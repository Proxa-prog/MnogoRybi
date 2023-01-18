export interface IPopupCoordinates {
  lat: number;
  lng: number;
}

export interface IContactsCard extends IPopupCoordinates {
  name: string;
  workTime?: string;
  phone?: string;
}
