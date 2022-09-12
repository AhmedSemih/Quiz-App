import React, { useState } from "react";

const QuestionArea = ({ questions, currentQuestion, setCurrentQuestion, setStop }) => {
  const [currentClass, setCurrentClass] = useState("answer");
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleClick = (answer) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answer);
      setCurrentClass("answer active");

      setTimeout(()=>{
        setCurrentClass(answer.isCorrect ? "answer correct" : "answer wrong");
      },3000)

      setTimeout(()=>{
        setSelectedAnswer(null)
        if (answer.isCorrect) {
          setCurrentQuestion((prev) => prev + 1);
        } else {
          setStop(true);
        }
      },6000);
    }
  };

  return (
    <div className="question-area">
      <div className="question">
        {questions && questions[currentQuestion].question}
      </div>
      <div className="answers">
        {questions &&
          questions[currentQuestion].answers.map((answer, index) => {
            return (
              <div
                key={index}
                onClick={() => handleClick(answer)}
                className={selectedAnswer === answer ? currentClass : "answer"}
              >
                {answer.text}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default QuestionArea;
