import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full" />
          <span className="text-2xl font-bold">CEREM</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:underline">
            Inicio
          </a>
          <a href="#" className="hover:underline">
            Nosotros
          </a>
          <a href="#" className="hover:underline">
            Funcionalidades
          </a>
          <a href="#" className="hover:underline">
            Integraciones
          </a>
        </nav>
        <div className="space-x-4">
          <Button variant="ghost" className="text-white hover:text-teal-200">
            Inicia sesión
          </Button>
          <Button
            variant="outline"
            className="bg-teal-500 text-white hover:bg-teal-400"
          >
            Registrarse
          </Button>
        </div>
      </header>
    </>
  );
}

export default App;
