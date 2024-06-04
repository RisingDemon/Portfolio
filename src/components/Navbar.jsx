
import React from "react";
import { useEffect } from "react";
import axios from "axios";

import selfImg from "../assets/self.jpg";
import frame from "../assets/frame.png";
import line from "../assets/lilac dotted arrow.png";
// import "../";

export default function Navbar() {

  const doSomething = async () => {
    console.log("Hello from Navbar");
    const info = {
      prompt: "",
    };
    const arg = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    };
    const response = await axios.post(
      "https://server-portfolio-u9j8.onrender.com/cold-boot",arg
    );
    const result = await response.data;
    console.log(result);
  }
  useEffect( () => {
    doSomething();
  }, []);

  return (
    <>
      <nav className="flex items-center justify-between bg-white p-4 shadow-[0_3px_5px_-1px_slategrey] md:pl-16 md:pr-16">
        {/* Left side: Name of website */}
        <div className="text-black font-bold font-damion text-3xl">Sahil</div>

        {/* Right side: Buttons */}
        <div className="flex items-center">
          <button className="px-2">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.0832 17.5001C32.0832 9.45008 25.5498 2.91675 17.4998 2.91675C9.44984 2.91675 2.9165 9.45008 2.9165 17.5001C2.9165 24.5584 7.93317 30.4355 14.5832 31.7917V21.8751H11.6665V17.5001H14.5832V13.8542C14.5832 11.0397 16.8728 8.75008 19.6873 8.75008H23.3332V13.1251H20.4165C19.6144 13.1251 18.9582 13.7813 18.9582 14.5834V17.5001H23.3332V21.8751H18.9582V32.0105C26.3228 31.2813 32.0832 25.0688 32.0832 17.5001Z"
                fill="black"
              />
            </svg>
          </button>
          <button className="px-2">
            <svg
              className="hover:fill-yellow-500"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5013 11.1251C14.341 11.1251 13.2282 11.586 12.4077 12.4065C11.5872 13.227 11.1263 14.3398 11.1263 15.5001C11.1263 16.6604 11.5872 17.7732 12.4077 18.5937C13.2282 19.4141 14.341 19.8751 15.5013 19.8751C16.6616 19.8751 17.7744 19.4141 18.5949 18.5937C19.4154 17.7732 19.8763 16.6604 19.8763 15.5001C19.8763 14.3398 19.4154 13.227 18.5949 12.4065C17.7744 11.586 16.6616 11.1251 15.5013 11.1251ZM15.5013 8.20842C17.4352 8.20842 19.2898 8.97664 20.6573 10.3441C22.0247 11.7115 22.793 13.5662 22.793 15.5001C22.793 17.434 22.0247 19.2886 20.6573 20.6561C19.2898 22.0235 17.4352 22.7917 15.5013 22.7917C13.5674 22.7917 11.7128 22.0235 10.3453 20.6561C8.97786 19.2886 8.20963 17.434 8.20963 15.5001C8.20963 13.5662 8.97786 11.7115 10.3453 10.3441C11.7128 8.97664 13.5674 8.20842 15.5013 8.20842ZM24.9805 7.84383C24.9805 8.3273 24.7884 8.79097 24.4465 9.13283C24.1047 9.47469 23.641 9.66675 23.1575 9.66675C22.6741 9.66675 22.2104 9.47469 21.8685 9.13283C21.5267 8.79097 21.3346 8.3273 21.3346 7.84383C21.3346 7.36036 21.5267 6.8967 21.8685 6.55483C22.2104 6.21297 22.6741 6.02092 23.1575 6.02092C23.641 6.02092 24.1047 6.21297 24.4465 6.55483C24.7884 6.8967 24.9805 7.36036 24.9805 7.84383ZM15.5013 3.83341C11.8934 3.83341 11.3042 3.84362 9.62567 3.918C8.48234 3.97196 7.71525 4.12508 7.00359 4.40216C6.40803 4.62082 5.86961 4.9713 5.42859 5.42737C4.97214 5.86837 4.62119 6.40677 4.40192 7.00237C4.12484 7.71696 3.97171 8.48258 3.91921 9.62446C3.84338 11.2345 3.83317 11.7974 3.83317 15.5001C3.83317 19.1095 3.84338 19.6972 3.91775 21.3757C3.97171 22.5176 4.12484 23.2861 4.40046 23.9963C4.64838 24.6307 4.94005 25.0872 5.42421 25.5713C5.91567 26.0613 6.37213 26.3545 6.99921 26.5965C7.71963 26.8751 8.48671 27.0297 9.62421 27.0822C11.2342 27.158 11.7971 27.1667 15.4998 27.1667C19.1092 27.1667 19.6969 27.1565 21.3755 27.0822C22.5159 27.0282 23.283 26.8751 23.9961 26.5995C24.5911 26.3797 25.1293 26.0294 25.5711 25.5742C26.0625 25.0842 26.3557 24.6278 26.5978 23.9992C26.8748 23.2817 27.0294 22.5147 27.0819 21.3742C27.1578 19.7657 27.1665 19.2013 27.1665 15.5001C27.1665 11.8922 27.1563 11.303 27.0819 9.62446C27.028 8.48404 26.8734 7.71404 26.5978 7.00237C26.3779 6.4074 26.0276 5.86922 25.5725 5.42737C25.1317 4.97069 24.5933 4.6197 23.9975 4.40071C23.283 4.12362 22.5159 3.9705 21.3755 3.918C19.7669 3.84216 19.204 3.83341 15.4998 3.83341M15.4998 0.916748C19.4621 0.916748 19.9565 0.931331 21.5125 1.00425C23.0642 1.07716 24.123 1.32071 25.0519 1.68237C26.0144 2.05279 26.8253 2.55446 27.6361 3.36383C28.3776 4.09285 28.9514 4.97469 29.3175 5.948C29.6778 6.87696 29.9228 7.93571 29.9957 9.48883C30.0642 11.0434 30.0832 11.5378 30.0832 15.5001C30.0832 19.4624 30.0686 19.9567 29.9957 21.5113C29.9228 23.0645 29.6778 24.1217 29.3175 25.0522C28.9524 26.026 28.3785 26.908 27.6361 27.6363C26.9069 28.3776 26.0251 28.9514 25.0519 29.3178C24.123 29.678 23.0642 29.923 21.5125 29.9959C19.9565 30.0645 19.4621 30.0834 15.4998 30.0834C11.5375 30.0834 11.0432 30.0688 9.48713 29.9959C7.93546 29.923 6.87817 29.678 5.94775 29.3178C4.97406 28.9524 4.09206 28.3785 3.36359 27.6363C2.62192 26.9074 2.04811 26.0255 1.68213 25.0522C1.32046 24.1232 1.07692 23.0645 1.004 21.5113C0.934004 19.9567 0.916504 19.4624 0.916504 15.5001C0.916504 11.5378 0.931087 11.0434 1.004 9.48883C1.07692 7.93571 1.32046 6.87841 1.68213 5.948C2.04706 4.97409 2.62101 4.09201 3.36359 3.36383C4.09227 2.62188 4.97421 2.04802 5.94775 1.68237C6.87671 1.32071 7.934 1.07716 9.48713 1.00425C11.0446 0.935706 11.539 0.916748 15.5013 0.916748"
                fill="black"
              />
            </svg>
          </button>
          <button className="px-2">
            <svg
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.4998 0.916748C13.5847 0.916748 11.6884 1.29396 9.91904 2.02684C8.14971 2.75972 6.54205 3.83392 5.18786 5.18811C2.45296 7.92301 0.916504 11.6323 0.916504 15.5001C0.916504 21.9459 5.10192 27.4147 10.8915 29.3542C11.6207 29.4709 11.854 29.0188 11.854 28.6251V26.1605C7.81442 27.0355 6.954 24.2063 6.954 24.2063C6.28317 22.5147 5.33525 22.0626 5.33525 22.0626C4.00817 21.1584 5.43734 21.1876 5.43734 21.1876C6.89567 21.2897 7.66859 22.6897 7.66859 22.6897C8.93734 24.9063 11.0811 24.2501 11.9123 23.9001C12.0436 22.9522 12.4228 22.3105 12.8311 21.9459C9.59359 21.5813 6.19567 20.3272 6.19567 14.7709C6.19567 13.1522 6.74984 11.8542 7.69775 10.8188C7.55192 10.4542 7.0415 8.93758 7.84359 6.96883C7.84359 6.96883 9.06859 6.57508 11.854 8.45633C13.0061 8.1355 14.2603 7.97508 15.4998 7.97508C16.7394 7.97508 17.9936 8.1355 19.1457 8.45633C21.9311 6.57508 23.1561 6.96883 23.1561 6.96883C23.9582 8.93758 23.4478 10.4542 23.3019 10.8188C24.2498 11.8542 24.804 13.1522 24.804 14.7709C24.804 20.3417 21.3915 21.5667 18.1394 21.9313C18.6644 22.3834 19.1457 23.273 19.1457 24.6292V28.6251C19.1457 29.0188 19.379 29.4855 20.1228 29.3542C25.9123 27.4001 30.0832 21.9459 30.0832 15.5001C30.0832 13.585 29.706 11.6886 28.9731 9.91928C28.2402 8.14995 27.166 6.5423 25.8118 5.18811C24.4576 3.83392 22.85 2.75972 21.0806 2.02684C19.3113 1.29396 17.4149 0.916748 15.4998 0.916748Z"
                fill="black"
              />
            </svg>
          </button>
          {/* <button className="px-2">
            <svg
              width="30"
              height="15"
              viewBox="0 0 30 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 0.5C0.895431 0.5 0 1.39543 0 2.5C0 3.60457 0.895431 4.5 2 4.5H28C29.1046 4.5 30 3.60457 30 2.5C30 1.39543 29.1046 0.5 28 0.5H2ZM2 11C0.895431 11 0 11.8954 0 13C0 14.1046 0.895431 15 2 15H28C29.1046 15 30 14.1046 30 13C30 11.8954 29.1046 11 28 11H2Z"
                fill="black"
              />
            </svg>
          </button> */}
        </div>
      </nav>

      <div className="md:h-96 w-full mt-7 md:mt-0 h-[30rem]">
        <div className="justify-between md:justify-center items-center flex flex-col md:flex-row h-full ">
          <div className="border w-fit h-fit bg-[#595959] text-white md:rounded-[8px_8px_0_8px] rounded-[15px_15px_0_15px] p-2 mr-5 text-xl mb-19">
            Hi, I am <b>Sahil</b> &#128075;
          </div>
          <div className="w-56 md:mt-7 z-10">
            <img src={selfImg} alt="" />
          </div>
          <div className="md:text-xl md:ml-6 md:w-72 md:mt-24 text-xl w-1/2">
            Enthusiastic Web Developer, Coder and Fitness Freak
          </div>

          <div className="md:w-40 w-28 absolute md:left-[63%] left-[52%] md:top-48 top-[26rem]">
            {/* <div className="w-40 relative left-[-162px] top-[34px]"> */}
            <img src={frame} alt="" />
          </div>
          {/* <div className="absolute top-32 left-[25%] w-[618px]">
            <img src={line} alt="" />
          </div> */}
          {/* <div className="text-white bg-black w-fit h-fit p-2 border-[#FFE600] border-2 absolute right-1/3 bottom-72"> */}
          <div className="text-white bg-black w-fit h-fit p-2 border-[#FFE600] border-2 md:absolute left-[62%] top-96 cursor-pointer">
            Get in touch
          </div>
        </div>
        <div className="w-[100%] items-center justify-center hidden md:flex">
          <div className="w-[681px] ml-[-3%] mt-[-21rem]">
            <img src={line} alt="" />
          </div>
        </div>
      </div>

      {/* <div className="h-96 w-full mt-7">
        <div>
          <div className="flex justify-center items-center">
            <div className="border w-fit h-fit bg-[#595959] text-white rounded-[8px_8px_0_8px] p-2 mr-5 text-lg mb-19 ml-40">
              Hi, I am <b>Sahil</b> &#128075;
            </div>
            <div className="w-56 mt-7 z-10">
              <img src={selfImg} alt="" />
            </div>
            <div className="text-xl ml-6 w-72 mt-24">
              Enthusiastic Web Developer, Coder and Fitness Freak
            </div> */}
      {/* <div>
              <div> */}
      {/* <div className="w-40 relative left-[-10rem] top-[2rem]">
              <img src={frame} alt="" />
            </div> */}
      {/* </div>
            </div> */}
      {/* <div className="relative top-[-16rem] left-[26rem] w-[618px]">
              <img src={line} alt="" />
            </div>
            <div className="text-white bg-black w-fit h-fit p-2 border-[#FFE600] border-2 relative left-[59rem] top-[-34rem] bottom-72">
              Get in touch
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
