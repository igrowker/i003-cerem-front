import React from "react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

const Articulos = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center gap-9 mb-7">
      <h2 className="my-10 text-5xl font-bold text-center text-black gap-4 ">
        {t("Nuestro artículo sobre crecimiento y tecnología")}
      </h2>
      <div className="flex gap-8 lg:flex-row sm:flex-col">
        <div className="flex flex-col max-w-[351px] gap-4">
          <img src="assets/articles/1.png" className="" alt="" />
          <span className="absolute bg-yellow-400 text-white rounded-md px-3 py-1 mt-2 ml-3">
            Marketing
          </span>
          <p className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-black text-xl">
            {t("Estrategia de marketing digital en 2021")}
          </p>
          <p className="text-gray-400">
            {t(
              "Nuestro artículo sobre crecimiento y tecnología explora las tendencias más importantes en estrategias de marketing digital para el 2021. Descubre cómo las nuevas tecnologías y enfoques pueden ayudarte a maximizar el alcance de tus campañas y a conectar con tu audiencia de manera más efectiva."
            )}
            .
          </p>
        </div>
        <div className="flex flex-col max-w-[351px] gap-4">
          <img src="assets/articles/2.png" className="" alt="" />
          <span className="absolute bg-sky-600 text-white rounded-md px-3 py-1 mt-2 ml-3">
            Technology
          </span>
          <p className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-black text-xl">
            {t("La mejor plataforma para negocios y productividad.")}
          </p>
          <p className="text-gray-400">
            {t(
              "La mejor plataforma para negocios y productividad. Con herramientas integradas de gestión y análisis, nuestra plataforma te permite optimizar cada aspecto de tus operaciones comerciales, mejorando la eficiencia y los resultados para que puedas concentrarte en lo que realmente importa."
            )}
          </p>
        </div>
        <div className="flex flex-col max-w-[351px] gap-4">
          <img src="assets/articles/3.png" className="" alt="" />
          <span className="absolute bg-green-600 text-white rounded-md px-3 py-1 mt-2 ml-3">
            Grow
          </span>
          <p className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-black text-xl">
            {t(
              "Las redes sociales pueden hacer crecer el tráfico de su negocio"
            )}
          </p>
          <p className="text-gray-400">
            {t(
              "Las redes sociales pueden impulsar el crecimiento de tu negocio. Aprende cómo aprovechar el potencial de cada plataforma para aumentar el tráfico, mejorar la interacción con tus seguidores y generar nuevas oportunidades de negocio de forma consistente y sostenible."
            )}
          </p>
        </div>
      </div>
      <Button className="rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow bg-purple-600 hover:bg-purple-700 px-8 py-7">
        {t("Más info")}
      </Button>
    </div>
  );
};

export default Articulos;
