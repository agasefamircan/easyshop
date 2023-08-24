import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import App from "./App.js";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);