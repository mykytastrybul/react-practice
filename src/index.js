import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import CategoriesProvider from "./context/CategoriesProvider";
import LoaderProvider from "./context/LoaderProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoaderProvider>
      <CategoriesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CategoriesProvider>
    </LoaderProvider>
  </React.StrictMode>
);
