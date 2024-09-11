import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VariablesPage from "./pages/VariablesPage";
import VariableDetailPage from "./pages/VariableDetailPage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/variables" element={<VariablesPage />} />
      <Route path="/variables/:variableId" element={<VariableDetailPage />} />
    </Routes>
  </Router>
);

export default App;
