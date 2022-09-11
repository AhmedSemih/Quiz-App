import React from "react";
import { Routes, Route } from "react-router-dom";

import Quiz from "./pages/Quiz";
import Start from "./pages/Start";
import Result from "./pages/Result";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
  );
};

export default App;
