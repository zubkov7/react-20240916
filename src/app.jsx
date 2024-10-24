import { Layout } from "./components/layout/layout";

import "./app.css";
import { ThemeContextProvider } from "./components/theme-context/theme-context";
import { AuthContextProvider } from "./components/auth-context/auth-context";
import { StoreProvider } from "./redux/provider";

export const App = ({ children }) => {
  return (
    <StoreProvider>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Layout
            sidebard={<div>sidebar</div>}
            renderItem={() => <div>item</div>}
          >
            {children}
          </Layout>
        </AuthContextProvider>
      </ThemeContextProvider>
    </StoreProvider>
  );
};
