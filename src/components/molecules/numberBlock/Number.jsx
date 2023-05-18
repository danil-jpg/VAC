import React from "react";
import s from "./number.module.scss";

const Number = ({ arr }) => {
  return (
    <>
      {arr.map((el) => {
        return (
          <div className={s.block}>
            <p className={s.title}>{el.number}</p>
            <p className={s.descr}>{el.descr}</p>
          </div>
        );
      })}
    </>
  );
};

export default Number;
