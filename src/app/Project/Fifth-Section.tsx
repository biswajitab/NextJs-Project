import React from 'react'
import Image from 'next/image'
import image1 from '../Photo/image 1.jpg'
import image2 from '../Photo/image 2.jpg'
import image3 from '../Photo/image 3.jpg'
import image4 from '../Photo/image 4.jpg'
import image5 from '../Photo/image 5.jpg'
import image6 from '../Photo/image 6.jpg'
import image7 from '../Photo/image 7.jpg'
import image8 from '../Photo/image 8.jpg'
import image9 from '../Photo/image 9.jpg'
import image10 from '../Photo/image 10.jpg'
import image11 from '../Photo/image 11.jpg'
import image12 from '../Photo/image 12.jpg'
 
const data =[
    image1 ,
    image2 ,
    image3 ,
    image4 ,
    image5 ,
    image6 ,
    image7 ,
    image8 ,
    image9 ,
    image10 ,
    image11 ,
    image12 ,
    
]
 function Section5() {
  return (
    <div className="mt-[200px]">
        <div className="max-w-[1440px] flex justify-center items-center px-[135px] py-[40px]">
           <div className="max-w-[1170px]">
              <h1 className="text-center text-[#151448] text-[40px] leading-normal font-bold ">Tech Stack We Use</h1>
              <h4 className="text-[#444] text-center text-[18px] font-medium">
                 Here is the tech stack used by our team while offering web app development services:
              </h4>
            <div className=" flex flex-wrap gap-[130px] justify-center ">
               {
                  data.map((photo)=>(
                    <div className=" mt-[45px]">
                       <Image src={photo} alt='' className="w-[70px] h-[70px]"/>
                     </div>
                   ))

               }
            </div>
             
              <h4 className="text-[#333] text-center text-[18px] font-medium mt-[35px] mb-[47px]">
                Looking for an exact cost and time frame estimate for custom web development services?</h4>
            <div className="bg-[#8184EB] py-[12px] px-[30px] mx-auto  rounded-[30px] flex max-w-[164px] justify-center items-center gap-[16px]">
                <button className="text-[18px] text-[#FFF] text-center font-semibold leading-[24px]">Get a Quote</button>
            </div> 
           </div>
        </div>
    </div>
  )
}

export default Section5