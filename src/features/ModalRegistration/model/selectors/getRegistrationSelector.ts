import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const registration = (state: RootState) => state.registration.registration;

export const getRegistrationSelector = createSelector(
  [ registration ],
  (isRegistration) => {

    return isRegistration;
  }
);
