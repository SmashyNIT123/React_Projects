import "./styles.css";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  function incraese() {
    setCount((count) => count + 1);
  }
  function decrease() {
    setCount((count) => count - 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <div>
      <h1>Counter App</h1>
      <p id="value">{count}</p>
      <button onClick={incraese}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
