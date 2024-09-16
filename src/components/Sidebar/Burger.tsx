import { AiOutlineHome } from "react-icons/ai";
import { IoIosCalendar, IoMdLogOut, IoMdSettings } from "react-icons/io";
import { FaListUl, FaUsers } from "react-icons/fa";
import { ButtonSideBarBurger } from "./ButtonSidebar";

export const Burger = (isOpen: boolean) => {
  return (
    <div className="w-full min-h-[600px] z-20 flex justify-end absolute">
      <div className="w-2/5  bg-cyan-900 flex flex-col items-center justify-between">
        <div className="w-3/4">
          <div className="w-full h-[200px] flex flex-col justify-evenly items-end">
            {/* Botones con íconos */}
            <ButtonSideBarBurger
              text="Inicio"
              icon={<AiOutlineHome className="ml-1" />}
              isOpen={isOpen}
              url="/dashboard"
            />
            <ButtonSideBarBurger
              text="Calendario"
              icon={<IoIosCalendar className="ml-1" />}
              isOpen={isOpen}
              url="/calendarios"
            />

            <ButtonSideBarBurger
              text="Tareas"
              icon={<FaListUl className="ml-1" />}
              isOpen={isOpen}
              url="/tareas"
            />
            <ButtonSideBarBurger
              text="Clientes"
              icon={<FaUsers className="ml-1" />}
              isOpen={isOpen}
              url="/clientes"
            />
          </div>
        </div>

        <div className="w-full flex items-end justify-end">
          <button className="text-white text-4xl"></button>
        </div>

        <div className="w-3/4 mb-5">
          <div className="w-full flex justify-center items-center mb-3">
            <img
              src="https://media.istockphoto.com/id/1386479313/es/foto/feliz-mujer-de-negocios-afroamericana-millennial-posando-aislada-en-blanco.jpg?s=612x612&w=0&k=20&c=JP0NBxlxG2-bdpTRPlTXBbX13zkNj0mR5g1KoOdbtO4="
              alt=""
              className="w-8 h-8 rounded-full"
            />
          </div>

          {/* Botones adicionales */}
          <ButtonSideBarBurger
            text="Configuración"
            icon={<IoMdSettings className="ml-1" />}
            isOpen={isOpen}
            url="/configuración"
          />
          <ButtonSideBarBurger
            text=" Cerrar sesión"
            icon={<IoMdLogOut className="ml-1" />}
            isOpen={isOpen}
            url="/singout"
          />
        </div>
      </div>
    </div>
  );
};
