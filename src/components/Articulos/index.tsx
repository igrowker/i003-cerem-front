import { Button } from "../ui/button";

const Articulos = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-9 mb-7">
      <h2 className="my-10 text-5xl font-bold text-center text-black gap-4 ">
        Our article on grow & tech
      </h2>
      <div className="flex gap-8 lg:flex-row sm:flex-col">
        <div className="flex flex-col max-w-[351px] gap-4">
          <img src="assets/articles/1.png" className="" alt="" />
          <span className="absolute bg-yellow-400 text-white rounded-md px-3 py-1 mt-2 ml-3">
            Marketing
          </span>
          <p className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-black text-xl">
            Digital Marketing Strategy in 2021
          </p>
          <p className="text-gray-400">
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
            nisi. Nam eget dui. Etiam rhoncus. Maecenas..
          </p>
        </div>
        <div className="flex flex-col max-w-[351px] gap-4">
          <img src="assets/articles/2.png" className="" alt="" />
          <span className="absolute bg-sky-600 text-white rounded-md px-3 py-1 mt-2 ml-3">
            Technology
          </span>
          <p className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-black text-xl">
            Best platform for business and productivity
          </p>
          <p className="text-gray-400">
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
            nisi. Nam eget dui. Etiam rhoncus. Maecenas..
          </p>
        </div>
        <div className="flex flex-col max-w-[351px] gap-4">
          <img src="assets/articles/3.png" className="" alt="" />
          <span className="absolute bg-green-600 text-white rounded-md px-3 py-1 mt-2 ml-3">
            Grow
          </span>
          <p className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-black text-xl">
            Social media can growth your business traffic
          </p>
          <p className="text-gray-400">
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
            nisi. Nam eget dui. Etiam rhoncus. Maecenas..
          </p>
        </div>
      </div>
      <Button className="rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow bg-purple-600 hover:bg-purple-700 px-8 py-7">
        Learn more
      </Button>
    </div>
  );
};

export default Articulos;
