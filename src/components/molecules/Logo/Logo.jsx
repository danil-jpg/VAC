import React, { useEffect } from "react";
import s from "./logo.module.scss";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/img/components/logo/logo img.webp";

const Logo = ({ setIsQuiz = false }) => {
  const navigation = useNavigate();

  return (
    <div
      className={s.logoWr}
      onClick={() => {
        navigation("/");
        setIsQuiz(false);
      }}>
      <img src={img}></img>
      <p>VAC</p>
    </div>
  );
};

export default Logo;
