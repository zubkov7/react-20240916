import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones";
import { NavLink, useNavigate } from "react-router-dom";
import { Tab } from "../tab/tab";

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
        className={({ isActive }) => isActive && "someClass"}
        referrer='/'
        target='_blank'
      >
        {headphone.name}
      </NavLink>
      <Tab title={headphone.name} onClick={() => navigate(id)} />;
    </>
  );
};
