import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen"> {/* Ajuste para centrar */}
      <Hero />
      <div className="integrations flex justify-center items-center w-full">
        <Integrations />
      </div>
    </div>
  );
};

export default HomePage;
