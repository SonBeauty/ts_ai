import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/pages/homepage/Homepage";
import Dashboardpage from "./routes/pages/dashboardPage/Dashboardpage";
import ChatPage from "./routes/pages/chatPage/ChatPage";
import RootLayout from "./layouts/RootLayout";
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout";
import SignUpPage from "./routes/pages/signUpPage/SignUpPage";
import SignInPage from "./routes/pages/signInPage/SignInPage";
import { UserProvider } from "./context/UserContext";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            children: [
              {
                path: "/dashboard",
                element: <Dashboardpage />,
              },
              {
                path: "/dashboard/chats/:id",
                element: <ChatPage />,
              },
            ],
          },
        ],
      },
      {
        path: "/signUp",
        element: <SignUpPage />,
      },
      {
        path: "/login",
        element: <SignInPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
