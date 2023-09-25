"use client"

import Foot from "./Components/Foot";
import Menu from "./Components/Menu";
import Faq from "./Components/home/Faq/Faq";
import LilFaq from "./Components/home/Faq/LilFaq";
import styles from "./styles/Head.module.css"
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { useTransform } from "framer-motion";
import React, { useRef } from "react";
import Scrollcheker from "./Components/home/Scrollchecker";
export default function home() {

  const ref= useRef(null);
  const { scrollY } = useScroll({
    target:ref,
    offset:["start start", "end end"]
  })
  const rotate = useTransform(
    scrollY,
    [0, 100],
    ["75%", "85%"],
    
  )
  const lines = [
    "Kisu is a global ",
    "branding and UX",
    "design agency"
  ];
  const animation = {
        initial: {y: "105%"},
        enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}}),
      }
  return ( 
  <div>
    <div className="space"></div>
    <div className="space"></div>

    {lines.map((line, index) => (
  <div className={styles.lineMask} key={index}>  
    <motion.h1 custom={index} variants={animation} initial="initial" animate={"enter"}>
      {line}
    </motion.h1>
  </div>
))}
    <div className="space"></div>
    <motion.div style={{width:rotate}} className={styles.papa} ref={ref}>
    <video className={styles.video}  type="video/mp4" muted  loop playsinline="" disablepictureinpicture="" autoPlay preload="metadata">
      <source src="/showreel.mp4" type="video/mp4"/>
    </video>
    </motion.div>
    <div className="space"></div>

<div className={styles.ptw}>
<div className={styles.twodiv}>
    <div className={styles.twchone}>  
    <small style={{width:"85%", display:"flex", margin:"0 auto"}}>    Based in San Francisco, we strengthen brands through exceptional digital experiences for companies worldwide.</small>
    </div>
    <div className={styles.twchtwo}>
      <LilFaq/>
    </div>
    </div>
</div>

<div className="space"></div>


<div className={styles.papicon}>
<div class={styles.icons}>
    <div class={styles.col1}><img src="/icons/amazon.svg" alt="Icon 1"/></div>
    <div class={styles.col2}><img src="/icons/shopify.svg" alt="Icon 2"/></div>
    <div class={styles.col3}><img src="/icons/fiverr.svg" alt="Icon 3"/></div>
    <div class={styles.col4}><img src="/icons/upwork.svg" alt="Icon 4"/></div>
    <div class={styles.col5}><img src="/icons/next-js.svg" alt="Icon 5"/></div>
    <div class={styles.col6}><img src="/icons/vercel.svg" alt="Icon 6"/></div>
    <div class={styles.col7}><img src="/icons/html.svg" alt="Icon 7"/></div>
    <div class={styles.col8}><img src="/icons/java.svg" alt="Icon 8"/></div>

</div>
</div>
<div className="space"></div>

<div className="space"></div>

<Scrollcheker/>

<div className="space"></div>

<h3 className="spacel spacesm" style={{lineHeight:"0",margin:"0"}}>FAQ</h3>
    <Faq/>
    <div className="space"></div>
    <div className="space"></div>

  </div> );
}