import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/headphones";
import { Tab } from "../tab/tab";

export const HeadphoneTab = ({ id, onClick, isActive }) => {
  const headphone = useSelector((state) => selectHeadphoneById(state, id));

  if (!headphone) {
    return null;
  }

  return <Tab title={headphone.name} onClick={onClick} isActive={isActive} />;
};
