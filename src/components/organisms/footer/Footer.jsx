import React from "react";
import s from "./footer.module.scss";
import { Navigate, useNavigate } from "react-router-dom";

const Footer = ({ quiz = false }) => {
  const navigation = useNavigate();
  let display = "";

  if (quiz === true) {
    display = "specFooterCl";
  }

  return (
    <footer className={`${s.footerSec} ${display}`}>
      <div className={`${s.footer} container`}>
        <img src={require("../../../assets/img/components/footer/Logo.png")} className={s.logo} />
        <div className={s.footerTermsWr}>
          <p className={s.footerText} onClick={() => navigation("Terms")}>
            Terms
          </p>
          <p className={s.footerText} onClick={() => navigation("Policy")}>
            Privacy
          </p>
        </div>
        <div className={s.footerSocials}>
          <div className={s.footerSocial}>
            <img src={require("../../../assets/img/components/socials/inst.svg")} />
          </div>
          <div className={s.footerSocial}>
            <img src={require("../../../assets/img/components/socials/f.svg")} />
          </div>
          <div className={s.footerSocial}>
            <img src={require("../../../assets/img/components/socials/yout.svg")} />
          </div>
        </div>
        <img
          src={require("../../../assets/img/components/footer/Created by.png")}
          className={s.footerCreatedBy}
        />
        <p className={s.footerCopy}>©Copyright, 2020. Vehicle Approval</p>
      </div>
    </footer>
  );
};

export default Footer;
