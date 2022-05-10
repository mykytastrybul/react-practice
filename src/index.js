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
        <App />
      </CategoriesProvider>
    </LoaderProvider>
  </React.StrictMode>
);
