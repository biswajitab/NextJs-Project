import React from 'react'
import Image from 'next/image'
import icorn1 from "../Photo/icon 1.jpg"
import icorn2 from "../Photo/icon 2.jpg"
import icorn3 from "../Photo/icon 3.jpg"
import icorn4 from "../Photo/icon 4.jpg"


const Second2 =[
    { "img":icorn1,
      "faqs":"Strategy & Research",
      "about":"Zuca dives into your business model, market challenges and product positioning, and helps you create a product that delivers unique value."
    },
    {
        "img":icorn2,
        "faqs":"Development",
        "about":"As a top-notch web and mobile app development company, we have highly skilled teams that stay lean and rapidly deploy customized solutions for each client. "
    },
    {
        "img":icorn3,
        "faqs":"Product Design",
        "about":"We deploy cross-functional team made of Strategists, Designers and Developers to help our clients explore what's possible with emerging technologies."
    
    },
    {
        "img":icorn4,
        "faqs":"Quality Assurance",
        "about":"We test in all the iterative stages of product development to create bug-free, reliable, safe and secure solutions."
    }
]

function Section2() {
  return (
    <div>
        <div className="max-w-[1440px] pt-[123px] mx-auto">
            <div className="max-w-[1350px] mx-auto flex flex-col justify-center items-center pt-[46px]  ">
                <h1 className="text-[#333] xl:text-[40px] lg:text-[30px] md:text-[20px] sm:text-[10px] text-center mx-auto font-bold">
                    Web application development process</h1>
                <h4 className="text-[#444] max-w-[601px] mx-auto leading-normal pt-[20px] text-center xl:text-[18px] lg:text-[15px] md:text-[12px] sm:text-[9px] ">
                    Our Solution Development Cycle helps turn your great ideas into profitable business solutions.
                </h4>
                <div className="flex flex-wrap justify-center gap-[20px] pt-[60px] pb-[43px] mx-auto">
                    {
                        Second2!.map((data)=>(
                            <div className="flex max-w-[320px] pt-[24px] pr-[23px] pb-[18px] md:mx-0 pl-[24px] justify-center items-center rounded-[8.021px] bg-[#FFF]" 
                            style={{boxShadow:'0px 4px 20px 0px rgba(0, 0, 0, 0.07)'}}>
                                <div className="max-w-[273px] max-h-[213px] mx-auto">
                                    <Image src={data.img}alt='' className="w-[ 32.084px] h-[ 32.084px] rounded-[8.021px]"/>
                                    <h4 className="text-[#042552] text-start xl:text-[20px] lg:text-[17px] md:text-[13px] sm:text-[9px] leading-[20.855px] pt-[15px] font-bold">{data.faqs}</h4>
                                    <p className="text-[#757B8A] xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[9px] leading-[24.063px] max-w-[273px] pt-[8px] font-normal">{data.about}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section2