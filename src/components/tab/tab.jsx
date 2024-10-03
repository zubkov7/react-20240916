import { Button } from "../button/button";

import styles from "./tab.module.css";

export const Tab = ({ title, onClick, isActive }) => {
  return (
    <Button
      isActive={isActive}
      onClick={onClick}
      text={title}
      className={styles.button}
    />
  );
};
