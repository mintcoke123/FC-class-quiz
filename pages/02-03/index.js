import { useState } from "react";

export default function quiz02_3() {
  const [num, setNum] = useState("000000");

  function numChange() {
    setNum("123456");
  }

  return (
    <div>
      <div>{num}</div>
      <button onClick={numChange}>인증번호 전송</button>
    </div>
  );
}
