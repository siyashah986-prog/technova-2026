import { useState } from "react";

function State() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>State Example</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default State;