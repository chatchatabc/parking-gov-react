import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/globals.css";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
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
