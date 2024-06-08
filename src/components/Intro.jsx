import React, { useEffect, useState } from "react";
import duo from "../assets/duo.webp";
import microsoft from "../assets/microsoft.svg";
import google from "../assets/google.svg";
import logo from "../assets/logo.svg";
import arrow from "../assets/arrow.svg";

const Intro = () => {
  return (
    <div className=" relative flex justify-center gap-6 px-6  items-start text-white  my-24 w-[65%] ">
      <img src={arrow} className="w-[15rem] absolute -top-[80px] -left-[330px]" alt="" />
      <div className="w-1/2 flex flex-col gap-6">
        <img src={logo} className="w-[30%]" alt="" />
        <div className="text-[2.58rem] leading-none text-left">
          Become A Cloud Data Engineer In 6 Months and crack a role at companies
          like <br /> <p className="text-[2.9rem] text-transparent  bg-gradient-to-r from-[#00b85f] to-[#005f91] bg-clip-text p-2 font-bold ">Google</p>
        </div>
        <div className="text-[1.1rem] text-left">
          Learn from the top 1% in the industry and launch your career in Cloud
          Data Engineering with hands-on projects & job-ready skills with our{" "}
          <span className="italic font-bold">
            in house Placement Assistance
          </span>
        </div>
        <div className="px-2 bg-gradient-to-r from-[#00b85f] to-[#005f91] py-6 rounded-lg font-bold text-[1.2rem]">
          Apply Now
        </div>
        <div className="font-semibold underline">click here to get team discount</div>
      </div>
      <div className="w-1/2 flex flex-col gap-8 justify-center items-center">
        <img src={duo} className="w-[100%] rounded-[33px]" alt="" srcset="" />

        <div className="w-[100%]">
          <div className="flex relative  bg-gradient-to-r from-[#000000] to-[#022808] pt-8 pb-4 w-[100%] rounded-lg border-[#566858] border flex-col justify-center items-center gap-4">
            <div className="px-4 -top-4 left-4 border-[#486a45] border-[1px] absolute bg-gradient-to-r from-[#307d58] to-[#064d74] py-2 rounded-lg">
              Designed by
            </div>
            <div className="text-[1.2rem] font-bold">
              Sanket Singh and Riya Bansal
            </div>
            <div className="flex justify-center gap-2 items-center">
              <img src={google} className="w-[3rem]" alt="" />
              <img src={microsoft} className="w-[5rem]" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
