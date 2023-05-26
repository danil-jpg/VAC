import React from "react";
import ModalsTemplate from "../modalTemp/ModalTemplate";
import s from "./modalMenu.module.scss";
import { Navigate, useNavigate } from "react-router-dom";

const ModalMenu = ({ menu, setMenu }) => {
  const navigation = useNavigate();

  const Res = () => {
    return (
      <div>
        <ul className={s.ul}>
          <li className={s.li}>Contact us</li>
          <li className={s.li}>About VAC</li>
          <li
            className={s.li}
            onClick={() => {
              navigation("Loan");
              setMenu(false);
            }}>
            Loan Rates
          </li>
          <li
            className={s.li}
            onClick={() => {
              navigation("Video");
              setMenu(false);
            }}>
            Video
          </li>
          <li
            className={s.li}
            onClick={() => {
              navigation("Blog");
              setMenu(false);
            }}>
            Blog
          </li>
          <li
            className={s.li}
            onClick={() => {
              navigation("Calculator");
              setMenu(false);
            }}>
            Calculate
          </li>
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
