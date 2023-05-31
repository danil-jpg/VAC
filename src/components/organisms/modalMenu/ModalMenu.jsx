import React from "react";
import ModalsTemplate from "../modalTemp/ModalTemplate";
import s from "./modalMenu.module.scss";
import { Navigate, useNavigate } from "react-router-dom";
import ModalContact from "../modalContact/ModalContact";

const ModalMenu = ({ menu, setMenu, setIsQuiz, contact, setContact }) => {
  const navigation = useNavigate();

  let Res = () => {
    return (
      <div>
        <ul className={s.ul}>
          <li
            className={s.li}
            onClick={() => {
              setIsQuiz(false);
              // setMenu(false);
              setContact(true);
            }}>
            Contact us
          </li>
          <li className={s.li}>About VAC</li>
          <li
            className={s.li}
            onClick={() => {
              setIsQuiz(false);
              navigation("Loan");
              setMenu(false);
            }}>
            Loan Rates
          </li>
          <li
            className={s.li}
            onClick={() => {
              setIsQuiz(false);
              navigation("Video");
              setMenu(false);
            }}>
            Video
          </li>
          <li
            className={s.li}
            onClick={() => {
              setIsQuiz(false);
              navigation("Blog");
              setMenu(false);
            }}>
            Blog
          </li>
          <li
            className={s.li}
            onClick={() => {
              setIsQuiz(false);
              navigation("Calculator");
              setMenu(false);
            }}>
            Calculate
          </li>
        </ul>
        <div className={s.menuSocials}>
          <div className={s.menuSocial}>
            <img src={require("../../../assets/img/components/socials/faceW.svg")} />
          </div>
          <div className={s.menuSocial}>
            <img src={require("../../../assets/img/components/socials/instW.svg")} />
          </div>
          <div className={s.menuSocial}>
            <img src={require("../../../assets/img/components/socials/youtW.svg")} />
          </div>
          <div className={s.menuSocial}>
            <img src={require("../../../assets/img/components/socials/mail.svg")} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <ModalsTemplate
      className={""}
      visible={menu}
      setVisible={setMenu}
      children={<Res />}
      setContact={setContact}
    />
  );
};

export default ModalMenu;
