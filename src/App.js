import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VariablesList from "./components/VariablesList";
import VariableDetail from "./pages/VariableDetail";
import Header from "./components/Header";
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Головна сторінка */}
          <Route path="/" element={<Home />} />
          {/* Сторінка зі списком усіх змінних */}
          <Route path="/variables" element={<VariablesList />} />
          {/* Сторінка з детальною інформацією про змінну */}
          <Route path="/variables/:variableId" element={<VariableDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
