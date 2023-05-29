import React from "react";
import s from "./logo.module.scss";
import { Navigate, useNavigate } from "react-router-dom";

const Logo = ({ setIsQuiz = false }) => {
  const navigation = useNavigate();
  setIsQuiz(false);

  return (
    <div className={s.logoWr} onClick={() => navigation("/")}>
      <img src={require("../../../assets/img/components/logo/logo img.png")}></img>
      <p>VAC</p>
    </div>
  );
};

export default Logo;
