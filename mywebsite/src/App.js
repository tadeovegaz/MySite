import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";

function App() {
  return (
    <>
      <div className="gradient">
        <Router>
          <Navbar />
        </Router>
        <Home />
      </div>
    </>
  );
}

export default App;
