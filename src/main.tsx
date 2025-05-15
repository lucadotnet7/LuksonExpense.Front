import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/globals.scss";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { router } from "./routes.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
);
