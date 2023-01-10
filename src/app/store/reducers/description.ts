import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  descriptions: [],
};

export const descriptionSlice = createSlice({
  name: 'descriptions',
  initialState,
  reducers: {
    changeDescription: (state, action: PayloadAction<IDescription[]>) => {
      state.descriptions = action.payload
    },
  },
});

export const { changeDescription } = descriptionSlice.actions;

export default descriptionSlice.reducer;
