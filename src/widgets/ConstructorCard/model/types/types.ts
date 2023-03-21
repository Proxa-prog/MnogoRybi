import {IProducts} from "../../../../entities/basket";

type IProductsNew = Omit<IProducts, "id" | "isCurrent">;

interface IIngredientsCount {
  count: number,
  name: string,
}

export interface IFiltersIngredients extends IProductsNew {
  ingredients: IIngredientsCount[];
}
