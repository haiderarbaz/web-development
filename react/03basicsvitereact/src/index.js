import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MyApp from "./MyApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <MyApp />
  </React.StrictMode>
);
