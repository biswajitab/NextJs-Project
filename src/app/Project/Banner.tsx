import React from 'react'
import bgImage from '../Photo/unsplash.png'
import Navbar from './NavBar'

 const  Banner = function() {
   const Content= (
    <>
     <div className="max-w-[1440px] mx-auto">
     <Navbar/>
     <div className="xl:pl-[113px] lg:pl-[100px] md:pl-[50px] sm:pl-[30px] pt-[158px] pb-[233px]">
           <div className="flex flex-col justify-center max-w-[557px]  max-h-[285px] lg:text-start">
              <h1 className="text-[#FFF] md:text-start text-center xl:text-[50px] lg:text-[40px] md:text-[30px] sm:text-[20px] leading-normal">
              Web Application Development Services
              </h1>
              <h4 className="text-[#FFF] font-enter xl:text-[18px] md:text-[14px] pt-[25px] sm:text-[9px] leading-[30px] max-w-[557px] mx-auto text-center md:text-start">
                 Helping Businesses build secure and scalable Web Applications, Portals and Solutions
              </h4>
              <div className="flex pt-[25px] justify-center items-center xl:justify-start">
                <button className="text-lg text-[#FFF] text-[16px] bg-[#8184EB]  rounded-[30px] md:block py-[12px] px-[24px] content-center ">Request a proposal</button>
              </div>
           </div>
     </div>
     </div>
    </>
   )
  return (
    <>
        <div
            style={{ backgroundImage: `url(${bgImage.src})` }}
            className="bg-cover bg-center bg-no-repeat relative block">

           {Content}

          </div>
    </>
  )
}

export default Banner