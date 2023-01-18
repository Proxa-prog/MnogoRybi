import { IProducts } from "entities/basket/model/types/basketTypes";
import { IContactsCard, IPopupCoordinates } from "entities/contact";
import { IDescription } from "entities/descriptions";

export interface ISiteData {
  popupCoordinates: IPopupCoordinates[];
  mapCenter: IPopupCoordinates;
  products: IProducts[];
  baseProduct: IProducts[];
  sauce: IProducts[];
  info: IProducts[];
  address: IContactsCard[];
  info_footer: IProducts[];
  descriptionImagesLinks: IDescription[];
}

export interface IAllData {
  siteData: ISiteData;
}
