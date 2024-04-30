import { useState } from "react";

export default function quiz02_1() {
  const [buttonText, setButtonText] = useState("안녕하세요");

  function onClickButton() {
    setButtonText("반갑습니다.");
  }

  return (
    <div>
      <button onClick={onClickButton}>{buttonText}</button>
    </div>
  );
}
