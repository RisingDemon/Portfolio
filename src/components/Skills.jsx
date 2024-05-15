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
    <div className='h-96 mt-20 p-4 rounded-3xl shadow-[0_1px_9px] mb-7'>
        <div className='w-full flex justify-center items-center text-2xl mt-7'>
            <img className='w-12' src={bulb} alt="" />
            <div><b>Skills Acquired</b><hr className='w-32 border-[#FFE500] border-[1px]'/></div>
        </div>
        <div className='flex justify-center items-center gap-16 mt-10 mb-6'>
            <div className='w-32 h-32 border shadow-[0_0_5px_-2px,0_10px_0_0_#9494F4] rounded-l-lg hover:bg-#9494F4'>
                <img src={webImg} alt="" />
            </div>
            <div className='w-32 h-32 shadow-[0_0_5px_-2px,0_10px_0_0_#9494F4]'>
                <img src={reactImg} alt="" />
            </div>
            <div className='w-32 h-32 shadow-[0_0_5px_-2px,0_10px_0_0_#9494F4] flex justify-center items-center hover:bg-[#9494F4]'>
                <img className='w-24' src={angularImg} alt="" />
            </div>
            <div className='w-32 h-32 shadow-[0_0_5px_-2px,0_10px_0_0_#9494F4]'>
                <img src={firebaseImg} alt="" />
            </div>
            <div className='w-32 h-32 shadow-[0_0_5px_-2px,0_10px_0_0_#9494F4] flex justify-center items-center'>
                <img src={mysqlImg} alt="" />
            </div>
            <div className='w-32 h-32 shadow-[0_0_5px_-2px,0_10px_0_0_#9494F4] flex justify-center items-center rounded-r-lg'>
                <img src={nodeImg} alt="" />
            </div>
        </div>
    </div>
  )
}
