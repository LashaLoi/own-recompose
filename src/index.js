import React from "react";
import { render } from "react-dom";

import App from "./App";

import "./index.css";

const root = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

render(root, document.getElementById("root"));
