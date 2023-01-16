import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const confirmation = (state: RootState) => state.configmation.confirmation;

export const openConfirmationSelector = createSelector(
  [ confirmation ],
  (confirmationState) => {

    return confirmationState;
  }
);
