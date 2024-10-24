import { useGetHeadphoneByIdQuery } from "../../redux/services/api/api";
import { HeadphoneCounter } from "../headphone-counter/headphone-counter";

export const CartItem = ({ id, amount }) => {
  const { data } = useGetHeadphoneByIdQuery(id);

  const { name } = data || {};

  if (!name) {
    return null;
  }

  return (
    <div>
      <div>
        {name} - {amount}
      </div>
      <HeadphoneCounter id={id} />
    </div>
  );
};
