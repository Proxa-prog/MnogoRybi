import { StatusMarkerProps } from "shared/ui/StatusMarker/StatusMarker";

export interface IOpenProductsCard {
  isOpen: boolean;
  imageUrl: string | undefined;
  header?: string;
  description?: string;
  cost?: string;
  statuses?: StatusMarkerProps[];
  isPreview?: boolean;
}

export interface OpenProductsCardArray {
  openProductsCard: IOpenProductsCard;
}

export interface IDescriptionsAction {
  payload: IOpenProductsCard[];
}
