import { Cart } from "../cart/cart";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";
import { ThemeButton } from "../theme-button/theme-button";

export const Layout = ({ children, sidebard, beforeHeader }) => {
  return (
    <div>
      <ProgressBar />
      <ThemeButton />
      {beforeHeader}
      <Header />
      {sidebard}
      {children}
      <Cart />
      <Footer />
    </div>
  );
};
