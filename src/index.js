import React from "react";
import ReactDOM from "react-dom/client";
import Modal from "react-modal";
import { Provider as ReduxProvider } from "react-redux";
import { App } from "ui/App";
import { ModalProvider } from "services/modal";
import { store } from "state";
import { GlobalStyle, AppTheme } from "./theme";

const rootEl = document.getElementById("root");
Modal.setAppElement(rootEl);

const root = ReactDOM.createRoot(rootEl);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <AppTheme>
        <GlobalStyle />
        <ModalProvider>
          <App />
        </ModalProvider>
      </AppTheme>
    </ReduxProvider>
  </React.StrictMode>
);
