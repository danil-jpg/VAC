import React from "react";
import s from "./happyCustomers.module.scss";
import Number from "../../molecules/numberBlock/number";
import ButtonSolid from "../../atoms/Buttons/ButtonSolid/ButtonSolid";

const HappyCustomers = () => {
  return (
    <div className={`${s.section} container`}>
      <div className={s.left}>
        <p className={s.title}>Happy customers</p>
        <p className={s.descr}>
          Since 2017, we have helped thousands of Canadians get their dream vehicles from the
          comfort of their homes.
        </p>
        <div className={s.subBlock}>
          <p className={s.subTitle}>What are you waiting? Get started right now!</p>
          <ButtonSolid className={s.button} text="Request a Car" />
        </div>
      </div>
      <div className={s.right}>
        <Number
          arr={[
            { number: "7,988+", descr: "Sold Cars" },
            { number: "16,974+", descr: "Vehicles To Choose From" },
            { number: "123", descr: "Experts Across Canada" },
          ]}
        />
      </div>
    </div>
  );
};

export default HappyCustomers;