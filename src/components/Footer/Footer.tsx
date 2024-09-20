import React from "react";
import BackgroundFooter from "../../../public/assets/backgroundFooter.png";
import { FaFacebookF } from "react-icons/fa";
import { SocialButton } from "../SocialButton/SocialButton";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { helpCenterV2Array, pagesArray, utilityPagesArray } from "./pagesArray";

export const Footer: React.FC = () => {
  return (
    <div
      className="w-full bg-cover bg-center h-screen flex flex-wrap items-end justify-center"
      style={{ backgroundImage: `url(${BackgroundFooter})` }}
    >
      <div className="w-3/4 h-[500px] flex justify-center items-center px-4  ">
        <div className="w-[300px] pr-4 flex flex-col justify-center text-white">
          <h2 className="text-2xl font-bold mb-2">Saasly</h2>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut id
            nisl tellus rhoncus, imperdiet
          </p>
          <div className="flex space-x-4 ">
            <SocialButton
              icon={<AiOutlineGlobal />}
              url="#"
              scaleEffect={true}
            />
            <SocialButton icon={<FaFacebookF />} url="#" scaleEffect={true} />
            <SocialButton icon={<FaTwitter />} url="#" scaleEffect={true} />
            <SocialButton icon={<FaGoogle />} url="#" scaleEffect={true} />
            <SocialButton icon={<FaLinkedinIn />} url="#" scaleEffect={true} />
          </div>
        </div>
        <div className="w-2/3 h-[600px] flex justify-around items-center text-white  ">
          <ul>
            {pagesArray.map((page, index) => (
              <li className="mb-2 hover:underline cursor-pointer" key={index}>
                {page}
              </li>
            ))}
          </ul>
          <ul>
            {helpCenterV2Array.map((page, index) => (
              <li className="mb-2 hover:underline cursor-pointer" key={index}>
                {page}
              </li>
            ))}
          </ul>
          <ul>
            {utilityPagesArray.map((page, index) => (
              <li className="mb-2 hover:underline cursor-pointer" key={index}>
                {page}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full  flex justify-center items-center">
        <div className="w-3/4 h-20  flex justify-center items-center text-sm border-t-2 border-gray-400 text-white">
          <p>
            Copyright Stairs |{" "}
            <span className="text-cyanDark">Designed by Design Mate</span> -
            Powered by <span className="text-cyanDark">Webflow</span>
          </p>
        </div>
      </div>
    </div>
  );
};
