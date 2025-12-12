import { createBrowserRouter } from "react-router";

import { Layout } from "./components/layout";
import { Home, Pricing, About, Contact } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "pricing", Component: Pricing },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);
