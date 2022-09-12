const questionSelector = ( easy, medium, hard ) => {
  const easyQuestions = [];
  const mediumQuestions = [];
  const hardQuestions = [];

  const easyNumbers = [];
  const mediumNumbers = [];
  const hardNumbers = [];

  for(;easyNumbers.length<5;){
    var easyNumber=Math.floor(Math.random() * (easy.length));
    if(!easyNumbers.includes(easyNumber)){
        easyNumbers.push(easyNumber);
    }
  }

  for(;mediumNumbers.length<5;){
    var mediumNumber=Math.floor(Math.random() * (medium.length));
    if(!mediumNumbers.includes(mediumNumber)){
      mediumNumbers.push(mediumNumber);
    }
  }

  for(;hardNumbers.length<5;){
    var hardNumber=Math.floor(Math.random() * (hard.length));
    if(!hardNumbers.includes(hardNumber)){
      hardNumbers.push(hardNumber);
    }
  }

  for (let i = 0; i < 5; i++) {
    easyQuestions.push(easy[easyNumbers[i]]);
    mediumQuestions.push(medium[mediumNumbers[i]]);
    hardQuestions.push(hard[hardNumbers[i]]);
  }

  const questions = easyQuestions.concat(mediumQuestions, hardQuestions);
  return questions;
};

export default questionSelector;
