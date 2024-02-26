"use client"
 import React from 'react'
import Image from 'next/image'
import icon1 from '../Photo/icon 1.jpg'
import icon2 from '../Photo/icon 2.jpg'
import icon3 from '../Photo/icon 3.jpg'
import icon4 from '../Photo/icon 4.jpg'
const data=[
    {"image":icon1,
    "faqs":"Strategy & Research",
    "about":"Zuca dives into your business model, market challenges and product positioning, and helps you create a product that delivers unique value."
    },
    {
      "image":icon2,
      "faqs":"Development",
      "about":"As a top-notch web and mobile app development company, we have highly skilled teams that stay lean and rapidly deploy customized solutions for each client. "
    },
    {"image":icon3,
    "faqs":"Strategy & Research",
    "about":"Zuca dives into your business model, market challenges and product positioning, and helps you create a product that delivers unique value."
    },
    {"image":icon4,
    "faqs":"Strategy & Research",
    "about":"Zuca dives into your business model, market challenges and product positioning, and helps you create a product that delivers unique value."
    }
]

const Card = () => {
  return (
    <div>
        <div className="max-w-[1440px] mx-auto"> 
            <div className="flex flex-wrap justify-center gap-[20px] mx-auto">
                {
                    <div className="flex flex-wrap justify-center gap-[20px] pt-[60px] pb-[43px] mx-auto">
                    {
                        data!.map((data)=>(
                            <div className="flex max-w-[320px] pt-[24px] pr-[23px] pb-[18px] md:mx-0 pl-[24px] justify-center items-center rounded-[8.021px] bg-[#FFF]" 
                            style={{boxShadow:'0px 4px 20px 0px rgba(0, 0, 0, 0.07)'}}>
                                <div className="max-w-[273px] max-h-[213px] mx-auto">
                                    <Image src={data.image}alt='' className="w-[ 32.084px] h-[ 32.084px] rounded-[8.021px]"/>
                                    <h4 className="text-[#042552] text-start xl:text-[20px] lg:text-[17px] md:text-[13px] sm:text-[9px] leading-[20.855px] pt-[15px] font-bold">{data.faqs}</h4>
                                    <p className="text-[#757B8A] xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[9px] leading-[24.063px] max-w-[273px] pt-[8px] font-normal">{data.about}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                }

            </div>
        </div>
    </div>
  )
}

export default Card