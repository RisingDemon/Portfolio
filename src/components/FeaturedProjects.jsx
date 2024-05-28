import React from "react";
import { ThreeFiber } from "./ThreeFiber";
import { ThreeFiberSm } from "./ThreeFiberSm";

// import "../index.css";

export default function FeaturedProjects() {
  return (
    <div className="mt-20 w-full h-[700px]">
      <div className="w-full flex justify-center items-center text-3xl">
        <div>
          <b>Featured Projects....</b>
          <hr className="h w-32 border-[#FFE500] border-[1px]" />
        </div>
      </div>
      <div className="w-full h-[700px] md:block hidden">
        <ThreeFiber />
      </div>
      <div className="w-full h-[700px] md:hidden">
        <ThreeFiberSm/>
      </div>
    </div>
  );
}
