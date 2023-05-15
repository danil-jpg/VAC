import scss from "./buttonSolid.module.scss";
import React from "react";

const ButtonSolid = ({ className, text = "def", onClick, ...props }) => {
  return (
    <button className={`${scss.btn} ${className}`} onClick={onClick} props={props}>
      {text}
    </button>
  );
};

export default ButtonSolid;
