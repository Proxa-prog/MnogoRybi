import { ButtonColor, StatusMarkerProps } from "shared";

export interface CardProps {
  className?: string;
  imageWrapperClassName?: string;
  imageUrl?: string;
  header?: string;
  description?: string;
  cost?: number;
  previousCost?: number;
  statuses?: StatusMarkerProps[];
  isInfo?: boolean;
  buttonText?: string;
  buttonColor?: ButtonColor;
  isGrayTheme?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  id?: string;
}
