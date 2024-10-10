import { useSelector } from "react-redux";
import { Tab } from "../tab/tab";
import { selectHeadphoneById } from "../../redux/entities/headphones";

export const HeadphoneTab = ({ id, onClick, isActive }) => {
  const headphone = useSelector((state) => selectHeadphoneById(state, id));

  if (!headphone) {
    return null;
  }

  return <Tab title={headphone.name} onClick={onClick} isActive={isActive} />;
};
