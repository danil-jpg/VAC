import React from "react";
import s from "./chooseYourDream.module.scss";
import ButtonSolid from "../../atoms/Buttons/ButtonSolid/ButtonSolid.jsx";
import { useNavigate } from "react-router-dom";

const ChooseYourDream = () => {
  const navigation = useNavigate();

  return (
    <div className={s.block}>
      <p className={s.title}>Сhoose your dream vehicle in our catalog</p>
      <p className={s.descr}>
        In our catalogue there are many models of vehicles. Choose your car to your liking.
      </p>
      <ButtonSolid
        className={s.button}
        text="Inventory"
        onClick={() => {
          navigation("../Inventory");
        }}
      />
    </div>
  );
};

export default ChooseYourDream;
