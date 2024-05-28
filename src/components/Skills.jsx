import React from 'react'
import bulb from '../assets/small doodle lightbulb.png';
import webImg from '../assets/webImg.png';
import mysqlImg from '../assets/mysqlImg.png';
import reactImg from '../assets/reactImg.png';
import angularImg from '../assets/angularImg.png';
import nodeImg from '../assets/nodeImg.png';
import firebaseImg from '../assets/firebaseImg.png';


export default function Skills() {
  return (
    // <div className='h-96 mt-20 p-4 rounded-3xl shadow-[0_1px_9px] mb-7'>
    <div className='md:h-96 h-[40rem] mt-20 md:p-4 py-4 px-8 rounded-3xl shadow-[0_1px_9px] mb-7 md:w-[96%] w-[78%] m-auto'>

        <div className='w-full flex justify-center items-center text-2xl mt-7'>
            <img className='w-12' src={bulb} alt="" />
            <div><b>Skills Acquired</b><hr className='w-32 border-[#FFE500] border-[1px]'/></div>
        </div>
        <div className='md:flex justify-center items-center mt-10 mb-6 grid grid-cols-2 md:gap-16 gap-x-14 gap-y-10'>
            <div className='md:w-32 w-[101px] md:h-32 h-28 border shadow-[0_0_5px_-2px,0_10px_0_0_#9494F4] md:rounded-l-lg hover:bg-#9494F4 flex justify-center items-center'>
                <img className='w-[84%]' src={webImg} alt="" />
            </div>
            <div className='md:w-32 w-[101px] md:h-32 h-28 shadow-[0_0_5px_-2px,0_10px_0_0_#9494F4] flex justify-center items-center'>
                <img className='w-[84%]' src={reactImg} alt="" />
            </div>
            <div className='md:w-32 w-[101px] md:h-32 h-28 shadow-[0_0_5px_-2px,0_10px_0_0_#9494F4] flex justify-center items-center hover:bg-[#9494F4]'>
                <img className='ms:w-24 w-[71%]' src={angularImg} alt="" />
            </div>
            <div className='md:w-32 w-[101px] md:h-32 h-28 shadow-[0_0_5px_-2px,0_10px_0_0_#9494F4] flex justify-center items-center'>
                <img className='w-[84%]' src={firebaseImg} alt="" />
            </div>
            <div className='md:w-32 w-[101px] md:h-32 h-28 shadow-[0_0_5px_-2px,0_10px_0_0_#9494F4] flex justify-center items-center'>
                <img className='w-[84%]' src={mysqlImg} alt="" />
            </div>
            <div className='md:w-32 w-[101px] md:h-32 h-28 shadow-[0_0_5px_-2px,0_10px_0_0_#9494F4] flex justify-center items-center md:rounded-r-lg'>
                <img className='w-[84%]' src={nodeImg} alt="" />
            </div>
        </div>
    </div>
  )
}
