import React, { useEffect, useState } from "react";

import MoneyTree from "../components/MoneyTree";
import QuestionArea from "../components/QuestionArea";
import Result from "../components/Result";
import Timer from "../components/Timer";

import { Easy, Medium, Hard } from "../utils/questions";
import questionSelector from "../utils/questionSelector";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    setQuestions(questionSelector(Easy, Medium, Hard));
  }, []);

  return (
    <div className="quiz-main">
      <div className="question-side">
        {
          stop 
          ? 
          <Result />
          :
          <>
          <Timer />
          <QuestionArea
            questions={questions.length > 0 && questions}
            currentQuestion={currentQuestion - 1}
            setCurrentQuestion={setCurrentQuestion}
            setStop={setStop}
          />
          </>
        }
      </div>
      <MoneyTree currentQuestion={currentQuestion} stop={stop} />
    </div>
  );
};

export default Quiz;
