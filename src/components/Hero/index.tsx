import { Link } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <div className="text-white lg:min-h-screen">
      <div className="w-full  flex justify-start ">
        <div className="w-32 ">
          <LanguageSwitcher />
        </div>
      </div>
      <div className="relative isolate">
        {/* Contenido del Hero */}
        <div className="flex flex-col items-center px-4 pt-8 text-center sm:pt-10 lg:pt-20">
          <h1 className="text-4xl font-bold text-white sm:text-6xl">
            {t("Centraliza y optimiza tu tiempo")}
          </h1>
          <p className="max-w-2xl mt-6 text-base text-gray-300 sm:text-lg">
            {t(
              "Gestiona campañas, clientes y tareas desde una plataforma integrada con IA, diseñada para emprendedores de marketing"
            )}
          </p>
          <div className="z-30 flex flex-wrap gap-4 mt-8">
            <Link
              to="#"
              className="block px-10 py-5 text-lg font-medium text-white transition-transform duration-300 transform rounded-lg cursor-pointer bg-navy hover:scale-105 hover:shadow-lg"
            >
              <span className="block w-full h-full cursor-pointer">
                {t("Empieza")}
              </span>
            </Link>
            <Link
              to="#"
              className="block px-10 py-5 text-lg font-medium text-white transition-transform duration-300 transform border rounded-lg cursor-pointer hover:scale-105 hover:shadow-lg"
            >
              <span className="block w-full h-full cursor-pointer">
                {t("Ensayo")} <span aria-hidden="true">→</span>
              </span>
            </Link>
          </div>

          {/* Dashboard Image */}
          <div className="w-full max-w-6xl overflow-hidden max-h-[730px]">
            <img
              src="/assets/web_dashboard.svg"
              alt="App screenshot"
              className="relative object-cover rounded-md bottom-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
