import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<string>(i18n.language); // Inicializa el estado con el idioma actual

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng); // Actualiza el estado con el idioma seleccionado
  };

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <div className="w-full h-10 flex justify-center items-center">
      <div className="w-full mt-5 flex justify-center rounded-lg bg-blueGray overflow-hidden">
        <button
          onClick={() => changeLanguage("es")}
          className={`${
            language === "es" ? "bg-white text-cyanDark" : "bg-transparent"
          } w-full h-8 flex items-center justify-center font-semibold`}
        >
          <IoLanguage />
          Es
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className={`${
            language === "en" ? "bg-white text-cyanDark" : "bg-transparent"
          } w-full h-8 flex items-center justify-center font-semibold`}
        >
          <IoLanguage />
          En
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
