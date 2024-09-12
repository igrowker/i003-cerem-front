import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Integrations = () => {
  return (
    <div className="flex flex-col justify-center items-center p-8 min-h-screen bg-cover bg-center">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Integrated with Social Media
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white rounded-lg shadow-lg overflow-hidden w-[285px] h-[342px]">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="w-6 h-6 fill-white"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 text-[#006FBA]">Facebook</h3>
            <p className="text-gray-600 text-center px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus dui faucibus eu.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Learn More
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-white rounded-lg shadow-lg overflow-hidden w-[285px] h-[342px]">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-6 h-6 fill-white"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 text-[#006FBA]">Twitter</h3>
            <p className="text-gray-600 text-center px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus dui faucibus eu.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Learn More
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-white rounded-lg shadow-lg overflow-hidden w-[285px] h-[342px]">
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
                className="w-6 h-6 fill-white"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 text-[#006FBA]">Google</h3>
            <p className="text-gray-600 text-center px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus dui faucibus eu.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Learn More
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Integrations;
