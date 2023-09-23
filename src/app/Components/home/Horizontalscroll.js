"use client";
import Image from "next/image";
import Imkids from "../../../../public/Portfolio/imagigids.jpg";
import Imkidsf from "../../../../public/Portfolio/imagikco.jpg";
import Imkidsg from "../../../../public/Portfolio/Imagikids.jpg";
import Ssys from "../../../../public/Portfolio/System.jpg";
import Ssysf from "../../../../public/Portfolio/sale system.jpg";
import bills from "../../../../public/Portfolio/billsp.jpg";
import billsf from "../../../../public/Portfolio/billspco.jpg";
import billsg from "../../../../public/Portfolio/billspl.jpg";
import billsh from "../../../../public/Portfolio/billspgrey.jpg";
import woff from "../../../../public/Portfolio/woffles.jpg";
import woffh from "../../../../public/Portfolio/wofflescolor.jpg";
import woffg from "../../../../public/Portfolio/wofflesdetail.jpg";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import React from "react";


function Scroll() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset:["start start","end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);

  return (
      <>
      <div className='spaceup'>
        
      </div>
     <div className='spaceleft' style={{scrollSnapType:"none",WebkitOverflowScrolling:"touch",overscrollBehavior:"none"}}>

     </div>
        <section>    
            <div ref={targetRef} className='sticky_parent'>
                <div className='sticky' >
                <motion.div className='scroll_section' style={{ x }} transition={{ease:"easeInOut",duration:".2"}}> 
                      <div className='pppphz'>

                      <div className="pahz">
                          <div className="hzc">
                             <Image src={woff} alt="water" placeholder='blur'  width={0} height={0} sizes="(max-width: 768px) 360px, (max-width: 1200px) 480px, (min-width: 1200px) 720px, "  className="imc"/>
                            <Image src={woffh} alt="water" placeholder='blur' width={0} height={0}  sizes="(max-width: 768px) 360px, (max-width: 1200px) 480px, (min-width: 1200px) 720px, "  className="imc"/>
                          </div>
                          <div className='hzc'>    
                        <Image src={woffg} alt="aiu" placeholder='blur' width={0} height={0} sizes="(max-width: 768px) 360px, (max-width: 1200px) 480px, (min-width: 1200px) 720px, " className='imc'/>
                          </div>
                        <div className='texthz'>  
                        <h5>Woffles</h5>
                        <p>
                        A waffle restaurant was in need of a new website, and we engaged in a thorough consultation to understand their requirements and goals. Employing the latest and fastest technologies, we crafted a cutting-edge design and developed a highly optimized website for search engines. As a result of our work, the restaurant experienced a remarkable 30% increase in sales. 📈 Our collaboration proved instrumental in their success, and we take pride in delivering impactful solutions to our clients.
                        </p>
                        </div>
                        </div>  

                      
                        <div className="pahz">
                          <div className="hzc">

                             <Image src={bills} placeholder='blur' alt="water" width={0} height={0}  sizes="(max-width: 768px) 360px, (max-width: 1200px) 480px, (min-width: 1200px) 720px, "  className="imc"/>
                            <Image src={billsf} placeholder='blur' alt="water" width={0} height={0}  sizes="(max-width: 768px) 360px, (max-width: 1200px) 480px, (min-width: 1200px) 720px, "  className="imc"/>
                            </div>
                            <div className="hzc">
                         <Image src={billsg} placeholder='blur' alt="aiu" width={0} height={0}  sizes="(max-width: 768px) 360px, (max-width: 1200px) 480px, (min-width: 1200px) 720px, "  className='imc'/>
                        <Image src={billsh} placeholder='blur' alt="aiu" width={0} height={0}  sizes="(max-width: 768px) 360px, (max-width: 1200px) 480px, (min-width: 1200px) 720px, "  className='imc'/>
                          </div>
                        <div className='texthz'>  
                        <h5>Bill splitter</h5>
                        <p>
                        A company sought our expertise to develop a bill-splitting system for their employees. Leveraging React, we created a visually captivating and intuitive UI/UX design with animated elements. Our focus on security resulted in implementing extra layers of protection, ensuring data integrity and confidentiality. The system's success led to enhanced operational efficiency, significant time and cost savings, and heightened user satisfaction. Our commitment to delivering cutting-edge solutions solidified our relationship with the client, making us a trusted partner for future endeavors.
                        </p>
                        </div>
                        </div>  

                       
                        <div className="pahz">
                          <div className="hzc">
                             <Image src={Ssys} placeholder='blur' alt="water" width={0} height={0}  sizes="(max-width: 768px) 360px, (max-width: 1200px) 480px, (min-width: 1200px) 720px, "  className="imc"/>
                            <Image src={Ssysf} placeholder='blur' alt="water" width={0} height={0}  sizes="(max-width: 768px) 360px, (max-width: 1200px) 480px, (min-width: 1200px) 720px, "  className="imc"/>
                          </div>
                        <div className='texthz'>  
                        <h5>Sales System</h5> 
                        <p>          
                We developed a comprehensive account, sales, payment, and invoice management system. The user interface (UI) and user experience (UX) were carefully designed to ensure ease of use across both computers and smartphones, leveraging React and Next.js for optimal performance. The system's robust security and reliability delighted the client, leading to its resounding success. We take pride in delivering a transformative solution that saves time and money while providing a seamless experience for our valued clients. 💼
                          </p>
                        </div>
                        </div>  
                        
                        <div className="pahz">
                          <div className="hzc">
                             <Image src={Imkids} placeholder='blur' alt="water" width={0} height={0}  sizes="(max-width: 768px) 360px, (max-width: 1200px) 480px, (min-width: 1200px) 720px, "  className="imc"/>

                            <Image src={Imkidsf} placeholder='blur' alt="water" width={0} height={0}  sizes="(max-width: 768px) 360px, (max-width: 1200px) 480px, (min-width: 1200px) 720px, "  className="imc"/>
                          </div>
                          <div className='hzc'>
                         <Image src={Imkidsg} placeholder='blur' alt="aiu" width={0} height={0}  sizes="(max-width: 768px) 360px, (max-width: 1200px) 480px, (min-width: 1200px) 720px, "  className='imc'/>
                          </div>
                        <div className='texthz'>  
                        <h5>Imagi Kids</h5>
                        <p>
                        We developed a cutting-edge mobile and web application for a company, enabling them to find the perfect babysitters. Utilizing React Native, we ensured a seamless and user-friendly experience across both smartphones and computers, incorporating top-notch UX/UI designs. The application's robust security measures safeguarded sensitive data, ensuring trust and reliability. Through the implementation of CRUD functionalities, users could conveniently manage their nanny search process. The client's satisfaction with the final outcome was evident, as the application became a tremendous success. We take pride in having helped our client create a powerful tool to find the ideal caregiver for their children.
                        </p>
                        </div>
                        </div>  

                      </div>
                    </motion.div>
                </div>
            </div>
        </section>
        </>
  )
}

export default Scroll