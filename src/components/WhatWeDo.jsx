import React from "react";
import coding from "../assets/coding.png";
import database from "../assets/database.png";
import frontend from "../assets/frontend.png";
import backend from "../assets/backend.png";

function WhatWeDo() {
  return (
    <div className="mt-20">
      <div className="w-full flex justify-center items-center text-3xl">
        <div>
          <b>What We Do....</b>
          <hr className="h w-32 border-[#FFE500] border-[1px]" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-x-6 gap-y-6 m-auto md:w-2/3 w-[84%] mt-10">
        <div className="w-11/12 m-auto transition transform ease duration-300 hover:scale-110">
          <img src={coding} alt="" />
        </div>
        <div className="w-11/12 m-auto transition transform ease duration-300 hover:scale-110">
          <img src={database} alt="" />
        </div>
        <div className="w-11/12 m-auto transition transform ease duration-300 hover:scale-110">
          <img src={frontend} alt="" />
        </div>
        <div className="w-11/12 m-auto transition transform ease duration-300 hover:scale-110">
          <img src={backend} alt="" />
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
