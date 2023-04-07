export interface IDescription {
  name: string;
  isCurrent: boolean;
}

export interface DescriptionsArray {
  descriptions: IDescription[];
}

export interface IDescriptionsAction {
  payload: IDescription[];
}
