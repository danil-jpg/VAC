import React from "react";
import CheckBox from "../../atoms/checkBox/CheckBox";
import s from "./checkBox.module.scss";

const CheckBoxTextLine = ({ text }) => {
  return (
    <div className={s.line}>
      <CheckBox state={true} />
      <p>{text}</p>
    </div>
  );
};

export default CheckBoxTextLine;
