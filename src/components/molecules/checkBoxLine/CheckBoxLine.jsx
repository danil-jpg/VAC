import React from "react";
import CheckBox from "../../atoms/checkBox/CheckBox";
import s from "./checkBoxLine.module.scss";

const CheckBoxLine = ({ state = false, img, text }) => {
  return (
    <div className={s.checkLine}>
      <CheckBox state={state} />
      <div className={s.checkLineRight}>
        <img className="" src={img} />
        <p className={s.text}>{text}</p>
      </div>
    </div>
  );
};

export default CheckBoxLine;
