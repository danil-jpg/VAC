import React from "react";
import s from "./pageTitle.module.scss";

const PageTitle = ({ text }) => {
  return (
    <div className={s.pageTitleWr}>
      <div className={`${s.pageText} container `}>{text}</div>
    </div>
  );
};

export default PageTitle;
