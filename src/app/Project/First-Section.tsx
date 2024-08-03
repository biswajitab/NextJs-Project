import React from 'react'
import Image from 'next/image'
import frame from '../Photo/frame.png'

function Section1() {
  return (
    <div className="pt-[120px]">
        <div className="max-w-[1440px]  md:flex h-auto ">
            <div className=" bg-cover bg-no-repeat md:w-6/12 ">
              <Image src={frame} className="" alt=''/>
           </div>
           <div className=" md:w-6/12">
           <div className="pt-[50px]  justify-center max-w-[668px] mx-auto item-center">
              <h1 className="text-[#151448] xl:text-[40px] max-w-[678px] lg:text-[30px] md:text-[35px] sm:text-[30px] xl:text-start sm:leading-normal md:leading-normal font-bold">
                Build next-gen web applications</h1>
                <h2 className="xl:text-[18px] lg:text-[15px] xl:text-start md:text-[12px] sm:text-[9px] max-w-[678px] font-medium pt-[20px] text-[#444]">
                  We provide end-to-end web app development services, tailored exclusively to solve your unique business challenges.</h2>
                  <h4 className="xl:text-[16px] xl:leading-[30px] lg:text-[14px] pt-[20px] mx-auto lg:leading-[30px] md:text-[11px] md:leading-[25px] sm:text-[8px] sm:leading-[20px] text-[#757B8A]">
                    We use the latest technologies such as PHP, Web 2.0, HTML, Joomla, WordPress, Drupal, Magento and OSCommerce to create responsive and tailor-made web applications for your business. Our experienced team leverages the dynamism of PHP and combines it with database languages such as MySQL, HTML, CSS, JavaScript, PHP Code. We use frameworks such as ZEND, Codeigniter, Laravel, Yii, and CakePHP to create products that work fluidly across platforms and devices
                  </h4>
           </div>
           </div>
        </div>
    </div>
  )
}

export default Section1