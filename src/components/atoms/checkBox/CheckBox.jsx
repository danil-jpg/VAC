import React, { useState } from "react";
import s from "./checkBox.module.scss";

const CheckBox = ({ state = false }) => {
  const [checked, setCheck] = useState(state);

  return (
    <div
      className={`${s.checkBoxWr} ${checked ? s.checkActive : ""}`}
      onClick={() => {
        setCheck(!checked);
      }}></div>
  );
};

export default CheckBox;
