import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosCalendar, IoMdLogOut, IoMdSettings } from "react-icons/io";
import { FaListUl, FaUsers } from "react-icons/fa";
import { ButtonSideBar } from "./ButtonSidebar";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { LogoSideBar } from "./LogoSidebar";

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // cyanLight: "#5CE1E6",
  // cyanDark: "#0097B2",
  // blueGray: "#779EBF",
  // navy: "#08121F",
  // lightGray: "#F7FAFC",

  return (
    <>
      <div
        className={` ${
          isOpen ? "w-[300px]" : "w-24"
        } transition-all duration-500 ease-in-out} w-[300px] h-screen bg-navy border-r-4  flex flex-col items-center justify-between `}
      >
        <div className="w-3/4">
          <LogoSideBar isOpen={isOpen} url="/dashboard" />
          <div className="w-full h-[200px] flex flex-col justify-evenly ">
            <ButtonSideBar
              text="Inicio"
              icon={<AiOutlineHome className="mr-1" />}
              isOpen={isOpen}
              url="/dashboard"
            />
            <ButtonSideBar
              text="Calendario"
              icon={<IoIosCalendar className="mr-1" />}
              isOpen={isOpen}
              url="/calendarios"
            />

            <ButtonSideBar
              text="Tareas"
              icon={<FaListUl className="mr-1" />}
              isOpen={isOpen}
              url="/tareas"
            />
            <ButtonSideBar
              text="Clientes"
              icon={<FaUsers className="mr-1" />}
              isOpen={isOpen}
              url="/clientes"
            />
          </div>
        </div>
        <div className="w-full flex items-end justify-end">
          <button onClick={toggleSidebar} className=" text-white text-4xl">
            {isOpen ? <IoIosArrowForward /> : <IoIosArrowBack />}
          </button>
        </div>

        <div className="w-3/4 mb-5">
          {isOpen ? (
            <div className="flex items-center gap-2 mb-2">
              <div className=" overflow-hidden" />
              <img
                src="https://media.istockphoto.com/id/1386479313/es/foto/feliz-mujer-de-negocios-afroamericana-millennial-posando-aislada-en-blanco.jpg?s=612x612&w=0&k=20&c=JP0NBxlxG2-bdpTRPlTXBbX13zkNj0mR5g1KoOdbtO4="
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-base font-medium text-[#779EBF]">Usuario</p>
                <p className="text-base text-cyanDark">usuario@ejemplo.com</p>
              </div>
            </div>
          ) : (
            <div className="w-full flex justify-center items-center mb-3">
              <img
                src="https://media.istockphoto.com/id/1386479313/es/foto/feliz-mujer-de-negocios-afroamericana-millennial-posando-aislada-en-blanco.jpg?s=612x612&w=0&k=20&c=JP0NBxlxG2-bdpTRPlTXBbX13zkNj0mR5g1KoOdbtO4="
                alt=""
                className="w-8 h-8 rounded-full"
              />
            </div>
          )}

          <ButtonSideBar
            text="Configuración"
            icon={<IoMdSettings className="mr-1" />}
            isOpen={isOpen}
            url="/configuración"
          />
          <ButtonSideBar
            text=" Cerrar sesión"
            icon={<IoMdLogOut className="mr-1" />}
            isOpen={isOpen}
            url="/singout"
          />
        </div>
      </div>
    </>
  );
};
