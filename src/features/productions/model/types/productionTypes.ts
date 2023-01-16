import { CardProps } from "widgets/ui/Card/Card";

export interface IProductionsAction {
  payload: CardProps[];
}

export interface IProductions {
  poke: CardProps[];
  rolls: CardProps[];
  wok: CardProps[];
  curry: CardProps[];
  sandwich: CardProps[];
  deserts: CardProps[];
  beverages: CardProps[];
}

export interface IProductionsArray {
  productions: IProductions;
}
