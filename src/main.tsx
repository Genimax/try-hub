import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles/main.scss";

import "./utils/18n.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
    {/* </Provider> */}
  </React.StrictMode>
);
