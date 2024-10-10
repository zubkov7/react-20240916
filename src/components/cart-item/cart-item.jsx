import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones";
import { HeadphoneCounter } from "../headphone-counter/headphone-counter";

export const CartItem = ({ id, amount }) => {
  const { name } = useSelector((state) => selectHeadphoneById(state, id)) || {};

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
