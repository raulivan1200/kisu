"use client"

import Foot from "./Components/Foot";
import Menu from "./Components/Menu";
import Faq from "./Components/home/Faq/Faq";
import LilFaq from "./Components/home/Faq/LilFaq";
import styles from "./styles/Head.module.css"
import { motion } from "framer-motion";
const home = () => {
  return ( <div>
    <div className={styles.toptext}>
      {/*animar linea a linea*/}
    <h1>Kisu is a global branding and UX design agency</h1>

    </div>
    <motion.div >
    <video className="video"  type="video/mp4" muted  loop playsinline="" disablepictureinpicture="" autoPlay preload="metadata">
      <source src="/showreel.mp4" type="video/mp4"/>
    </video>
    </motion.div>
    <Menu/>


    <div className={styles.twodiv}>
    <div className={styles.twchone}>  
    <small>    Based in San Francisco, we strengthen brands through exceptional digital experiences for companies worldwide.
</small>
    </div>
    <div className={styles.twchtwo}>
      <LilFaq/>
    </div>
    </div>
    
    <Faq/>
    <Foot/>
  </div> );
}
 
export default home;