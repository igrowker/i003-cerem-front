import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import NavComponent from "./components/Nav";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/Register";
import DashboardPage from "./pages/Dashboard";

// Componente que se encarga de verificar si mostrar o no el NavComponent
function LayoutWithNav() {
  const location = useLocation();
  const noNavRoutes = ["/dashboard", "/campañas", "/calendarios", "/tareas"];
  const hideNav = noNavRoutes.includes(location.pathname);

  return (
    <>
      {!hideNav && <NavComponent />}
      <Routes>
        <Route path="/iniciar-sesion" element={<LoginPage />} />
        <Route path="/registrate" element={<RegisterPage />} />
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* <Route path="/campañas" element={<CampaignsPage />} />
        <Route path="/calendarios" element={<CalendarPage />} />
        <Route path="/tareas" element={<TasksPage />} /> */}
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutWithNav />
    </Router>
  );
}

export default App;
