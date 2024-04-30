import { useState } from "react";

export default function quiz02_2() {
  const [count, setCount] = useState(0);

  function countUp() {
    setCount(Number(count + 1));
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={countUp}>카운트증가</button>
    </div>
  );
}
