import React from "react";
import s from "./logo.module.scss";

const Logo = () => {
  return (
    <div className={s.logoWr}>
      <img src={require("../../../assets/img/components/logo/logo img.png")}></img>
      <p>VAC</p>
    </div>
  );
};

export default Logo;
