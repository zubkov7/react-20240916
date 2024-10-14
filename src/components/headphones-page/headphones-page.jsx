import { useDispatch, useSelector } from "react-redux";
import { HeadphoneTab } from "../headphone-tab/headphone-tab";
import {
  selectHeadphonesIds,
  selectHeadphonesRequestStatus,
} from "../../redux/entities/headphones";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getHeadphones } from "../../redux/entities/headphones/get-headphones";

export const HeadphonesPage = ({ title }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getHeadphones({ onError: () => navigate({ to: "/about" }) }));
  }, [dispatch, navigate]);

  const headphonesIds = useSelector(selectHeadphonesIds);
  const requestStatus = useSelector(selectHeadphonesRequestStatus);

  if (requestStatus === "idle" || requestStatus === "pending") {
    return "loading";
  }

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
