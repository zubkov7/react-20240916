import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones";
import { NavLink, useNavigate } from "react-router-dom";
import { Tab } from "../tab/tab";

import styles from "./headphone-tab.module.css";
import classNames from "classnames";

export const HeadphoneTab = ({ id }) => {
  const headphone = useSelector((state) => selectHeadphoneById(state, id));

  const navigate = useNavigate();

  if (!headphone) {
    return null;
  }

  return (
    <>
      <NavLink
        to={id}
        className={({ isActive }) => classNames(isActive && styles.activeLink)}
        referrer='/'
        target='_blank'
      >
        {headphone.name}
      </NavLink>
      <Tab title={headphone.name} onClick={() => navigate(id)} />;
    </>
  );
};
