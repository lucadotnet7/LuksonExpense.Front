import { createBrowserRouter } from "react-router";
import Layout from "./pages/shared/Layout";
import Home from "./pages/Home/Home";
import Expenses from "./pages/Expenses/Expenses";
import Budgets from "./pages/Budgets/Budgets";

export const router = createBrowserRouter([
  { 
    path: "/", Component: Layout, children: 
    [
      { index: true, Component: Home },
      { path: "expenses", Component: Expenses },
      { path: "/budgets", Component: Budgets}
    ]
  },
]);