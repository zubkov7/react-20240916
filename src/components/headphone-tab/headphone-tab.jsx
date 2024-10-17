import { useNavigate } from "react-router-dom";
import { Tab } from "../tab/tab";

export const HeadphoneTab = ({ id, name }) => {
  const navigate = useNavigate();

  return <Tab title={name} onClick={() => navigate(id)} />;
};
