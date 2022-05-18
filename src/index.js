import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { store } from "./store/store";
import { UserProvider } from "./contexts/user.context";
import { CartProvider } from "./contexts/cart.context";
import { Provider } from "react-redux";
import { CategoriesProvider } from "./contexts/categories.context";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
