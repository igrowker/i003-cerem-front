import React from "react";
import { Button } from "../ui/button";

export const InvitationRegister: React.FC = () => {
  return (
    <div className="w-full h-[300px] flex justify-center items-center ">
      <div className="w-1/2 h-52  flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold">
          Let's get start growing your business
        </h2>
        <div className="w-1/2 h-20 flex justify-center items-center text-center text-gray-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut id
            nisl tellus rhoncus, imperdiet
          </p>
        </div>
        <div className="w-1/2 h-10 flex justify-evenly items-center">
          <Button className="w-40 h-10 bg-violet-600 hover:bg-white hover:text-violet-600 border-[1px] border-violet-600 font-semibold ">
            Register Now
          </Button>
          <Button className="w-40 h-10 bg-white text-violet-600 border-violet-600 border-[1px] font-semibold hover:bg-violet-700 hover:text-white ">
            {" "}
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};
