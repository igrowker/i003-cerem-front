import React from "react";
import { Link } from "react-router-dom";

// Definir una interfaz para los props que el componente recibirá
interface LogoSideBarProps {
  isOpen: boolean;
  url: string;
}

export const LogoSideBar: React.FC<LogoSideBarProps> = ({ isOpen, url }) => {
  return (
    <Link to={url}>
      {isOpen ? (
        <div className="w-full h-20 mt-5 flex justify-start">
          <img src="/assets/isotipo.svg" alt="" className="w-10" />
          <img src="/assets/logotipo_w.svg" alt="" className="h-20 " />
        </div>
      ) : (
        <div className="w-full h-20 mt-5 flex justify-center">
          <img src="/assets/isotipo.svg" alt="Isotipo" className="w-10" />
        </div>
      )}
    </Link>
  );
};
