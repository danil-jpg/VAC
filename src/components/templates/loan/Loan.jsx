import React from "react";
import PageTitle from "../../molecules/pageTitle/PageTitle";
import s from "./loan.module.scss";
import CarDesr from "../../molecules/carDecr/CarDesr";

const Loan = () => {
  return (
    <>
      <PageTitle text={"Loan rates"} />
      <div className={`${s.loan} container`}>
        <CarDesr
          title={"Our credit policy"}
          descr={
            "You want to secure a loan that works for your budget. Here at VAC we work with Canada’s largest lenders to help you find the best interest rates and terms for your auto loan."
          }
        />
      </div>
    </>
  );
};

export default Loan;
