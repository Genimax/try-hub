import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store/store";
import { Provider } from "react-redux";
import App from "./components/App";
import "./styles/main.scss";

import "./utils/18n.js";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
