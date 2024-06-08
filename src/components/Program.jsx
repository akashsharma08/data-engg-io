import React from "react";
import programs from "../programs.json";
import check from '../assets/check.png'
const Program = () => {
  return (
    <div className="w-[65%] text-white flex flex-col justify-center py-8 items-center gap-8">
      <div className="text-[2rem] font-semibols">Who is this program for?</div>
      <div className="grid grid-cols-2 gap-4">
        {programs.map((key, index) => {
          return (
            <div className="mentor rounded-2xl bg-gradient-to-r from-[#000609] to-[#002713] p-8 text-justify border-green-400 flex gap-4 justify-center items-start">
              <img className="w-16" src={check} alt="" />
              <div className="flex flex-col justify-center gap-4 items-start">
                <div className="text-[1.5rem]">{key.title}</div>
                <div className="">{key.description}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="px-2 bg-gradient-to-r w-[50%] py-4 from-[#00b85f] to-[#005f91] py-6 rounded-lg font-bold text-[1.2rem]">Apply Now</div>
    </div>
  );
};

export default Program;
