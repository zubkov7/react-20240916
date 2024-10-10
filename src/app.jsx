import { HeadphonesPage } from "./components/headphones-page/headphones-page";
import { Layout } from "./components/layout/layout";

import "./app.css";
import { ThemeContextProvider } from "./components/theme-context/theme-context";
import { AuthContextProvider } from "./components/auth-context/auth-context";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { HeadphonePage } from "./components/headphone-page/headphone-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "headphone",
        element: <HeadphonesPage title='headphones app' />,
        children: [
          {
            path: ":headphoneId",
            element: <HeadphonePage />,
          },
        ],
      },
      {
        path: "about",
        element: <div>about</div>,
      },
    ],
  },
  {
    path: "blocked",
    element: <Navigate to='/' />,
  },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <RouterProvider router={router}>
            <Layout>
              <HeadphonesPage title='headphones app' />
            </Layout>
          </RouterProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
