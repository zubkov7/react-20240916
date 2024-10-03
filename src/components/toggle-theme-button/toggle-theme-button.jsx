import { Button } from "../button/button";
import { useTheme } from "../theme-context/use-theme";

export const ToggleThemeButton = () => {
  const { toggleTheme } = useTheme();

  return <Button onClick={toggleTheme} text={"Toggle theme"} />;
};
