import React from "react";
import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import AppRouter from "./approuter.jsx";
import "react-datepicker/dist/react-datepicker.css";

import "./assets/icons/fontawesome/css/all.css";
import "./assets/icons/fontawesome/css/all.min.css";
import "./assets/icons/fontawesome/css/fontawesome.min.css";

import "./assets/icons/feather/feather.css";
import "./assets/js/feather.min.js";

import "../src/index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//style
import "./assets/css/style.css";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
