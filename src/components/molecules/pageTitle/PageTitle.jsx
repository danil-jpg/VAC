import React from "react";
import s from "./pageTitle.module.scss";

const PageTitle = ({ text }) => {
  return (
    <div className={s.pageTitleWr}>
      <div className={`container`}>{text}</div>
    </div>
  );
};

export default PageTitle;
