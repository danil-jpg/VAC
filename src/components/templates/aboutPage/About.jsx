import React from "react";
import PageTitle from "../../molecules/pageTitle/PageTitle";
import CarDesr from "../../molecules/carDecr/CarDesr";
import s from "./about.module.scss";

const About = () => {
  return (
    <div className={`${s.aboutPage} `}>
      <PageTitle text={"About VAC "} />
      <div className="container">
        <CarDesr
          title={"Our mission"}
          descr={
            "Our mission at VAC is to help you find the perfect car at the perfect price and with the perfect auto loan. We make buying a car simple. You can complete the entire process from home—we’ll even deliver the car to you!"
          }
          img={require("../../../assets/img/components/cars/Kia.png")}
        />
      </div>
    </div>
  );
};

export default About;
