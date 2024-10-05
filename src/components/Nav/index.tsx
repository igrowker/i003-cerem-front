import { Link } from "react-router-dom";

const NavComponent = () => {
  return (
    <header className="container mx-auto px-1 py-2 flex justify-between items-center">
      <div className="flex items-center  space-x-2">
        <img src="/assets/isotipo.svg" alt="Logo" className="w-16 h-16" />
        <img src="/assets/logotipo_w.svg" alt="Logo" className="w-16 h-16" />
      </div>
      <nav className="hidden md:flex space-x-6 text-white gap-2">
        <Link to={"/inicio"} className="hover:underline">
          Inicio
        </Link>
        <Link to={"/nosotros"} className="hover:underline">
          Nosotros
        </Link>
        <Link to={"/funcionalidades"} className="hover:underline">
          Funcionalidades
        </Link>
        <Link to={"/integraciones"} className="hover:underline">
          Integraciones
        </Link>
      </nav>
      <div className="space-x-4">
        <button className="text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
          <Link to={"/iniciar-sesion"} className="hover:underline">
            Iniciar Sesión
          </Link>
        </button>
        <button className="text-white border-2 border-white rounded-xl px-6 py-2 hover:bg-white hover:text-[#4EAAA9] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
          <Link to={"/registrate"} className="hover:underline">
            Regístrate
          </Link>
        </button>
      </div>
    </header>
  );
};

export default NavComponent;
