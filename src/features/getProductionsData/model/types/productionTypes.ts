import { CardProps } from "widgets/Card";
import { CheckboxListWrapperProps } from "widgets/ConstructorCard";

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

export interface ResponseApiProductions {
  status: string;
  data: IProductions;
}

export type IngredientsType = Pick<CheckboxListWrapperProps, 'description' | 'header' | 'stepNumber' | 'image' | 'contentHeader'>

export interface IPokeIngredients {
  basis: IngredientsType;
  protein: IngredientsType;
  sauce: IngredientsType;
  productsType: IngredientsType;
  topping: IngredientsType;
  crunch: IngredientsType;
  additionally: IngredientsType;
  fillers: IngredientsType;
}

export interface IIngredients {
  pokeIngredients: IPokeIngredients;
}

export interface ResponseApiIngredients {
  status: string;
  data: IPokeIngredients;
}
