import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosCalendar, IoMdLogOut, IoMdSettings } from "react-icons/io";
import { FaListUl, FaUsers } from "react-icons/fa";
import { ButtonSideBar } from "./ButtonSidebar";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { LogoSideBar } from "./LogoSidebar";
import { useTranslation } from "react-i18next"; // <--- Importación
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation(); // <--- Uso del hook

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={` ${
          isOpen ? "w-[300px]" : "w-32"
        } transition-all duration-500 ease-in-out} hidden lg:flex   h-screen bg-navy border-r-4  flex-col items-center justify-between `}
      >
        <div className="w-3/4">
          <LanguageSwitcher />

          <LogoSideBar isOpen={isOpen} url="/dashboard" />
          <div className="w-full h-[200px] flex flex-col justify-evenly ">
            <ButtonSideBar
              text={t("inicio")}
              icon={<AiOutlineHome className="mr-1" />}
              isOpen={isOpen}
              url="/dashboard"
            />
            <ButtonSideBar
              text={t("calendario")}
              icon={<IoIosCalendar className="mr-1" />}
              isOpen={isOpen}
              url="/calendarios"
            />

            <ButtonSideBar
              text={t("tareas")}
              icon={<FaListUl className="mr-1" />}
              isOpen={isOpen}
              url="/tareas"
            />
            <ButtonSideBar
              text={t("clientes")}
              icon={<FaUsers className="mr-1" />}
              isOpen={isOpen}
              url="/clientes"
            />
          </div>
        </div>
        <div className="w-full flex items-end justify-end">
          <button onClick={toggleSidebar} className=" text-white text-4xl">
            {isOpen ? <IoIosArrowBack /> : <IoIosArrowForward />}
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
                <p className="text-base font-medium text-[#779EBF]">
                  {t("usuario")}
                </p>
                <p className="text-base text-cyanDark">
                  {t("usuario")}@ejemplo.com
                </p>
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
            text={t("configuracion")}
            icon={<IoMdSettings className="mr-1" />}
            isOpen={isOpen}
            url="/configuración"
          />
          <ButtonSideBar
            text={t("cerrar_sesion")}
            icon={<IoMdLogOut className="mr-1" />}
            isOpen={isOpen}
            url="/singout"
          />
        </div>
      </div>
    </>
  );
};
