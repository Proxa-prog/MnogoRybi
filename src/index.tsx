import * as React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from "react-dom/client";

import { App } from './app/App';
import { store } from './app/store';

const root  = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
