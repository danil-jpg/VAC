import React from "react";
import ModalsTemplate from "../modalTemp/ModalTemplate";
import s from "./modalMenu.module.scss";

const ModalMenu = ({ menu, setMenu }) => {
  const Res = () => {
    return (
      <div>
        <ul className={s.ul}>
          <li className={s.li}>Contact us</li>
          <li className={s.li}>About VAC</li>
          <li className={s.li}>Loan Rates</li>
          <li className={s.li}>Video</li>
          <li className={s.li}>Blog</li>
          <li className={s.li}>Calculate</li>
        </ul>
        <div className={s.menuSocials}>
          <div className={s.menuSocial}>
            <img src={require("../../../assets/img/components/socials/fWhite.svg")} />
          </div>
          <div className={s.menuSocial}>
            <img src={require("../../../assets/img/components/socials/fWhite.svg")} />
          </div>
          <div className={s.menuSocial}>
            <img src={require("../../../assets/img/components/socials/fWhite.svg")} />
          </div>
        </div>
      </div>
    );
  };

  return <ModalsTemplate className={""} visible={menu} setVisible={setMenu} children={<Res />} />;
};

export default ModalMenu;
