import { useTranslation } from "react-i18next";

const Features_2 = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:max-w-[90vw]">
      {" "}
      <h3 className="my-20 text-5xl font-bold text-center text-blue-950">
        {t("Facilitamos el rastreo de los análisis de datos.")}
      </h3>
      <div className="flex flex-col gap-20 pb-12">
        {" "}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 lg:gap-40">
          <div className="flex flex-col items-start gap-3 max-w-[400px]">
            <img
              src="assets/features-2/Icon1-l.svg"
              alt="Icon"
              className="h-12"
            />
            <p className="text-2xl font-bold  text-sky-600">
              {t("Análisis en tiempo real")}
            </p>
            <p className="pr-24 text-gray-500">
              {t(
                "Con nuestras capacidades de análisis en tiempo real, podrás monitorear cada aspecto de tus campañas y clientes al instante. Identifica oportunidades de mejora, ajusta tus estrategias sobre la marcha y toma decisiones basadas en datos actualizados."
              )}
            </p>
            <button className="px-6 py-2 mt-4 text-white bg-purple-500 rounded-full hover:bg-purple-600">
              {t("Más info")}
            </button>
          </div>
          <div className="flex items-center">
            <img
              src="assets/features-2/Illustration1-r.svg"
              className="w-auto h-auto max-w-[400px]"
              alt="Illustration"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-10 md:gap-20 lg:gap-40">
          <div className="flex flex-col items-start gap-3 max-w-[400px] relative sm:left-12">
            <img
              src="assets/features-2/Icon2-r.svg"
              alt="Icon"
              className="h-12"
            />
            <p className="text-2xl font-bold  text-sky-600">
              {t("Seguro total")}
            </p>
            <p className="pr-24 text-gray-500">
              {
                "Nuestro sistema Seguro Total garantiza la protección de tus datos y campañas con tecnología de vanguardia. Con monitoreo constante, cifrado avanzado y detección proactiva de amenazas, puedes estar seguro de que la seguridad de tu información está en las mejores manos. "
              }
            </p>
            <button className="px-6 py-2 mt-4 text-white bg-purple-500 rounded-full hover:bg-purple-600">
              {t("Más info")}
            </button>
          </div>
          <div className="flex items-center">
            <img
              src="assets/features-2/Illustration2-l.svg"
              className="w-auto h-auto max-w-[400px] relative right-14"
              alt="Illustration"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 lg:gap-40">
          <div className="flex flex-col items-start gap-3 max-w-[400px]">
            <img
              src="assets/features-2/Icon3-l.svg"
              alt="Icon"
              className="h-12"
            />
            <p className="text-2xl font-bold text-sky-600">
              {t("Plataforma múltiple")}
            </p>
            <p className="pr-24 text-gray-500">
              {t(
                "Nuestra Plataforma Múltiple te ofrece la flexibilidad de gestionar todas tus campañas y clientes desde un solo lugar, sin importar el canal o dispositivo. Integra y supervisa tus acciones en diferentes plataformas, optimizando el alcance y rendimiento de cada estrategia de manera centralizada y eficiente."
              )}
            </p>
            <button className="px-6 py-2 mt-4 text-white bg-purple-500 rounded-full hover:bg-purple-600">
              {t("Más info")}
            </button>
          </div>
          <div className="flex items-center">
            <img
              src="assets/features-2/Illustration3-r.svg"
              className="w-auto h-auto max-w-[400px]"
              alt="Illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features_2;
