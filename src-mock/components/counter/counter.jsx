import { useEffect } from "react";
import { useCount } from "./use-counter";

export const Counter = () => {
  const { value, increment, decrement } = useCount();

  useEffect(() => {
    console.log(value);
  }, [value]);

  useEffect(() => {
    const onScroll = () => console.log("scroll");
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    // sendAnalytics on mount

    return () => {
      // sendAnalytics on unmount
    };
  }, []);

  return (
    <div>
      <button onClick={increment}>+</button>
      {value}
      <button onClick={decrement}>-</button>
    </div>
  );
};
