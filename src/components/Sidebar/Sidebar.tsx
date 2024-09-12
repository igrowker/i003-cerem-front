import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosCalendar, IoMdLogOut, IoMdSettings } from "react-icons/io";
import { FaListUl, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const Sidebar: React.FC = () => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  // cyanLight: "#5CE1E6",
  // cyanDark: "#0097B2",
  // blueGray: "#779EBF",
  // navy: "#08121F",
  // lightGray: "#F7FAFC",

  return (
    <>
      <div className="w-[300px] h-screen bg-navy border-r-4  flex flex-col items-center justify-between ">
        <div className="w-3/4">
          <div className="w-full h-20 mt-5 flex justify-start">
            <img src="src/assets/isotipo.svg" alt="" className="w-10" />
            <img src="src/assets/logotipo_w.svg" alt="" className="h-20 " />
          </div>
          <div className="w-full h-[200px] flex flex-col justify-evenly ">
            <Link to="/dashboard">
              <span className="w-full h-10  flex items-center text-xl font-medium  text-blueGray hover:bg-cyanDark hover:text-lightGray p-2 rounded-lg">
                <AiOutlineHome className="mr-2" /> Dashboard
              </span>
            </Link>
            <Link to="/calendarios">
              <span className="w-full h-10  flex items-center text-xl font-medium  text-blueGray hover:bg-cyanDark hover:text-lightGray p-2 rounded-lg">
                <IoIosCalendar className="mr-2  " /> Calendario
              </span>
            </Link>
            <Link to="/tareas">
              <span className="w-full h-10  flex items-center text-xl font-medium   text-blueGray hover:bg-cyanDark hover:text-lightGray p-2 rounded-lg">
                <FaListUl className="mr-2  " /> Tareas
              </span>
            </Link>
            <Link to="/clientes">
              <span className="w-full h-10  flex items-center text-xl font-medium   text-blueGray hover:bg-cyanDark hover:text-lightGray p-2 rounded-lg">
                <FaUsers className="mr-2  " /> Clientes
              </span>
            </Link>
          </div>
        </div>
        <div className="w-3/4 mb-5">
          <div className="flex items-center gap-2 mb-2">
            <div className=" overflow-hidden" />
            <img
              src="https://media.istockphoto.com/id/1386479313/es/foto/feliz-mujer-de-negocios-afroamericana-millennial-posando-aislada-en-blanco.jpg?s=612x612&w=0&k=20&c=JP0NBxlxG2-bdpTRPlTXBbX13zkNj0mR5g1KoOdbtO4="
              alt=""
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-[#779EBF]">Usuario</p>
              <p className="text-xs text-cyanDark">usuario@ejemplo.com</p>
            </div>
          </div>
          <Button
            variant="ghost"
            className="w-full justify-start text-[#779EBF] hover:text-[#5CE1E6] hover:bg-[#0097B2]/10"
          >
            <IoMdSettings className="mr-2 h-4 w-4" />
            Configuración
          </Button>
          <Link to={"/inicio"}>
            <Button
              variant="ghost"
              className="w-full justify-start text-[#779EBF] hover:text-[#5CE1E6] hover:bg-[#0097B2]/10"
            >
              <IoMdLogOut className="mr-2 h-4 w-4" />
              Cerrar sesión
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
