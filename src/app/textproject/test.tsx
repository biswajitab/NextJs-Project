"use client"
import React,{useState} from 'react'


const Test = () => {
    const [data, SetData]=useState({message1:"",message2:"", message3:""})
    const textChange=(mithun:any)=>{
       const {name , value}=mithun.target;
       SetData((prev)=>{
        return({...prev,[name]:value})
       })
       console.log(data)
    };
    const handleSubmit=(e:any)=>{
        e.preventDefault()
       
    }
  return (
    <div>
        <div className="flex max-w-[768px] flex-col items-center gap-[48px] mx-auto bg-[#FFF] ">
            <div className="flex flex-col items-center gap-[16px] ">
               <h1 className="text-[#000] text-center font-bold text-[48px] leading-[57.6px] mt-[64px] ">Contact us</h1>
               <h4 className="text-center text-[#000] text-[18px] leading-[27px] font-normal mt-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
            </div>
            <div  className="flex flex-col items-center gap-[24px]  w-full">
               <div className="flex flex-col items-start gap-[8px] max-w-[640px] w-full">
                  <p className="text-[#000] text-[16px] font-normal leading-[24px]">Name</p>
                  <div className="flex items-center p-[12px] gap-[8px] mx-auto h-[48px] border-[1px] w-full bg-[#FFF] border-solid border-[#000]">
                    <input type="text" className="w-full" onChange={(e)=>textChange(e)} name="message1"/>
                  </div>
               </div>
               <div className="flex flex-col items-start gap-[8px] mt-[24px] max-w-[640px] w-full">
                     <p className="text-[#000] text-[16px] font-normal leading-[24px]">Email</p>
                     <div className="flex h-[48px] p-[12px] w-full mx-auto items-center gap-[8px] border-[1px] border-solid border-[#000]">
                        <input type="text w-full" onChange={(e)=>textChange(e)} name="message2"/>
                     </div>
                </div>
                <div className="flex flex-col items-start gap-[8px] max-w-[640px] w-full">
                        <p className="text-[#000] text-[16px] font-normal leading-[24px]">Message</p>
                        
                        <textarea className="border-[1px] border-solid border-[#000] w-full flex" rows={4} onChange={(e)=>textChange(e)} name="message3" placeholder="Type your message" />
                    
                </div>
                <div className="flex p-[16px] items-center pag-[12px] mt-[24px] mb-[24px]">
                    <input className="h-[18px] w-[18px] mr-[12px]" type="checkbox"/>
                    <p className="font-Robort text-[18px] font-normal leading-[21px]">I accept the Terms</p>
                </div>
                <button type="submit"  className="flex justify-center items-center gap-[8px] py-[12px] px-[24px] rounded-[19px] border-[1px] border-solid border-[#000] bg-[#000]">
                      <p className="text-[#FFF] font-Roboto text-[16px] font-normal leading-[24px]">Submit</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Test