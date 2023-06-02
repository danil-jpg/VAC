import React from "react";
import PageTitle from "../../molecules/pageTitle/PageTitle";
import CarDesr from "../../molecules/carDecr/CarDesr";
import s from "./about.module.scss";
import Triangle from "../../organisms/triangle/Triangle";
import ButtonSolid from "../../atoms/Buttons/ButtonSolid/ButtonSolid";
import Slider2 from "../../organisms/slider2/Slider2";

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
          <div className={s.centerBl}>
            <div className={s.centerLeft}>
              <p className={s.topTitle}>Get a car at the best prices and conditions</p>
              <p className={`${s.topText} ${s.getCarDescr}`}>
                Not only is buying a car with VAC easy, it’s also the best way to save money. We
                have partnerships with Canada’s largest lenders. That allows us to help you secure
                loans at the best interest rates available.
              </p>
              <p className={`${s.topText} ${s.getCarDescr}`}>
                Because convenience and transparency are our founding principles, we take the time
                to answer all of your questions about the vehicle and the auto loan. We will send
                you pictures and videos of any part of the car you like before you request a test
                drive.
              </p>
            </div>
            <div className={s.centerRight}>
              <p className={`${s.centerSubTitle}`}>
                We think that VAC is the best way to buy a car in Canada. Try it for yourself and
                see how much time and money you can save.
              </p>
              <p className={`${s.topText} ${s.getCarDescr}`}>
                There are never any hidden fees or costs. We never ask you to sign anything until we
                have explained it clearly and you have had a chance to read it.
              </p>
              <ButtonSolid text="Request a Car" className={s.centerBtn} />
            </div>
          </div>
          <div className={s.bottomBl}>
            <div className={s.bottomLeft}>
              <div className={s.bottomLeftBlock}>
                <p className={s.bottomLeftBlockText}>
                  Contact us today and speak with one of our qualified agents
                </p>
                <ButtonSolid text="Contact Us Now" className={s.bottomBtn} />
              </div>
            </div>
            <div className={s.bottomRight}>
              <p className={s.topTitle}>Our qualified agents</p>
              <p className={`${s.topText} ${s.getCarDescr}`}>
                The true secret to success of VAC isn’t our streamlined purchasing and financing
                processes. The real reason VAC is the easiest and best way to buy a car in Canada is
                because of our outstanding Qualified Agents.
              </p>
              <p className={`${s.topText} ${s.getCarDescr}`}>
                Our team provides you with the best customer experience in the automotive industry.
                You work with a dedicated representative throughout the process. They are able to
                answer any questions you have about any of our vehicles or the financing. Are you
                interested in seeing pictures or videos of a car? Your qualified agent will send
                them to you.
              </p>
            </div>
          </div>
        </div>
        <Slider2 className={s.slider} />
        <div className={s.dynamic}>
          <div className={s.dynamicLeft}>
            <p className={s.dynamicTitle}>
              We're dynamic team of creative people with innovative mind
            </p>
            <p className={s.dynamicSubTitle}>Our History</p>
            <p className={s.danamicDescr}>
              We founded VAC because we hated how complicated it was to buy a car. You only have so
              much free time in your life. You don’t want to waste it going to different car
              dealerships every weekend for weeks and months trying to track down the right car.
            </p>
            <p className={s.dynamicSubTitle}>Our Goal</p>
            <p className={s.danamicDescr}>
              Buying a car has never been easier. You pick out the car you want on our website. You
              work with one of our Qualified Agents to secure financing. Then we bring the car to
              you—all before you sign anything. You test drive the vehicle, and if you like it, you
              sign the loan documents right there and the car is yours.
            </p>
          </div>
          <div className={s.dynamicRight}>
            <img
              className={s.dynamicImg}
              src={require("../../../assets/img/components/about/table.png")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
