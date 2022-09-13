import React, { useEffect, useMemo } from "react";

const MoneyTree = ({ currentQuestion, stop, setEarned }) => {
  const moneyTree = useMemo(() =>
  [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1000" },
      { id: 6, amount: "$ 2000" },
      { id: 7, amount: "$ 4000" },
      { id: 8, amount: "$ 8000" },
      { id: 9, amount: "$ 16000" },
      { id: 10, amount: "$ 32000" },
      { id: 11, amount: "$ 64000" },
      { id: 12, amount: "$ 125000" },
      { id: 13, amount: "$ 250000" },
      { id: 14, amount: "$ 500000" },
      { id: 15, amount: "$ 1000000" },
    ], []);

  useEffect(() => {
    if (stop) {
      if(currentQuestion === 1){
        setEarned(0);
        !localStorage.getItem("highScore") && localStorage.setItem("highScore", 0);
      }else{
        const earnedMoneyString = moneyTree[currentQuestion - 2].amount.split(" ");
        var earnedMoney=Number(earnedMoneyString[1]);
        setEarned(earnedMoney);
        if(earnedMoney > Number(localStorage.getItem("highScore")) || !localStorage.getItem("highScore")) return localStorage.setItem("highScore", earnedMoney); 
      }  
    }
  }, [stop]);

  return (
    <div className="money-tree">
      {
      moneyTree && moneyTree.map((money) => {
          return (
            <div
              key={money.id}
              className={currentQuestion === money.id ? "money-bar money-active" : "money-bar"}
            >
              <p className="text-muted">{money.id}</p>
              <p className="money-amount">{money.amount}</p>
            </div>
          );
        })}
    </div>
  );
};

export default MoneyTree;
