import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PreHome from "./BeforeAuth/PreHome";
import CreateAccount from "./BeforeAuth/CreateAccount";
import Login from "./BeforeAuth/Login";

function App() {
  return (
    <Router>
      <div className="w-screen h-screen bg-slate-900">
        <Routes>
          <Route path="/" element={<PreHome />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
