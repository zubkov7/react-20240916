import { useState, useCallback, useMemo } from "react";

export const useCount = () => {
  const [value, setValue] = useState(0);

  const increment = useCallback(() => {
    setValue((currentValue) => currentValue + 1);
  }, []);

  const decrement = useCallback(
    () => setValue((currentValue) => currentValue - 1),
    []
  );

  const callbacks = useMemo(
    () => ({
      increment,
      decrement,
    }),
    [increment, decrement]
  );

  return {
    value,
    callbacks,
  };
};
