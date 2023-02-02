export interface IDescription {
  name: string;
  isCurrent: boolean;
}

export interface DescriprionsArray {
  descriptions: IDescription[];
}

export interface IDescriptionsAction {
  payload: IDescription[];
}
