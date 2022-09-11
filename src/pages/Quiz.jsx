import React from "react";

import MoneyTree from "../components/MoneyTree";
import QuestionArea from "../components/QuestionArea";
import Timer from "../components/Timer";

const Quiz = () => {
  return (
    <div className="quiz-main">
      <div className="question-side">
        <Timer/>
        <QuestionArea/>
      </div>
      <MoneyTree />
    </div>
  );
};

export default Quiz;
