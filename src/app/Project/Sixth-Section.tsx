import React from 'react'

function Section6() {
  return (
    <div className="pt-[100px]">
        <div className="max-w-[460px] mx-auto gap-[50px] flex flex-col justify-center items-center">
            <div className="flex flex-col gap-[10px] max-w-[395px] justify-center items-center">
                <h4 className="text-[#6E73FF] text-center  text-[12px] leading-12px font-medium  ">FREE QUOTATION</h4>
                <h1 className="text-[#151448]  text-center text-[35px] leading-[44px] font-semibold">Get a Free Quotation</h1>
                <h4 className="text-[#444] text-center text-[]19px font-medium leading-[30px] max-w-[340px] flex">Don't Worry Your Data and Business Ideas Are Safe With Us.</h4>
            </div>
            <div className="flex flex-col items-start  gap-[16px] pt-[25px] pl-[25px] pr-[25px] pb-[30px] mx-auto bg-[#FFF] rounded-[16px] max-w-[460px]"
            style={{boxShadow:'0px 4px 20px 0px rgba(0, 0, 0, 0.08)'}}>
               <div className="flex  flex-col gap-[16px] bg-[#FFF]">
                   
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                         <div className=" flex flex-col items-start gap-[4px]">
                            <h4 className="text-[#515458] text-[12px] font-medium ">First name</h4>
                            <div className="flex max-w-[190px] pr-[73px] pl-[12px] pt-[12px] pb-[12px] border-[1px] border-solid border-[#B7BFC7] items-center rounded-[8px]  bg-[#FFF]">
                              <input type="text" className="text-[#575757] text-[14px] font-normal leading-[24px]" placeholder="enter first name"/>
                            </div>
                         </div>
                         <div className=" flex flex-col items-start gap-[4px]">
                            <h4 className="text-[#515458] text-[12px] font-medium">Last name</h4>
                            <div className="flex w-[190px] pr-[73px] pl-[12px] pt-[12px] pb-[12px] border-[1px] border-solid border-[#B7BFC7] items-center rounded-[8px]  bg-[#FFF]">
                              <input type="text" className="text-[#575757] text-[14px] font-normal leading-[24px]" placeholder="enter first name"/>
                            </div>
                         </div>
                    </div>
                  
                    <div className="flex flex-col max-w-[400px]  items-start gap-[4px]">
                      <h4 className=" text-[#515458] text-[12px] font-medium">Email</h4>
                      <div className="flex w-full sm:w-[100%]  py-[12px] px-[31px] pl-[12px] rounded-[8px] border-[1px] border-solid border-[#B7BFC7] bg-[#FFF]">
                        <input type="text" className="text-[#575757] text-[14px] leading-[24px] font-normal w-full" placeholder="enter email address" />
                      </div>
                    </div>
                    <div className="flex flex-col  items-start gap-[4px]">
                         <h4 className="text-[#515458] text-[12px] font-medium">Your message</h4>
                         <div className="flex w-full pt-[12px] pr-[31px] pb-[45px] pl-[12px] items-center rounded-[8px] border-[1px]  border-solid border-[#B7BFC7] bg-[#FFF]" >
                              <input type="text" className="text-[#575757] text-[14px] font-normal w-full leading-[24px]"  placeholder="enter your message"/>
                         </div>
                    </div>
                    <div className="flex pt-[8px] items-start flex-col gap-[18px]">
                        <h3 className="text-[#2C3238] text-[16px] font-medium items-start">What are you more interested in:</h3>
                        <div className="max-w-[329px] lg:flex flex-cols justify-center  items-start">
                             <div className="flex items-center gap-[8px]">
                               <input type="checkbox" className="h-[20px] w-[20px]" />
                               <input type="text" className="text-[14px] font-normal leading-[22.4px]" placeholder="Software Development" />
                             </div>
                             <div className="flex items-center gap-[8px]">
                                 <input type="checkbox" className="h-[20px] w-[20px] bg-[#8184EB] rounded-[4px]" />
                                 <h4 className="text-[#000] text-[14px] leading-[22.4px] font-normal">Web Design</h4>
                             </div>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center gap-[10px] max-w-[144px]  rounded-[24px] bg-[#8184EB] mt-[16px] px-[20px] py-[10px]">
                        <h3 className="text-[#FFF] text-[14px] font-semibold leading-[24px]">Book my Demo</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section6