import { IContactsCard, IPopupCoordinates } from "entities/ContactsCard/model/types/ContactsCardTypes";
import { IDescription } from "entities/Description/modal/types/descriptionsTypes";
import { IProducts } from "types/types";

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
