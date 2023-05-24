import React from "react";
import ButtonSolid from "../../atoms/Buttons/ButtonSolid/ButtonSolid";
import { useNavigate } from "react-router-dom";
import s from "./404.module.scss";

const E400 = () => {
  const navigation = useNavigate();

  return (
    <div className={s.error}>
      <img src={require("../../../assets/img/components/404/Sedan icon.svg")} />
      <p className={s.errorTitle}>404 page</p>
      <p className={s.errorText}>Page not found or such pages do not exist.</p>
      <ButtonSolid text="Go home" className={s.btn} onClick={() => navigation("/")} />
    </div>
  );
};

export default E400;
