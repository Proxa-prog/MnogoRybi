import { createSlice } from "@reduxjs/toolkit";
import { DESCRIPTION_IMAGES_LINKS } from "entities/constants/constants";

export interface IDescription {
  name: string;
  isCurrent: boolean;
}

export interface DescriprionsArray {
  descriptions: IDescription[];
}

export enum DescriptionAction {
  CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION',
}

export interface IDescriptionsAction {
  type: DescriptionAction;
  payload: IDescription[];
}

const initialState: DescriprionsArray =  {
  descriptions: DESCRIPTION_IMAGES_LINKS,
};

export const descriptionSlice = createSlice({
  name: 'descriptions',
  initialState,
  reducers: {
    changeDescription: (state, action) => {
      state.descriptions = action.payload
    },
  },
})

export const { changeDescription } = descriptionSlice.actions;

export default descriptionSlice.reducer;
