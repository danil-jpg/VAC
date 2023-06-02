import React from "react";
import PageTitle from "../../molecules/pageTitle/PageTitle";
import CarDesr from "../../molecules/carDecr/CarDesr";
import s from "./about.module.scss";
import Triangle from "../../organisms/triangle/Triangle";

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
        <div className={s.getCar}>
          <div className={s.getCarLeft}>
            <p className={s.getCarTitle}>Get your dream car</p>
            <p className={s.getCarDescr}>
              We founded VAC because we hated how complicated it was to buy a car. You only have so
              much free time in your life. You don’t want to waste it going to different car
              dealerships every weekend for weeks and months trying to track down the right car.
            </p>
            <p className={s.getCarDescr}>
              We also hated how choosing a car and figuring out the financing for the vehicle were
              treated as totally separate processes! Instead of dealing with a salesperson, then
              being handed off to a closer, and then shuffled over to a finance manager, we wanted
              to create a way for people to buy a car and only deal with a single person for the
              entire process.
            </p>
          </div>
          <div className={s.getCarRight}>
            <Triangle
              arr={[
                { num: 1, title: "Quickly", descr: "Tell us what your dream vehicle is." },
                {
                  num: 2,
                  title: "Simply",
                  descr: "You can order your dream car just by talking to our specialist by phone",
                },
                {
                  num: 3,
                  title: "Conveniently",
                  descr: "We will deliver the car directly to the doorstep of your home or office",
                },
              ]}
            />
          </div>
        </div>
        <div className={s.textsBlock}>
          <div className={s.topBl}>
            <div className={s.topLeft}>
              <img src={require("../../../assets/img/components/cars/Nissan.png")} />
            </div>
            <div className={s.topRight}>
              <p className={s.topTitle}>VAC is convenience and transparency</p>
              <p className={`${s.topText} ${s.getCarDescr}`}>
                We want to make simple for you to find the car you want. We also want to make sure
                you are 100% comfortable with the terms of the conditions of your auto loan.
              </p>
              <p className={`${s.topText} ${s.getCarDescr}`}>
                Buying a car has never been easier. You pick out the car you want on our website.
                You work with one of our Qualified Agents to secure financing. Then we bring the car
                to you—all before you sign anything. You test drive the vehicle, and if you like it,
                you sign the loan documents right there and the car is yours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
