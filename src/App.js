import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Screen/home"
import Header from "./Component/header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
