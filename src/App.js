import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Screen/home"
import WrongPage from "./Screen/wrongPage";
import Login from "./Screen/login";
import AdimnHome from "./Admin/AdimnHome";
import ABpage from "./Admin/ABpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="*" element={<WrongPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Admin-dashboard" element={<AdimnHome />} />
          <Route path="/ABpage" element={<ABpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
