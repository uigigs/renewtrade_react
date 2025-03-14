import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//  CSS import here
import "bootstrap/dist/css/bootstrap.css";
import "./assets/style/style.css";
import "./assets/style/dashboard-style.css";
import "./assets/style/responsive.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
