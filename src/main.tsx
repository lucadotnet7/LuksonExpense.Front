import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/globals.scss";
import { Outlet } from "react-router";
import Layout from "./pages/shared/Layout.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Layout>
        <Outlet />
      </Layout>
    </Provider>
  </StrictMode>
);
