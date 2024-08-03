import React from 'react'
import Image from 'next/image'
import logo from '../Photo/headerlogo.png'
import logo2 from '../Photo/logo2.png'

function NavBar () {
  return (
    <div>
        <div className="max-w-[1440px]  h-[74px] mx-auto flex flex-wrap justify-between items-center">
            <div className="max-w-[219.005px] flex  items-center justify-between">
                <Image src={logo} alt=''className="w-[34.127px] h-[42px] "/>
                <Image src={logo2} alt='' className="w-[169px] item-center h-[22.055px] mx-auto "/>
            </div>
            <div className="md:block hidden">
            <div className='flex  justify-between text-white  xl:max-w-[468px] sm:max-w-[100px] md:max-w-[300px] sm:gap-[10px] md:gap-[25px] lg:gap-[30px] xl:gap-[40px] mx-auto '>
                <a href="" className="text-[#FFF] xl:text-[14px]  hover:text-black ">About</a>
                <a href="" className="text-[#FFF] xl:text-[14px] ">Services</a>
                <a href="" className="text-[#FFF] xl:text-[14px] ">Industries</a>
                <a href="" className="text-[#FFF] xl:text-[14px] ">Portfolio</a>
                <a href="" className="text-[#FFF] xl:text-[14px] ">Blog</a>
            </div>
            </div>
            <div className="md:block hidden">
               <div className="bg-[#8184EB] inline-flex max-h-[40px] rounded-[30px] max-w-[180px] p-[10px]">
                  <button className="text-[#FFF] text-center xl:text-[14px] sm:text-[9px] leading-[18px]">Book Demo</button>
               </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar 