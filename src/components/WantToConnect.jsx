import React from "react";

export default function WantToConnect() {
  return (
    <div className="mt-8">
      <div className="m m-auto w-2/4 pb-8 shadow-[0_0_9px_-5px]">
        <div className="w-full flex justify-center items-center text-3xl">
          <div>
            <div className="flex items-center ml-9">
              <b>Want to connect with us? </b>
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  x="15.9805"
                  width="58"
                  height="58"
                  transform="rotate(15.9935 15.9805 0)"
                  fill="url(#pattern0_158_154)"
                />
                <defs>
                  <pattern
                    id="pattern0_158_154"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use xlinkHref="#image0_158_154" transform="scale(0.01)" />
                  </pattern>
                  <image
                    id="image0_158_154"
                    width="100"
                    height="100"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </div>
            <div className="text-[#FFC700]">
              <b>Let’s Discuss..</b>
            </div>
          </div>
        </div>
        <div className="text-xl mt-5">
          <input
            className="border-2 border-[#9494F4]  rounded-3xl w-[57%] h-12 pl-4"
            type="text"
            placeholder="Enter your name"
          />
        </div>

        <div className="text-xl mt-5">
          <input
            className="border-2 border-[#9494F4]  rounded-3xl w-[57%] h-12 pl-4"
            type="text"
            placeholder="Enter your email"
          />
        </div>

        <div className="text-xl mt-5">
          <input
            className="border-2 border-[#9494F4]  rounded-3xl w-[57%] h-12 pl-4"
            type="text"
            placeholder="Enter your message"
          />
        </div>

        <div>
          <button className="bg-[#7575c8] text-white w-24 h-8 mt-5 rounded-md hover:bg-[#6161a7]">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
