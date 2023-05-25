import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const QuizCongrat = ({ setLineWidth, lineWidth }) => {
  const navigation = useNavigate();
  useEffect(() => {
    setLineWidth(100);
  }, []);

  return (
    <div className="quiz-block">
      <img
        src={require("../../../../assets/img/components/Quiz/Success.svg")}
        className="quizSvg"
      />
      <p className="quiz-title" style={{ marginTop: "22px" }}>
        Application successful!
      </p>
      <p className="quiz-descr">
        Your response was successfully submitted. Thank you! Our team will reach out to you shortly.
      </p>
      <p
        className="quiz-confirm"
        style={{
          fontWeight: "600",
          fontSize: "20px",
          lineHeight: "34px",
          color: "#41456B",
          marginTop: "32px",
        }}>
        Confirmation number:
      </p>
      <div className="quiz-copy">0002466-1vwrh0</div>
      <div className="quiz-etc-btns-wr">
        <button
          className="quiz-btn-cont"
          onClick={() => {
            navigation("/");
          }}>
          Go to main page
        </button>
      </div>
    </div>
  );
};

export default QuizCongrat;
