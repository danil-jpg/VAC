import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../atoms/Inputs/Input/Input";

const QuizWhere = ({ setLineWidth, lineWidth }) => {
  const navigation = useNavigate();

  return (
    <div className="quiz-block">
      <p className="quiz-title">Where do you live?</p>
      <p className="quiz-descr">Providing your location helps find the best deals near you.</p>
      <div className="quiz-btn-wr quiz-input-wr quiz-input-wr-adress">
        <Input
          style={{ width: "100%", gridColumn: "1/3" }}
          className={"input100%"}
          placeholder={"Street address"}
        />
        <Input
          style={{ width: "100%", gridColumn: "1/3" }}
          className={"input100%"}
          placeholder={"City"}
        />
        <Input style={{ width: "100%" }} className={"input100%"} placeholder={"Province"} />
        <Input style={{ width: "100%" }} className={"input100%"} placeholder={"Postal code"} />
      </div>

      <div className="quiz-etc-btns-wr">
        <button
          className="quiz-btn-cont"
          onClick={() => {
            setLineWidth(lineWidth + 9);
            navigation("../WhenWereYouBorn");
          }}>
          Continue
        </button>
        <button
          className="quiz-btn-back"
          onClick={() => {
            setLineWidth(lineWidth - 9);
            navigation(-1);
          }}>
          <img src={require("../../../../assets/img/components/Quiz/Arrow-Bottom.svg")} />
          Back
        </button>
      </div>
    </div>
  );
};

export default QuizWhere;
