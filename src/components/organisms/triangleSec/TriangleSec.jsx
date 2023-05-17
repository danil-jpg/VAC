import React from "react";
import Triangle from "../triangle/Triangle";
import s from "./triangleSec.module.scss";

const TriangleSec = () => {
  return (
    <div className={`${s.triangleSec} container`}>
      <div className={s.triangleLeft}>
        <p className={s.triangleTitle}>Your perfect car in 5 easy steps</p>
        <Triangle
          arr={[
            { num: 1, title: "First Contact", descr: "Tell us what your dream vehicle is." },
            {
              num: 2,
              title: "Vehicle Selection",
              descr:
                "One of our Qualified Agents sends you custom pictures and videos of the car you are interested in.",
            },
            {
              num: 3,
              title: "Secure Financing",
              descr: "You work with a dedicated Qualified Agent to secure financing on your terms.",
            },
            {
              num: 4,
              title: "Vehicle Delivery",
              descr: "We deliver your car to your home or office for you to test drive.",
            },
            {
              num: 5,
              title: "Getting Vehicle",
              descr: "If you love the vehicle, you sign the paperwork and keep the car.",
            },
          ]}
        />
      </div>
      <div className={s.triangleRight}>
        <picture>
          <source
            srcSet={require("../../../assets/img/components/triangle/phoneMob.png")}
            media="(max-width: 767px)"
          />
          <source
            srcSet={require("../../../assets/img/components/triangle/phoneTablet.png")}
            media="(max-width: 1200px)"
          />
          <img src={require("../../../assets/img/components/triangle/phonePc.png")} alt="" />
        </picture>
      </div>
    </div>
  );
};

export default TriangleSec;
