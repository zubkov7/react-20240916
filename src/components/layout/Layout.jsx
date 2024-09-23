import { Count } from "../count/Count";
import { useCount } from "../count/use-count";

export const Layout = ({ children }) => {
  const { value, increase, decrease } = useCount();

  return (
    <div>
      <div>
        <button onClick={increase}>+</button>
        {value}
        <button onClick={decrease}>-</button>
      </div>
      <Count />
      <header>header</header>
      {children}
      <footer>footer</footer>
    </div>
  );
};
