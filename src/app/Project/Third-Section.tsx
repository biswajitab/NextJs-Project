import React from 'react'
import Image from 'next/image'
import fr1 from '../Photo/fr 1.jpg'
import fr2 from '../Photo/fr 2.jpg'
import fr3 from '../Photo/fr 3.jpg'
import fr4 from '../Photo/fr 4.jpg'
import fr5 from '../Photo/fr 5.jpg'
import fr6 from '../Photo/fr 6.jpg'
import fr7 from '../Photo/fr 7.jpg'
import fr8 from '../Photo/fr 8.jpg'
import truck from '../Photo/Truck Transportation 1.jpg'


export function Section3() {
  return (
    <div className="pt-[74px]">
        <div className="max-w-[1440px] flex justify-center mx-auto items-center px-[40px] py-[60px]">
            <div className="max-w-[1320px]">
                <div className="flex justify-center items-center flex-col gap-[20px]">
                     <h1 className="text-[#151448] max-w-[675px] font-bold text-center xl:text-[40px] xl:leading-[50px] lg:text-[35px] lg:leading-[45px] mx-auto">
                       Industries We Serve As a Web App Development Company</h1>
                       <h4 className="max-w-[652px] text-[#444] text-center xl:text-[18px] md:text-[13px] pb-[60px] mx-auto">
                        Our web application development services vary across but are not limited to:</h4>
                </div>
                <div className="flex justify-between flex-wrap max-w-[1320px] bg-[#FFF]"
                style={{boxShadow:'0px 3px 10px 0px rgba(0, 0, 0, 0.08)'}}>
                    <div className="bg-[#E1E1FF] flex flex-col max-w-[220px] mx-auto rounded-[15px]">
                         <div className="flex flex-col max-w-[169px] justify-between mt-[50px]  mr-[28px] ml-[23px] mb-[50px] ">
                             <div className="flex mb-[39px]">
                                <Image src={fr1} alt='' className="w-[30] h-[25.22px]"/> <p className="text-[#8184EB] text-[15px] text-center ml-[10px]">Healthcare</p>
                             </div>
                             <div className="flex mb-[39px]">
                                <Image src={fr2} alt=''className="w-[30] h-[25.22px]" /> <p className=" text-[15px] text-center ml-[10px]">Fintech</p>
                              </div>
                              <div className="flex mb-[39px]">
                                <Image src={fr3} alt='' className="w-[30] h-[25.22px]" /> <p className=" text-[15px] text-center ml-[10px]" >Manufacturing</p>
                              </div>  
                              <div className="flex ]">
                                 <Image src={fr4} alt='' className="w-[30] h-[25.22px]" /> <p className=" text-[15px] text-center ml-[10px]">Education</p>
                              </div>
                         </div>
                    </div>
                    <div className=" flex col justify-center items-center">
                         <h1 className="justify-center max-w-[832px] mx-auto text-justify px-[24px] text-[#757B8A] text-[16px] leading-[40px] pt-[35px] pb-[75px]">
                            As a web app development company, we offer top-notch medical and pharmaceutical app development services to enterprises across the world. Our expertise in the custom web application development field enables us to deliver comprehensive healthcare software development services  such as Practice Management Systems (PMS) and Electronic Health Records (EHR) systems, telemedicine platforms, billing, insurance verification software tools, etc., capable of meeting your custom business requirements. </h1>
                    </div>
                    <div className="bg-[#E1E1FF] flex flex-col max-w-[220px] sm:max-w-[180px] mx-auto rounded-[15px]">
                         <div className="flex flex-col max-w-[169px] mt-[50px] md:w-[140px] mx-auto mr-[28px] ml-[23px] mb-[50px] ">
                             <div className="flex pb-[39px]">
                                <Image src={fr5} alt='' className="w-[30] h-[25.22px]"/> <p className=" text-[15px] text-center ml-[10px]">Healthcare</p>
                             </div>
                             <div className="flex pb-[39px]">
                                <Image src={fr6} alt=''className="w-[30] h-[25.22px]" /> <p className=" text-[15px] text-center ml-[10px]">Fintech</p>
                              </div>
                              <div className="flex pb-[39px]">
                                <Image src={fr7} alt='' className="w-[30] h-[25.22px]" /> <p className=" text-[15px] text-center ml-[10px]" >Manufacturing</p>
                              </div>  
                              <div className="flex ">
                                 <Image src={fr8} alt='' className="w-[30] h-[25.22px]" /> <p className=" text-[15px] text-center ml-[10px]">Education</p>
                              </div>
                         </div>
                    </div>
                </div>
                <div className="pt-[30px]">
                   <div className="bg-[#8184EB] py-[12px] mx-auto max-w-[194px] px-[40px] flex justify-center items-center pap-[16px] rounded-[30px]">
                     <button className="text-[#FFF] text-center text-[18px] leading-[24px] font-semibold">Work with us</button>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section3