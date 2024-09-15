import React from "react";
import { Link } from "react-router-dom"; // Si estás usando React Router

// cyanLight: "#5CE1E6",
// cyanDark: "#0097B2",
// blueGray: "#779EBF",
// navy: "#08121F",
// lightGray: "#F7FAFC",
const ErrorPage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center  cover">
      <div className="w-full flex justify-center items-center text-center">
        <h1 className="text-[100px] font-bold text-cyanLight">404</h1>
      </div>
      <p className="text-xl mt-4 text-lightGray">
        Oops! Parece que la página que buscas no existe.
      </p>
      <p className="text-xl mt-4 text-lightGray">
        Es posible que el enlace esté roto o que la página haya sido eliminada.
      </p>

      <div className="mt-6">
        <Link
          to="/"
          className="w-40 p-2 bg-navy text-lightGray font-semibold hover:bg-blueGray hover:text-lightGray rounded-lg"
        >
          Volver al inicio
        </Link>
      </div>
      <div className="mt-4">
        <Link
          to="/dashboard"
          className="w-40 p-2 bg-navy text-lightGray font-semibold hover:bg-blueGray hover:text-lightGray rounded-lg"
        >
          Ir al Dashboard
        </Link>
      </div>
      <div className="mt-4">
        <Link
          to="/help"
          className="max-w-40 p-2 bg-navy text-lightGray font-semibold hover:bg-navy hover:text-lightGray rounded-lg"
        >
          Centro de ayuda
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
