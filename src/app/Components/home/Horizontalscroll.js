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
      <div className='spaceup'> </div>
     <div className='spaceleft' style={{scrollSnapType:"none",WebkitOverflowScrolling:"touch",overscrollBehavior:"none"}}>

     </div>
        <section>    
            <div ref={targetRef} className='sticky_parent'>
                <div className='sticky' >

                <motion.div className='scroll_section' style={{ x }} transition={{ease:"easeInOut",duration:".2"}}> 
                      <div className='pppphz'>

                      <div className="pahz">
                          <div style={{width:"100vw",height:"100vh",flexDirection:"row",display:"flex"}} >

                          </div>
                        </div>  

                      
                        <div className="pahz">
                        <div style={{width:"100vw",height:"100vh",flexDirection:"row",display:"flex"}} >
                          </div>
                        </div>  
                        
                        <div className="pahz">
                        <div style={{width:"100vw",height:"100vh",flexDirection:"row",display:"flex"}} >

                          </div>
                      </div>
                      <div className="pahz">
                        <div style={{width:"100vw",height:"100vh",flexDirection:"row",display:"flex"}} >
       
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