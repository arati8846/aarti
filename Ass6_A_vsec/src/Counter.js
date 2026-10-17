import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="component">
      <h2>Counter</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;