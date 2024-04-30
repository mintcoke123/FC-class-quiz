import axios from "axios";

export default function test() {
  const onClickApi = async () => {
    const result = await axios.get("https://koreanjson.com/users/1");
    console.log(result);
  };

  return <button onClick={onClickApi}>api</button>;
}
