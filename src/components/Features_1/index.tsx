import { Button } from "../ui/button";

const Features_1 = () => {
  return (
    <div className="max-w-[75vw] mx-auto lg:px-10 sm:px-7">
      <h3 className="my-20 text-5xl font-bold text-center text-black ">
        We optimize marketing for business continuity
      </h3>
      <div className="flex items-center justify-center lg:flex-row sm:flex-col">
        <div className="flex flex-col lg:gap-40 sm:gap-10 justify-center flex-wrap">
          <div className="flex flex-col justify-start items-start gap-2">
            <img src="assets/features-1/Icon.svg" alt="" className="max-h-12" />
            <p className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-black text-xl">
              Toma decisiones estratégicas
            </p>
            <p className="text-gray-400">
              Analiza automáticamente la información de tus clientes y campañas.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <img
              src="assets/features-1/Icon-1.svg"
              alt=""
              className="max-h-12"
            />
            <p className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-black text-xl">
              Reporte automático
            </p>
            <p className="text-gray-400">
              Genera informes detallados de rendimiento y progreso.
            </p>
          </div>
        </div>
        <div className=" lg:block hidden">
          <img
            src="assets/features-1/Illustration.svg"
            alt=""
            className="max-w-[540px]"
          />
        </div>

        <div className="flex flex-col lg:gap-40 sm:gap-10 justify-center flex-wrap">
          <div className="flex flex-col justify-start items-start gap-2">
            <img
              src="assets/features-1/Icon-2.svg"
              alt=""
              className="max-h-12"
            />
            <p className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-black text-xl">
              Full integraciones
            </p>
            <p className="text-gray-400">
              Conecta Cerem con herramientas que ya usas como Google Calendar.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <img
              src="assets/features-1/Icon-3.svg"
              alt=""
              className="max-h-12"
            />
            <p className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-black text-xl">
              Analíticas
            </p>
            <p className="text-gray-400">
              Montes, nascetur ridiculus mus. Donec quam felis,
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-14">
        <Button className="px-8 py-6">Learn more</Button>
      </div>
    </div>
  );
};

export default Features_1;
