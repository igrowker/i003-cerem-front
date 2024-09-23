import React from "react";
import { Button } from "../ui/button";

export const InvitationRegister: React.FC = () => {
  return (
    <div className="w-full  flex justify-center items-center  bg-sky-100 ">
      <div className="w-full md:w-3/4 lg:w-1/2 min-h-52  flex flex-col justify-center items-center relative top-20 md:top-10 z-50">
        <h2 className=" md:text-xl lg:text-3xl xl:text-4xl font-bold mb-3 text-cyanDark">
          Let's get start growing your business
        </h2>
        <div className="w-1/2 h-20 flex justify-center items-center text-center text-gray-600 mb-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut id
            nisl tellus rhoncus, imperdiet
          </p>
        </div>
        <div className="w-3/4 xl:w-1/2 h-10 flex justify-evenly items-center">
          <Button className="md:w-40 md:h-10 bg-violet-600 hover:bg-white hover:text-violet-600 border-[1px] border-violet-600 font-semibold ">
            Register Now
          </Button>
          <Button className="md:w-40 md:h-10 bg-white text-violet-600 border-violet-600 border-[1px] font-semibold hover:bg-violet-700 hover:text-white ">
            {" "}
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};
