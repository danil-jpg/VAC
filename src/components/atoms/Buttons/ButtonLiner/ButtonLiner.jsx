import s from "./buttonLiner.module.scss";
import React from "react";

const ButtonSolid = ({ className, text = "def", onClick, ...props }) => {
  return (
    <button className={`${s.btn} ${className}`} onClick={onClick} props={props}>
      {text}
    </button>
  );
};

export default ButtonSolid;
