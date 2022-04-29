import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Provider as ReduxProvider } from "react-redux";
import { App } from "ui/App";
import { store } from "state";
import theme, { GlobalStyle } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>
);
