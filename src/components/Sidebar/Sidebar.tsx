import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosCalendar, IoMdLogOut } from "react-icons/io";
import { FaListUl, FaUsers } from "react-icons/fa";
import { ButtonSideBar } from "./ButtonSidebar";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { LogoSideBar } from "./LogoSidebar";
import { MdCampaign } from "react-icons/md";
import { useTranslation } from "react-i18next"; // <--- Importación
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { BsClipboardDataFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "@/store/authSlice";

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);

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
              text={t("campaña")}
              icon={<MdCampaign className="mr-1" />}
              isOpen={isOpen}
              url="/campanas"
            />

            <ButtonSideBar
              text={t("estadisticas")}
              icon={<BsClipboardDataFill className="mr-1" />}
              isOpen={isOpen}
              url="/estadisticas"
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
          <div className="w-full flex flex-col justify-end items-center md:items-end mb-3">
            {/* Botones adicionales */}
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
    </>
  );
};
