import React, { useState } from "react";
import ModalsTemplate from "../modalTemp/ModalTemplate";
import s from "./modal.module.scss";
import Input from "../../atoms/Inputs/Input/Input";
import InputMail from "../../atoms/Inputs/InputMail/InputMail";
import ButtonSolid from "../../atoms/Buttons/ButtonSolid/ButtonSolid";

const ModalContact = ({ menu, setMenu, setIsQuiz, contact, setContact }) => {
  const Res = () => {
    return (
      <div>
        <div className={s.topWr}>
          <p className={s.title}>We can't wait to hear from you!</p>
          <Input placeholder={"Your Name"} className={s.inputName} />
          <Input placeholder={"Phone Number"} className={s.inputNumber} />
          <InputMail placeholder={"Email Address"} />
          <ButtonSolid text="Contact me" className={s.btn} />
        </div>
        <p className={s.socialText}>You can contact us yourself</p>
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
      classnameOver={contact ? "" : s.none}
      visible={menu}
      setVisible={setMenu}
      setContact={setContact}
      children={<Res />}
    />
  );
};

export default ModalContact;
