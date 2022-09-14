import React, { useState, useEffect } from "react";
import useSound from 'use-sound';

import Play from '../assets/sounds/play.mp3';
import Correct from '../assets/sounds/correct.mp3';
import Wrong from '../assets/sounds/wrong.mp3';

const QuestionArea = ({ questions, currentQuestion, setCurrentQuestion, setStop, currentClass, setCurrentClass }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isWrong,setIsWrong]=useState(false);

  const [playSound]=useSound(Play);
  const [correctSound,{stop}]=useSound(Correct);
  const [wrongSound]=useSound(Wrong);
  
  useEffect(()=>{
    stop();
    playSound();
  },[currentQuestion]);

  const handleClick = (answer) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answer);
      setCurrentClass("answer active");

      setTimeout(()=>{
        setCurrentClass(answer.isCorrect ? "answer correct" : "answer wrong");
      },3000);

      setTimeout(()=>{
        if(answer.isCorrect){
          correctSound();
        }else{
          wrongSound();
          setIsWrong(true);
        }
      },4800);

      setTimeout(()=>{
        setSelectedAnswer(null)
        if (answer.isCorrect && currentQuestion+1 < 15) {
            setCurrentQuestion((prev) => prev + 1);
        } else {
          setStop(true);
        }
      },9000);
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
                className={selectedAnswer === answer ? currentClass : (isWrong && answer.isCorrect ? "answer correct-answer" :"answer")}
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
