import Hero from "@/components/Hero";
import { Sidebar } from "../../components/Sidebar/Sidebar";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="w-full h-screen bg-white ">
        <Sidebar />
      </div>
    </>
  );
};

export default HomePage;
