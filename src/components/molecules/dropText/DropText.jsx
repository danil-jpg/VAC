import React, { useState } from "react";
import s from "./dropText.module.scss";

const DropText = ({ arr }) => {
  const Res = arr.map((el) => {
    const [state, setState] = useState(false);

    return (
      <div
        key={el.title}
        className={`${s.drop} ${state ? s.active : "none"}`}
        onClick={() => setState(!state)}>
        <div className={s.dropTop}>
          <p className={s.dropTopTitle}>{el.title}</p>
          <img
            className={s.dropImg}
            src={require("../../../assets/img/components/Terms/Arrow-Bottom.svg")}
          />
        </div>
        <div className={s.dropText}>
          Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement
          or amend these Terms and Conditions without any notice or liability to you or any other
          person, by posting revised Terms and Conditions on the Vehicle Approval Centre website.
          Your continued use of the Vehicle Approval Centre website signifies your acceptance of
          such revised Terms and Conditions.
        </div>
      </div>
    );
  });

  return Res;
};

export default DropText;
