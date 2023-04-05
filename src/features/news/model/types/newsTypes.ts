import { StatusMarkerProps } from "shared";

export interface INews {
  header: string;
  description?: string;
  date?: string;
  imageUrl?: string;
  statuses?: StatusMarkerProps[];
  id: string;
  text?: string;
}

export interface ResponseApiNews {
  status: string;
  data: INews[];
}
