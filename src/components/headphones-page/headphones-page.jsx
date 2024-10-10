import { useSelector } from "react-redux";
import { HeadphoneTab } from "../headphone-tab/headphone-tab";
import { selectHeadphonesIds } from "../../redux/entities/headphones";
import { Outlet } from "react-router-dom";

export const HeadphonesPage = ({ title }) => {
  const headphonesIds = useSelector(selectHeadphonesIds);

  return (
    <div>
      <h1>{title}</h1>

      {headphonesIds.map((id) => (
        <HeadphoneTab key={id} id={id} />
      ))}

      <Outlet />
    </div>
  );
};
