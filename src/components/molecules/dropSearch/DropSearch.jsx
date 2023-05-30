import React, { useState } from "react";
import s from "./drop.module.scss";

const DropSearch = ({ title, children }) => {
  const [state, setState] = useState(false);

  return (
    <div className={`${s.drop} ${state ? s.active : "none"}`}>
      <div className={s.dropTop} onClick={() => setState(!state)}>
        <p className={s.dropTopTitle}>{title}</p>
        <img
          className={s.dropImg}
          src={require("../../../assets/img/components/Terms/Arrow-Bottom.svg")}
        />
      </div>
      <div className={s.dropChil}>{children}</div>
    </div>
  );
};

export default DropSearch;
