import { useState } from "react";

export default function quiz02_4() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onChangePasswordCheck(event) {
    setPasswordCheck(event.target.value);
  }

  function onClickSignup(event) {
    if (email.includes("@") === false) {
      setEmailError("이메일이 올바르지 않습니다");
    } else {
      setEmailError("");
    }

    if (password !== passwordCheck) {
      setPasswordError("두 비밀번호가 다릅니다");
    } else {
      setPasswordError("");
    }

    if (email.includes("@") && password === passwordCheck) {
      alert("회원가입을 축하합니다.");
    }
  }

  return (
    <div>
      <div>이메일</div>
      <input type="text" onChange={onChangeEmail} />
      <div>{emailError}</div>
      <div>비밀번호</div>
      <input type="text" onChange={onChangePassword} />
      <div>비밀번호 확인</div>
      <input type="text" onChange={onChangePasswordCheck} />
      <div>{passwordError}</div>
      <button onClick={onClickSignup}>가입하기</button>
    </div>
  );
}
