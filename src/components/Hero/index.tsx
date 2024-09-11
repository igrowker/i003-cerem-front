import { useState } from "react";
// Define a type for navigation items
type NavItem = {
  name: string;
  href: string;
};

const navigation: NavItem[] = [
  { name: "Inicio", href: "#" },
  { name: "Nosotros", href: "#" },
  { name: "Funcionalidades", href: "#" },
  { name: "Integraciones", href: "#" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

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
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#"
              className="px-10 py-5 text-lg font-medium text-white rounded-lg bg-navy"
            >
              Empieza
            </a>
            <a
              href="#"
              className="px-10 py-5 text-lg font-medium text-white border rounded-lg"
            >
              Trial <span aria-hidden="true">→</span>
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
