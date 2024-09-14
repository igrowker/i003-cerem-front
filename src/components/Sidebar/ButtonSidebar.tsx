import React from "react";
import { Link } from "react-router-dom";

// Definir una interfaz para los props que el componente recibirá
interface ButtonSideBarProps {
  text: string;
  icon: React.ReactNode; // El tipo para un componente de React, como un ícono
  isOpen: boolean;
  url: string;
}

export const ButtonSideBar: React.FC<ButtonSideBarProps> = ({
  text,
  icon,
  isOpen,
  url,
}) => {
  return (
    <Link to={url}>
      {isOpen ? (
        <span className="w-full h-10 flex items-center text-xl font-medium text-blueGray hover:bg-cyanDark hover:text-lightGray p-2 rounded-lg">
          {icon}
          {text}
        </span>
      ) : (
        <span className="w-full h-10 flex items-center justify-center text-2xl  font-medium text-blueGray hover:bg-cyanDark hover:text-lightGray p-2 rounded-lg">
          {icon}
        </span>
      )}
    </Link>
  );
};
