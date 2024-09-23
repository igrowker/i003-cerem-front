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
import { Sidebar } from "./components/Sidebar/Sidebar";
import TasksPage from "./pages/Tasks";
import CalendarPage from "./pages/Calendar";
import ClientsPage from "./pages/Clients";
import "./i18n/i18n";
import { Error } from "./pages/Error/Error";

import CampanaPage from "./pages/Campana";
// Componente que se encarga de verificar si mostrar o no el NavComponent y el Sidebar
function LayoutWithNavAndSidebar() {
  const location = useLocation();
  const noNavRoutes = [
    "/dashboard",
    "/campanas",
    "/calendarios",
    "/tareas",
    "/clientes",
  ];
  const hideNav = noNavRoutes.includes(location.pathname);

  return (
    <div>
      {!hideNav && <NavComponent />}

      <div className="flex">
        {hideNav && <Sidebar />}

        <div className="flex-grow">
          <Routes>
            <Route path="/iniciar-sesion" element={<LoginPage />} />
            <Route path="/registrate" element={<RegisterPage />} />
            <Route path="/" element={<Navigate to="/inicio" />} />
            <Route path="/inicio" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            {/* <Route path="/campañas" element={<CampaignsPage />} />*/}
            <Route path="/calendarios" element={<CalendarPage />} />
            <Route path="/clientes" element={<ClientsPage />} />
            <Route path="/tareas" element={<TasksPage />} />
            <Route path="/campanas" element={<CampanaPage />} />

            {/* Ruta para manejar páginas no encontradas */}
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <LayoutWithNavAndSidebar />
    </Router>
  );
}

export default App;
