import React from "react";
import s from "./triangle.module.scss";

const Triangle = ({ arr }) => {
  const res = arr.map((el) => {
    return (
      <li key={el.num} className={s.triangleLi}>
        <div className={s.triangleLeft}>
          <p className={s.triangleNum}>{el.num}</p>
        </div>
        <div className={s.triangleRight}>
          <p className={s.triangleTitle}>{el.title}</p>
          <p className={s.triangleDescr}>{el.descr}</p>
        </div>
      </li>
    );
  });

  return <ul className={s.triangleUl}>{res}</ul>;
};

export default Triangle;
