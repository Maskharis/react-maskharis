import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "../pages";

import CreateProduct from "../pages/create-product";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/create-product",
      element: <CreateProduct />,
    },
  ]);

  return <RouterProvider router={router} />;
}
