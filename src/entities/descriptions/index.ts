export { DESCRIPTION_COUNT_LENGTH } from './model/constants/descriptionConstants';
export { descriptionReducer } from './model/slice/descriptionSlice';
export { descriptionsActions } from './model/slice/descriptionSlice';
export { Description } from './ui/Description/Description';
export { ButtonExpand } from './ui/ButtonExpand/ButtonExpand';
export { Carousel } from './ui/Carousel/Carousel';
export { getDescriptionSelector } from './model/selectors/descriptionsSelector';
export {
  IDescription,
  DescriptionsArray,
  IDescriptionsAction,
} from './model/types/descriptionsTypes';
