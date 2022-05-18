import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import CategoriesProvider from "./context/CategoriesProvider";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import LoaderWrapper from "./components/LoaderWrapper/LoaderWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <CategoriesProvider>
      <BrowserRouter>
        <LoaderWrapper>
          <App />
        </LoaderWrapper>
      </BrowserRouter>
    </CategoriesProvider>
  </Provider>
  // </React.StrictMode>
);
