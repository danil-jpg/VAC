import React, { useState } from "react";
import s from "./input.module.scss";

const InputMail = ({ placeholder = "", className = "", onChange, ...props }) => {
  const [input, setInput] = useState("");

  return (
    <input
      placeholder={placeholder}
      className={`${className} ${s.input}`}
      onChange={(e) => setInput(e.target.value)}
      value={input}
      props={props}
    />
  );
};

export default InputMail;
