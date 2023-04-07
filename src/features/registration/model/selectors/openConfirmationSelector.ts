import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const confirmation = (state: RootState) => state.confirmation.confirmation;

export const openConfirmationSelector = createSelector(
  [ confirmation ],
  (confirmationState) => {

    return confirmationState;
  }
);
