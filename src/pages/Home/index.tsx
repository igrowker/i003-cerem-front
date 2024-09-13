import Hero from "@/components/Hero";
import Patrocinadores from "@/components/Patrocinadores";
import Integrations from "@/components/Integrations";
import Features_2 from "@/components/Features_2";


const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen"> {/* Ajuste para centrar */}
      <Hero />
      <Patrocinadores/>
      
      <Features_2/>

      <div className="flex items-center justify-center w-full integrations">
        <Integrations />
      </div>
    </div>
  );
};

export default HomePage;
