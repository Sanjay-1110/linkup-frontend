import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PreHome from "./PreHome";

function App() {
  return (
    <Router>
      <div className="w-screen h-screen bg-slate-900">
        <Routes>
          <Route path="/" element={<PreHome />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
