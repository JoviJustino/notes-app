import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./pages/styles/Global";

 import { Details } from "./pages/Details/Index";
import { Home } from "./pages/Home/index";
import theme from "./pages/styles/theme";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SingUp";
import { New } from "./pages/New";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <New />
    </ThemeProvider>
  </React.StrictMode>
);
