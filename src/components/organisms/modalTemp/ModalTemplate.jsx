import React from "react";
import s from "./modalTemp.module.scss";

const ModalsTemplate = ({ children, className, visible, setVisible }) => {
  const cssStyles = ["subStrate"];

  if (visible === true) {
    cssStyles.push("active");
  }

  return (
    <div className={`${cssStyles.join(" ")}`} onClick={() => setVisible(false)}>
      <div className={`${className} ${s.modal}`} onClick={(e) => e.stopPropagation()}>
        <div className="cross-wr">
          <img
            src={require("../../../assets/img/components/header/Close.svg")}
            id="cross"
            className={s.cross}
            onClick={() => setVisible(false)}></img>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalsTemplate;
