import { AppDispatch, RootState } from "app/store";

export interface ThunkConfig<T> {
  rejectValue: T;
  state: RootState;
  dispatch: AppDispatch;
}
