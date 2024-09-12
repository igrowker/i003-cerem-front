import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavComponent from "./components/Nav";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <NavComponent />
        <Routes>
          <Route path="/iniciar-sesion" element={<LoginPage />} />
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
