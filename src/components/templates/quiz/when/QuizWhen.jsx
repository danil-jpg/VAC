import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../atoms/Inputs/Input/Input";
import { result } from "../employment/QuizEmp.jsx";

const QuizWhen = ({ setLineWidth, lineWidth }) => {
  const navigation = useNavigate();

  return (
    <div className="quiz-block">
      <p className="quiz-title">When were you born?</p>
      <div className="quiz-btn-wr quiz-input-wr quiz-input-wr-date">
        <Input
          style={{ width: "100%", gridColumn: "1/4" }}
          className={"input100%"}
          placeholder={"Year"}
        />
        <Input style={{ width: "100%" }} className={"input100%"} placeholder={"Mounth"} />
        <Input style={{ width: "100%" }} className={"input100%"} placeholder={"Day"} />
      </div>

      <div className="quiz-etc-btns-wr">
        <button
          className="quiz-btn-cont"
          onClick={() => {
            navigation("../Congrats");
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

export default QuizWhen;
