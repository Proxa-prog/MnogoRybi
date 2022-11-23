import { DESCRIPTION_IMAGES_LINKS } from "entities/constants/constants";

export interface IDescription {
  name: string;
  isCurrent: boolean;
}

interface DescriprionsArray {
  descriptions: IDescription[];
}

enum DescriptionAction {
  CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION',
}

interface IDescriptionsAction {
  type: DescriptionAction;
  payload: IDescription[];
}

const initialState: DescriprionsArray =  {
  descriptions: DESCRIPTION_IMAGES_LINKS,
};

export const descriptionReducer = (state = initialState, action: IDescriptionsAction): DescriprionsArray => {
  switch (action.type) {
    case DescriptionAction.CHANGE_DESCRIPTION:
      return { descriptions: action.payload };
    default:
      return state;
  }
};

export const changeDescription = (payload: IDescription[]) => ({
  type: DescriptionAction.CHANGE_DESCRIPTION,
  payload,
});
