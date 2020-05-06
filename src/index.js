import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";

import App from "./views/App";

import light from "./styles/themes/light";

ReactDOM.render(
  <ThemeProvider theme={light}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
