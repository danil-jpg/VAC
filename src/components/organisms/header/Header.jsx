import React from "react";
import Logo from "../../molecules/Logo/Logo.jsx";
import s from "./header.module.scss";
import ButtonSolid from "../../atoms/Buttons/ButtonSolid/ButtonSolid.jsx";
import ButtonLiner from "../../atoms/Buttons/ButtonLiner/ButtonLiner.jsx";
import { Icon } from "../../Utils/Icon";

const Header = () => {
  return (
    <header className={`${s.header} container`}>
      <Logo />
      <ButtonLiner text="Inventory" className={`${s.btnLin}`} />
      <ButtonSolid text="Request a car" className={`${s.btnSol}`} />
      <Icon id={"burger"} className={`${s.burger}`}></Icon>
    </header>
  );
};

export default Header;
