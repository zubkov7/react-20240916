import { useEffect, useRef } from "react";

export const Counter = ({ value, increment, decrement }) => {
  const intervalRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(increment, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [increment]);

  const stopInterval = () => clearInterval(intervalRef.current);

  useEffect(() => {
    // buttonRef.current.click();
  }, []);

  return (
    <div>
      <button onClick={increment}>+</button>
      {value}
      <button onClick={decrement}>-</button>
      <button ref={buttonRef} onClick={stopInterval}>
        stop
      </button>
    </div>
  );
};
