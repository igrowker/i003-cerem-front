export default function Hero() {
  return (
    <div className="min-h-screen text-white bg-white">
      <div className="relative isolate">
        {/* Fondo Gradiente */}
        <img
          src="src/assets/BackgroundHero.svg"
          alt="Background"
          className="absolute inset-x-0 top-0 z-[-10] overflow-hidden w-[100vw]"
        />

        {/* Contenido del Hero */}
        <div className="flex flex-col items-center px-4 py-10 text-center sm:py-32 lg:pb-20">
          <h1 className="text-4xl font-bold text-white sm:text-6xl">
            Centraliza y optimiza tu tiempo
          </h1>
          <p className="max-w-2xl mt-6 text-base text-gray-300 sm:text-lg">
            Gestiona campañas, clientes y tareas desde una plataforma integrada
            con IA, diseñada para emprendedores de marketing.
          </p>
          <div className="z-30 flex flex-wrap gap-4 mt-8">
            <a
              href="#"
              className="block px-10 py-5 text-lg font-medium text-white transition-transform duration-300 transform rounded-lg cursor-pointer bg-navy hover:scale-105 hover:shadow-lg"
            >
              <span className="block w-full h-full cursor-pointer">Empieza</span>
            </a>
            <a
              href="#"
              className="block px-10 py-5 text-lg font-medium text-white transition-transform duration-300 transform border rounded-lg cursor-pointer hover:scale-105 hover:shadow-lg"
            >
              <span className="block w-full h-full cursor-pointer">
                Trial <span aria-hidden="true">→</span>
              </span>
            </a>
          </div>

          {/* Dashboard Image */}
          <div className="w-full max-w-6xl">
            <img
              src="src/assets/web_dashboard.svg"
              alt="App screenshot"
              className="relative rounded-md bottom-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
