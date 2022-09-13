import React from "react";
import { Routes, Route } from "react-router-dom";

import Quiz from "./pages/Quiz";
import Start from "./pages/Start";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/quiz" element={<Quiz />} />
-      </Routes>
  );
};

export default App;
