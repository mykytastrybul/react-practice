import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import CategoriesProvider from "./context/CategoriesProvider";
import LoaderProvider from "./context/LoaderProvider";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LoaderProvider>
        <CategoriesProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CategoriesProvider>
      </LoaderProvider>
    </Provider>
  </React.StrictMode>
);
