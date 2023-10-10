import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./app/store";
import { FavoriteContextProvider } from "./context/FavoriteContext";
import { SidebarProvider } from "./context/SideBarContext";
import { FavoriteMatchContextProvider } from "./context/FavoriteMatchContext";
import { DarkModeProvider } from "./context/DarkModeContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <FavoriteMatchContextProvider>
        <SidebarProvider>
          <FavoriteContextProvider>
            <Provider store={store}>
              <App />
            </Provider>
          </FavoriteContextProvider>
        </SidebarProvider>
      </FavoriteMatchContextProvider>
    </DarkModeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
