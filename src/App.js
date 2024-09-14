import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import VariablesList from "./components/VarieblesList/VariablesList";
import VariableDetail from "./pages/VariablesDetail/VariableDetail";
import Header from "./components/Header/Header";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* main*/}
          <Route path="/" element={<Home />} />
          {/* variables*/}
          <Route path="/variables" element={<VariablesList />} />
          {/* info variable */}
          <Route path="/variables/:variableId" element={<VariableDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
