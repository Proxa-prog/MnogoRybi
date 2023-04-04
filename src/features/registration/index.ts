export { getRegistrationSelector } from './model/selectors/getRegistrationSelector';
export {
  registrationActions,
  registrationReducer,
} from './model/slice/registrationReducer';
export {
  IRegistration,
  IDescriptionsAction,
} from './model/types/registrationTypes';
export { IConfirmation } from './model/types/confirmationTypes';
export { openConfirmationSelector } from './model/selectors/openConfirmationSelector';
export {
  confirmationReducer,
  confirmationActions,
} from './model/slice/confirmationReducer';
export { default as Confirmation } from './ui/Confirmation/Confirmation';
export { default as ModalRegistration } from './ui/ModalRegistration/ModalRegistration';

