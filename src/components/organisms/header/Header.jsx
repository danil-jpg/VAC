import React from "react";
import Logo from "../../molecules/Logo/Logo.jsx";
import s from "./header.module.scss";
import ButtonSolid from "../../atoms/Buttons/ButtonSolid/ButtonSolid.jsx";
import ButtonLiner from "../../atoms/Buttons/ButtonLiner/ButtonLiner.jsx";
import { Icon } from "../../Utils/Icon";
import { useNavigate } from "react-router-dom";

const Header = ({ setMenu, setIsQuiz }) => {
  const navigation = useNavigate();
  return (
    <header className={`${s.header} container`}>
      <Logo setIsQuiz={setIsQuiz} />
      <ButtonLiner text="Inventory" className={`${s.btnLin}`} />
      <ButtonSolid
        onClick={() => navigation("Quiz/budget")}
        text="Request a car"
        className={`${s.btnSol}`}
      />
      <Icon id={"burger"} className={`${s.burger}`} onClick={() => setMenu(true)}></Icon>
    </header>
  );
};

export default Header;
