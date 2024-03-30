import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <main className="dark text-foreground bg-[#000214]">
          <App />
        </main>
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
);
