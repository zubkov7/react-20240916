import classnames from "classnames";
import styles from "./button.module.css";
import { useTheme } from "../theme-context/use-theme";

export const Button = ({
  onClick,
  text,
  sizeViewVariant = "default",
  isActive,
  className,
}) => {
  const { theme } = useTheme();

  return (
    <button
      onClick={onClick}
      disabled={isActive}
      className={classnames(styles.button, className, {
        [styles.default]: sizeViewVariant === "default",
        [styles.xl]: sizeViewVariant === "xl",
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
    >
      {text}
    </button>
  );
};
