import { HeadphoneTab } from "../headphone-tab/headphone-tab";
import { Outlet } from "react-router-dom";
import { useGetHeadphonesQuery } from "../../redux/services/api/api";

export const HeadphonesPage = ({ title }) => {
  const { data, isLoading, isError } = useGetHeadphonesQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return "loading";
  }

  if (isError) {
    return "error";
  }

  if (!data?.length) {
    return null;
  }

  return (
    <div>
      <h1>{title}</h1>

      {data.map(({ name, id }) => (
        <HeadphoneTab key={id} id={id} name={name} />
      ))}

      <Outlet />
    </div>
  );
};
