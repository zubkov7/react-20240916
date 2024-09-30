import { useEffect } from "react";
import { Counter } from "../counter/counter";
import { useCount } from "./use-count";

export const HeadphoneCounter = () => {
  const { value, callbacks } = useCount();

  useEffect(() => {
    callbacks.increment();
  }, [callbacks]);

  return (
    <Counter
      value={value}
      increment={callbacks.increment}
      decrement={callbacks.decrement}
    />
  );
};
