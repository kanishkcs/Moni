import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./approuter";
import "react-datepicker/dist/react-datepicker.css";

//fontawesome
import "./assets/icons/fontawesome/css/all.css";
import "./assets/icons/fontawesome/css/all.min.css";
import "./assets/icons/fontawesome/css/fontawesome.min.css";

// icons
import "./assets/icons/feather/feather.css";
import "./assets/js/feather.min.js";

// React custom style sheet
import "../src/index.css";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//style
import "./assets/css/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <AppRouter />
  </div>
);
