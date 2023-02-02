import { StatusMarkerProps } from "shared/ui/StatusMarker/StatusMarker";

export interface INews {
  header: string;
  description?: string;
  date?: string;
  imageUrl?: string;
  statuses?: StatusMarkerProps[];
  id: string;
  text?: string;
}
