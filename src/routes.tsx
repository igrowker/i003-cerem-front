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
import EstadisticasPage from "./pages/Estadisticas";
import { NosotrosPage } from "./pages/Nosotros";
import { Private_Routes } from "./routes/Private-Routes";
// Componente que se encarga de verificar si mostrar o no el NavComponent y el Sidebar
function LayoutWithNavAndSidebar() {
  const location = useLocation();
  const noNavRoutes = [
    "/dashboard",
    "/campanas",
    "/calendarios",
    "/estadisticas",
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
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route
              path="/dashboard"
              element={
                <Private_Routes>
                  <DashboardPage />
                </Private_Routes>
              }
            />
            <Route
              path="/estadisticas"
              element={
                <Private_Routes>
                  <EstadisticasPage />
                </Private_Routes>
              }
            />
            <Route
              path="/calendarios"
              element={
                <Private_Routes>
                  <CalendarPage />
                </Private_Routes>
              }
            />
            <Route
              path="/clientes"
              element={
                <Private_Routes>
                  <ClientsPage />
                </Private_Routes>
              }
            />
            <Route
              path="/tareas"
              element={
                <Private_Routes>
                  <TasksPage />
                </Private_Routes>
              }
            />
            <Route
              path="/campanas"
              element={
                <Private_Routes>
                  <CampanaPage />
                </Private_Routes>
              }
            />

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
