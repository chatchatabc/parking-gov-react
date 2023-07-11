import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/globals.css";
import MainLayout from "./layouts/MainLayout";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function RouterManager() {
  return <RouterProvider router={router} />;
}

export default RouterManager;
