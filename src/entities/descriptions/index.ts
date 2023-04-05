export { DESCRIPTION_COUNT_LENGTH } from './model/constants/descriptionConstants';
export { descriptionReducer } from './model/slice/descriptionSlice';
export { descriptionsActions } from './model/slice/descriptionSlice';
export { Description } from './ui/Description/Description';
export { getDescriptionSelector } from './model/selectors/descriptionsSelector';
export {
  IDescription,
  DescriptionsArray,
  IDescriptionsAction,
} from './model/types/descriptionsTypes';
