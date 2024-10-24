import { Counter } from "../counter/counter";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectAmountById,
} from "../../redux/ui/cart";

export const HeadphoneCounter = ({ id }) => {
  const amount = useSelector((state) => selectAmountById(state, id));

  const dispatch = useDispatch();

  const increment = () => dispatch(addToCart(id));
  const decrement = () => dispatch(removeFromCart(id));

  return <Counter value={amount} increment={increment} decrement={decrement} />;
};
