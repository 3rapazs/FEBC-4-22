import { ReactNode, useState } from "react";

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
  handleIncreaseCount: () => void;
  handleDecreaseCount: () => void;
};

function Counter({
  setCount,
  children,
  handleIncreaseCount,
  handleDecreaseCount,
}: CounterProps) {
  return (
    <>
      <div>{children}</div>
      <button onClick={handleIncreaseCount}>Increase</button>
      <button onClick={handleDecreaseCount}>Decrease</button>

      if (true) {
        <p>111</p>
      }
      else  {
   <p>222</p>
      }
    </>
  );
}

export default Counter;