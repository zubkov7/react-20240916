import { Outlet } from "react-router-dom";
import { Cart } from "../cart/cart";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";
import { ThemeButton } from "../theme-button/theme-button";

export const Layout = () => {
  
  return (
    <div>
      <ProgressBar />
      <ThemeButton />
      <Header />
      <Outlet />
      <Cart />
      <Footer />
    </div>
  );
};
