import { useState } from "react";
import "./InputShortener.css";

const InputShortener = (props) => {
  let { onSetInputValue } = props;
  const [value, setValue] = useState("");

  const handleClick = () => {
    onSetInputValue(value);
    setValue("");
  };

  const handleOnChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="inputContainer">
      <h1>
        URL <span>Shortener</span>
      </h1>
      <div>
        <input
          type="text"
          placeholder="Paste a link to shorten"
          value={value}
          onChange={handleOnChangeInput}
        />
        <button onClick={handleClick}>Shorten</button>
      </div>
    </div>
  );
};
export default InputShortener;
