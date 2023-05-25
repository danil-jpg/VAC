import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../atoms/Inputs/Input/Input";

const QuizPreLast = ({ setLineWidth, lineWidth }) => {
  const navigation = useNavigate();

  return (
    <div className="quiz-block">
      <p className="quiz-title">Congratulations! Last step.</p>
      <p className="quiz-descr">
        Get access to your vehicle and financing options by creating your account. There is no
        obligation to continue with financing if you change your mind.{" "}
      </p>
      <div className="quiz-btn-wr quiz-input-wr quiz-input-wr-adress">
        <Input
          style={{ width: "100%", gridColumn: "1/3" }}
          className={"input100%"}
          placeholder={"First name"}
        />
        <Input
          style={{ width: "100%", gridColumn: "1/3" }}
          className={"input100%"}
          placeholder={"Last name"}
        />
        <Input style={{ width: "100%" }} className={"input100%"} placeholder={"Email"} />
        <Input style={{ width: "100%" }} className={"input100%"} placeholder={"Phone number"} />
      </div>

      <div className="quiz-etc-btns-wr">
        <button
          className="quiz-btn-cont"
          onClick={() => {
            navigation("../WhenWereYouBorn");
            setLineWidth(lineWidth + 9);
          }}>
          Continue
        </button>
        <button
          className="quiz-btn-back"
          onClick={() => {
            navigation(-1);
            setLineWidth(lineWidth - 9);
          }}>
          <img src={require("../../../../assets/img/components/Quiz/Arrow-Bottom.svg")} />
          Back
        </button>
      </div>
    </div>
  );
};

export default QuizPreLast;
