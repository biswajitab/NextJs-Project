import React from 'react'
import Image from 'next/image'
import icon1 from '../Photo/Group 1.png'
import icon2 from '../Photo/Group 2.png'
import icon3 from '../Photo/Group 3.png'
import unflash from '../Photo/unflash fourth.png'

const data =[
    {    "img":icon1,
        "efc":"A Quality-First Approach",
        "about":"Our team is capable of delivering immersive web experiences, magnifying digital transformation"
    },
    {    
        "img":icon2,
        "efc":"Steering Web Complexities",
        "about":"Get your hands on world-class web apps that are capable of driving market disruption"
    },
    {   
        "img":icon3,
        "efc":"Multiple Engagement Model",
        "about":"Choose your business model as per your budget, essentialities and requirements"
    }
]

export function Section4() {
  return (
    <div className="mt-[100px]">
       <div className="max-w-[1440px] bg-[#0B233E] justify-center items-center mx-auto">
         <div className="max-w-[1245.473px]  pt-[55px] mx-auto justify-center md:flex">
              <div className=" max-w-[547px] mx-auto justify-center items-center mr-[100px]">
                 <h1 className="text-[#FFFFFF] xl:text-[40px] lg:text-[30px] md:text-[30px] sm:text-[20px] leading-[50px] font-bold text-start">Zuca’s Assurance as a Web App Development Company</h1>
                  {
                    data.map((demo)=>(
                         <div className="flex pt-[30px]">
                           <div>
                                <Image src={demo.img} alt='' className="h-[29px] w-[29px]"/>
                           </div>
                            <div className="pl-[15px]">
                                <h1 className="text-[#FFF] font-semibold xl:text-[18px] lg:text-[15px] md:text-[12px] sm:text-[9px]">{demo.efc}</h1>
                                <h4 className="text-[#FFF] max-w-[497px] text-[16px] leading-[30px] font-normal">{demo.about}</h4>
                            </div>
                            
                         </div>
                    ))
                  }
              </div>
              <div className="bg-cover bg-no-repeat h-auto">
                 <Image src={unflash} alt='' className=" rounded-[5.266px]"
                 style={{boxShadow:'0px 4.213px 31.595px 0px rgba(0, 0, 0, 0.10)'}}/>
              </div>
         </div>
         <div className="pt-[30px] pb-[35px]">
            <div className="bg-[#8184EB]  max-w-[174px] xl:ml-[100px] md:ml-[100px]  py-[12px] px-[30px] flex  gap-[16px] rounded-[30px]">
              <button className="text-[#FFF] text-center text-[18px] leading-[24px] font-semibold">Work with us</button>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Section4