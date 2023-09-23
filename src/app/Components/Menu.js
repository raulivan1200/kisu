"use client"
import React, {useState } from 'react'
import { motion,useMotionValueEvent,useScroll } from 'framer-motion'
import styles from "../styles/Head.module.css"
import open from "../../../public/icons/open.svg"
import close from "../../../public/icons/close.svg"
import Image from 'next/image'
import { AnimatePresence } from 'framer-motion'

export default function Menu() {
  const handleClick = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const [hidden, setHidden] = useState(false);
  const {scrollY}=useScroll();
  const [isOpen, setIsOpen] = useState(false);

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
    <motion.div 
      variants={{
        visible: { y: 0, opacity:1 },
        hidden: { y: "-100%",opacity:0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: "0.2", ease: "easeIn" }}
      className='nav'
    >

<Image priority src={open} className='svco' alt='open' width={48} height={48} style={{ cursor: "pointer" }} onClick={handleClick}></Image>

<AnimatePresence>
          {isOpen && (
            <motion.div className="menu-container"
              initial={{ y: '-100vh', x: '-60vw', opacity: 0, scale: 0, damping: 500, stiffness: 1000, mass: 3  }}
              animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
              exit={{ y: '-100vh', x: '0vw', opacity: 0, scale: 0}}
              transition={{ duration: 0.3,dampizng: 500, stiffness: 1000, mass: 3 }}
            >
              <div className='mpm'>
              <div className='wmpmm'>
                
                <div style={{ width: "100%", justifyContent: "space-between", display: "flex", flexDirection: "row" }}>
                  <div style={{display:"flex",flexDirection:"row",gap:"12px"}}>   
                  <Image priority src={close} className='svco' alt='close' width={48} height={48} onClick={handleClose}></Image>
                  </div>
                  <p className='wect'>We can <a style={{ color: "var(--black)", textDecorationColor: "var(--black)", lineHeight: "26px", fontWeight: "400px", letterSpacing: "1px" }} href="mailto:someone@exemple.com?subject=Questions&body=Escribe aquí si tienes preguntas ">create together</a> </p>
                </div>

              </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
    </motion.div>
  )
}
{/*
      <div style={{width:"90%",display:"flex",flexDirection:"row", justifyContent:"space-between", alignItems:"center", margin:"0 auto"}}>
        <a href="/"><img className='logoa' src="/kisu.svg" alt="kisu logo" style={{width:"auto", height:"69px"}}/></a>
      <ul className={styles.ulm}>
      <li className={styles.lim}><a href="/Work"><h6>Work</h6></a></li>
        <li className={styles.lim}><a href="/Clients"><h6>Clients</h6></a></li>
        <li className={styles.lim}><a href="/Services"><h6>Services</h6></a></li>
        <li className={styles.lim}><a href="/About"><h6>About</h6></a></li>
        <li className={styles.lim}><a href="/Contact"><h6>Contact</h6></a></li>
      </ul>
      </div>
 */}


{/*
import React, { useEffect, useState } from 'react';
import closex from "../../../public/logos/close.svg"
import Image from 'next/image';
import open from "../../../public/logos/open.svg"
import SwitchTheme from '../SwitchTheme';
import { motion, AnimatePresence } from 'framer-motion';
import { Imrow } from '../examples/Imrow';

function Menu({ onProjectClick, onContactClick }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleScrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -40; // Offset in pixels
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, left: 0, behavior: 'smooth' });
      handleClose();
    }
  };

  const handleProjectClick = () => {
    onProjectClick();
    handleScrollTo('head-section');
  };

  const handleContactClick = () => {
    onContactClick();
    handleScrollTo('grid-section');
  };

  return (
    <div className="menux">

      <div className='menuchild'>
      <div className="izqx" style={{ width: "60%" }}>
        <Image priority src="./logos/open.svg" className='svco' alt='open' width={48} height={48} style={{ cursor: "pointer" }} onClick={handleClick}></Image>
        <h5 className='mf' style={{ color: "var(--black)", paddingLeft: "16px" }}>
          Esmeralda Rivera
        </h5>
      </div>
      <div className="derx">
        <h5 className='hidemobile' style={{color:"var(--black)"}}>We can <a style={{ color: "var(--black)", textDecorationColor: "var(--black)", lineHeight: "26px", fontWeight: "400px", letterSpacing: "1px" }} href="mailto:someone@exemple.com?subject=Questions&body=Escribe aquí si tienes preguntas ">create together</a> </h5>
        <AnimatePresence>
          {isOpen && (
            <motion.div className="menu-container"
              initial={{ y: '-100vh', x: '-60vw', opacity: 0, scale: 0, damping: 500, stiffness: 1000, mass: 3  }}
              animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
              exit={{ y: '-100vh', x: '0vw', opacity: 0, scale: 0}}
              transition={{ duration: 0.3,dampizng: 500, stiffness: 1000, mass: 3 }}
            >
              <div className='mpm'>
              <div className='wmpmm'>
                
                <div style={{ width: "100%", justifyContent: "space-between", display: "flex", flexDirection: "row" }}>
                  <div style={{display:"flex",flexDirection:"row",gap:"12px"}}>   
                  <Image priority src="./logos/close.svg" className='svco' alt='close' width={48} height={48} onClick={handleClose}></Image>
                  <SwitchTheme />
                  </div>
                  <p className='wect'>We can <a style={{ color: "var(--black)", textDecorationColor: "var(--black)", lineHeight: "26px", fontWeight: "400px", letterSpacing: "1px" }} href="mailto:someone@exemple.com?subject=Questions&body=Escribe aquí si tienes preguntas ">create together</a> </p>
                </div>

                <span className='menubutton' onClick={() => handleScrollTo('head-section')} style={{width: "fit-content", color: "var(--black)" }}>Go Up</span>
                <span className='menubutton' onClick={() => handleScrollTo('grid-section')} style={{ width: "fit-content", color: "var(--black)" }}>Projects</span>
                <span className='menubutton' onClick={() => handleScrollTo('exp-section')} style={{ width: "fit-content", color: "var(--black)" }}>About Me</span>
                <span className='menubutton' onClick={() => handleScrollTo('skills-section')} style={{ width: "fit-content", color: "var(--black)" }}>My Journey</span>
                <div>  
                  
                <Imrow/>
                </div>

              </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
          </div>
    </div>
  );
}

export default Menu;

 */}