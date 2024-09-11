import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavComponent from "./components/Nav";
import LoginPage from "./pages/Login";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Router>
        <NavComponent />
        <div className="mx-auto container">
          <Routes>
            <Route path="/iniciar-sesion" element={<LoginPage />} />
            <Route path="/" element={<Hero />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
