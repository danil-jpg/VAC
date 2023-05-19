import React from "react";
import s from "./advantageTri.module.scss";

const AdvantageTri = ({ arr }) => {
  const res = arr.map((el) => {
    return (
      <li key={`${el.title}${Date.now() + 1}`} className={`${s.card} ${el.rotate ? s.rotate : ""}`}>
        <img className={s.cardImg} src={el.svg} />
        <p className={s.title}>{el.title}</p>
        <p className={s.descr}>{el.descr}</p>
      </li>
    );
  });

  return <ul className={s.ulCard}>{res}</ul>;
};

export default AdvantageTri;
