import { AiOutlineHome } from "react-icons/ai";
import { IoIosCalendar, IoMdLogOut, IoMdSettings } from "react-icons/io";
import { FaListUl, FaUsers } from "react-icons/fa";
import { ButtonSideBarBurger } from "./ButtonSidebar";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { MdCampaign } from "react-icons/md";
import { BsClipboardDataFill } from "react-icons/bs";
import { logout } from "@/store/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    setIsLoggingOut(true);

    setTimeout(() => {
      localStorage.removeItem("authToken");
      dispatch(logout());
      console.log("Logging out...");
      setIsLoggingOut(false);
      navigate("/iniciar-sesion");
    }, 2000);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className=" lg:hidden text-3xl md:text-4xl text-white"
      >
        {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
      </button>
      {isOpen ? (
        <div className="w-full min-h-[600px] z-20 flex justify-end absolute top-16 right-0 left-1 lg:hidden">
          <div className="w-full md:w-2/5  bg-cyan-900 flex flex-col items-center justify-between">
            <div className="w-full md:w-3/4">
              <div className="w-full h-[200px] flex flex-col justify-evenly items-center md:items-end">
                {/* Botones con íconos */}
                <ButtonSideBarBurger
                  text={t("dashboard")}
                  icon={<AiOutlineHome className="ml-1" />}
                  isOpen={isOpen}
                  url="/dashboard"
                />
                <ButtonSideBarBurger
                  text={t("calendario")}
                  icon={<IoIosCalendar className="ml-1" />}
                  isOpen={isOpen}
                  url="/calendarios"
                />
                <ButtonSideBarBurger
                  text={t("campaña")}
                  icon={<MdCampaign className="ml-1" />}
                  isOpen={isOpen}
                  url="/campanas"
                />
                <ButtonSideBarBurger
                  text={t("estadisticas")}
                  icon={<BsClipboardDataFill className="ml-1" />}
                  isOpen={isOpen}
                  url="/estadisticas"
                />
                <ButtonSideBarBurger
                  text={t("tareas")}
                  icon={<FaListUl className="ml-1" />}
                  isOpen={isOpen}
                  url="/tareas"
                />
                <ButtonSideBarBurger
                  text={t("clientes")}
                  icon={<FaUsers className="ml-1" />}
                  isOpen={isOpen}
                  url="/clientes"
                />
              </div>
            </div>

            <div className="w-3/4 mb-5 ">
              <div className="w-full flex justify-center md:justify-end items-center mb-3">
                <img
                  src="https://media.istockphoto.com/id/1386479313/es/foto/feliz-mujer-de-negocios-afroamericana-millennial-posando-aislada-en-blanco.jpg?s=612x612&w=0&k=20&c=JP0NBxlxG2-bdpTRPlTXBbX13zkNj0mR5g1KoOdbtO4="
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <div className="w-full flex flex-col justify-end items-center md:items-end mb-3">
                {/* Botones adicionales */}
                <ButtonSideBarBurger
                  text={t("configuracion")}
                  icon={<IoMdSettings className="ml-1" />}
                  isOpen={isOpen}
                  url="/configuración"
                />
                <button
                  onClick={handleLogout}
                  className="flex items-center text-white"
                  disabled={isLoggingOut}
                >
                  {isLoggingOut ? (
                    "Logging out..."
                  ) : (
                    <>
                      <IoMdLogOut className="ml-1" />
                      {t("cerrar_sesion")}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
