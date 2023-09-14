"use client"
import React, {useState } from 'react'
import { motion,useMotionValueEvent,useScroll } from 'framer-motion'
export default function Menu() {
  const [hidden, setHidden] = useState(false);
  const {scrollY}=useScroll();

useMotionValueEvent(scrollY, "change", (latest) =>{
  const previous=scrollY.getPrevious();
  if(latest>previous && latest>150){
    setHidden(true);
  }
  else{
    setHidden(false);
  }
}
)

  return (
    <motion.nav 
      variants={{
        visible: { y: 0, opacity:1 },
        hidden: { y: "-100%",opacity:0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: "0.2", ease: "easeIn" }}
      className='nav'
    >
      <ul>
      <li><a href=""><h6>Work</h6></a></li>
        <li><a href=""><h6>Clients</h6></a></li>
        <li><a href=""><h6>Services</h6></a></li>
        <li><a href=""><h6>About</h6></a></li>
        <li><a href=""><h6>Contact</h6></a></li>
      </ul>
    </motion.nav>
  )
}
