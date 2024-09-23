import React from "react";
import { Link } from "react-router-dom";

interface SocialButton {
  icon: React.ReactNode; // El tipo para un componente de React, como un ícono
  url: string;
  width?: string;
  height?: string;
  scaleEffect?: boolean;
}

export const SocialButton: React.FC<SocialButton> = ({
  icon,
  url,
  width = "w-8",
  height = "h-8",
  scaleEffect,
}) => {
  return (
    <Link to={url} className="bg-[#ffffff3d] rounded-lg">
      <span
        className={`${width} ${height} ${
          scaleEffect ? "hover:scale-125 duration-500" : ""
        } flex items-center justify-center text-xl hover:bg-cyanDark rounded-lg`}
      >
        {icon}
      </span>
    </Link>
  );
};
