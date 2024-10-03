import { useCallback, useState } from "react";
import { ThemeContext } from ".";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      if (current === "light") {
        return "dark";
      } else {
        return "light";
      }
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "light", toggleTheme }}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeContext.Provider>
  );
};
