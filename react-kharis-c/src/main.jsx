import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./utils/states/redux/store";
import React from "react";

import App from "./routes";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
