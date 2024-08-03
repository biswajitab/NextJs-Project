import React from 'react'
import header from '../Photo/headerlogo.png'
import logo from '../Photo/logo 3.jpg'
import Image from 'next/image'
import facebook from '../Photo/facebook.png'
import linked from '../Photo/linkedin.png'
import twitter from '../Photo/twitter.png'
import insta from '../Photo/instagram.png'

function Section7() {
  return (
    <div className="mt-[95px]">
        <div className="max-w-[1440px] flex flex-wrap  mb-[69px] mx-auto justify-center">

           <div className="flex flex-col lg:items-start items-center mt-[50px]">
              <div className="max-w-[219.005px] flex justify-center items-center">
                 <Image src={header} alt='' className="w-[34.127px] h-[42px]"/>
                 <Image src={logo} alt='' className="w-[169.816px] h-[22.055px]"/>
              </div>
              <div className="flex flex-col lg:items-start items-center">
                 <p className="text-[#2C3238] flex  items-center mx-auto xl:text-[16px] lg:text-[16px] md:text-[13px] sm:text-[9px] leading-[24px] font-normal mt-[21px] max-w-[306px]">
                    Full stack mobile (iOS, Android) and web app design and development agency</p>
              </div>
              <div className="max-w-[198px]  mt-[25px] flex justify-center items-center px-[24px] py-[12px] flex-col gap-[16px] rounded-[30px] border-[1px] border-solid border-[#8184EB] bg-[#8184EB]">
                  <p className="text-[#FFF] text-[16px] font-semibold leading-[24px]">Book Consultation</p>
              </div>
           </div>
        
           <div className="lg:flex mt-[50px] gap-[30px] mx-auto max-w-[666px] block lg:items-start items-center ">
              <div>
                 <h1 className="text-[#042552] text-[18px] font-bold leading-[21.6px] mb-[18px]">About</h1>
                 {["Our Story","Benefits","Team","Careers"].map((data,index:number)=>(
                     <h4 className="text-[#2C3238] text-[16px] leading-[24px] font-normal mb-[16px]">{data}</h4>
                 ))
                 }
              </div>
              <div>
                <h1 className="text-[#042552] text-[18px] font-bold leading-[21.6px] mb-[18px]">Services</h1>
                {["Email Marketing","Campaigns","Branding","Offline"].map((data,index:number)=>(
                    <h4  className="text-[#2C3238] text-[16px] leading-[24px] font-normal mb-[16px]">{data}</h4>
                ))}
              </div>
              <div>
                 <h1 className="text-[#042552] text-[18px] font-bold leading-[21.6px] mb-[18px]">Industries</h1>
                 {["Email Marketing","Campaigns","Branding","Offline"].map((data,index:number)=>(
                    <h4  className="text-[#2C3238] text-[16px] leading-[24px] font-normal mb-[16px]">{data}</h4>
                ))}
              </div>
              <div>
                  <h1 className="text-[#042552] text-[18px] font-bold leading-[21.6px] mb-[18px]">Portfolio</h1>
                  {["Email Marketing","Campaigns","Branding","Offline"].map((data,index:number)=>(
                    <h4  className="text-[#2C3238] text-[16px] leading-[24px] font-normal mb-[16px]">{data}</h4>
                ))}
              </div>
              <div>
                  <h1 className="text-[#042552] text-[18px] font-bold leading-[21.6px] mb-[18px]">Blog</h1>
                  {["FAQs","Contact Us"].map((data,index:number)=>(
                    <h4  className="text-[#2C3238] text-[16px] leading-[24px] font-normal mb-[16px]">{data}</h4>
                ))}
              </div>
           </div>
            <div className="max-w-[180px] mt-[50px]">
               <h4 className="text-[#042552] text-[18px] leading-[24px] font-bold mb-[29px]">Follow Us</h4>
               <div className=" flex  max-w-[180px] ">
                  <Image src={facebook} alt='' className="w-[30px] mr-[20px] h-[30px]"/>
                  <Image src={linked} alt='' className="w-[30px] mr-[20px] h-[30px]"/>
                  <Image src={twitter} alt='' className="w-[30px] mr-[20px] h-[30px]"/>
                  <Image src={insta} alt='' className="w-[30px] h-[30px]"/>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Section7