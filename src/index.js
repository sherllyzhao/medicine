import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/es/integration/react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import "./index.css";
import "./element-ui.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

store.subscribe(() => {
  console.log(store.getState());
});

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RouterProvider router={routes} />
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
