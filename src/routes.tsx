import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavComponent from "./components/Nav";
import LoginPage from "./pages/Login";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Router>
        <NavComponent/>
        <div className="container mx-auto">
          <Routes>
            <Route path="/iniciar-sesion" element={<LoginPage />} />
          </Routes>
        </div>
      </Router>
      <Hero/>
    </>
  );
}

export default App;
