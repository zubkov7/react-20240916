import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";
import { ToggleThemeButton } from "../toggle-theme-button/toggle-theme-button";

export const Layout = ({ children }) => {
  return (
    <div>
      <ProgressBar viewVariant='accent' />
      <ToggleThemeButton />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
