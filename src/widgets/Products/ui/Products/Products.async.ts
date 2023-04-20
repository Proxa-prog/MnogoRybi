import { lazy } from 'react';

const RegisterPageAsync = lazy(() =>
  import("./Products").then((module) => ({
    default: module.Products,
  }))
);

export default RegisterPageAsync;
