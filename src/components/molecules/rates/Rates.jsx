import React from "react";
import s from "./rates.module.scss";

const Rates = () => {
  return (
    <div className={`${s.rates}`}>
      <p className={s.titleRates}>Interest rates and loan terms</p>
      <div className={s.ratesWr}>
        <div className={s.left}>
          <div className={s.titleWr}>
            <img src={require("../../../assets/img/components/rates/Procent.svg")} />
            <p className={s.title}>What are my interest rate options?</p>
          </div>
          <p className={s.descr}>
            We work to secure customized auto loans from Canada’s largest lenders. Your interest
            rate is critical for determining the total cost of your auto financing. Interest rates
            are based on many factors including the loan amount, your credit score, and your budget.
            We help you find the lowest interest rates available for your auto loan.
          </p>
        </div>
        <div className={s.right}>
          <div className={s.titleWr}>
            <img src={require("../../../assets/img/components/rates/Clock.svg")} />
            <p className={s.title}>How long will my loan term be?</p>
          </div>
          <p className={s.descr}>
            Our goal is to find the right car and the right loan for you. Because we have
            relationships with so many different lenders, we can help you find the right term length
            for your budget. The longer the loan is, often the lower the monthly payments will
            be—but the more expensive the loan will be overall. Most of the loans we secure for our
            clients are between 36 and 72 months.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rates;
