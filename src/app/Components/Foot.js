import React from 'react'
import styles from "../styles/foot.module.css"
function Foot() {
  return (
    <div className={styles.parentf}>
          <div className={styles.container}>
          <div className={styles.ll}>
          <h2 style={{lineHeight:"100%", marginTop:"0"}}> Let’s Talk </h2> 
          <h4>kisu.ags@gmail.com</h4>  
          </div>
          <div className={styles.rr}>
          <ul className={styles.vl}>
      <li className={styles.vli}><h6> Work </h6> </li>
      <li className={styles.vli}><h6> Services </h6> </li>
      <li className={styles.vli}><h6> Clients </h6> </li>
      <li className={styles.vli}><h6> About </h6> </li>
      <li className={styles.vli}><h6> Contact </h6> </li>
    </ul>
          </div>

          </div>

<div className='space'></div>

          <div className={styles.container}>
          <div className={styles.ll}>
          <h6>300 Broadway, San Francisco, CA 94133</h6>     

          </div>
          <div className={styles.rr}>
          <div className={styles.hzdwp}>
      <a href=""> <img className={styles.iconf} src="/icons/facebook.svg" alt=""/> </a>    
      <a href=""> <img className={styles.iconf} src="/icons/instagram.svg" alt=""/> </a>    
      <a href="">   <img className={styles.iconf} src="/icons/lin.svg" alt=""/> </a>    

          </div>
          </div>

          </div>
          <div className='spacesm'></div>

          <div className={styles.container}>
          <div className={styles.ll}>
          <div className={styles.rww}>
<h6>Privacy </h6> 
<h6>Terms </h6> 
<h6>Sitemap </h6> 
</div>
          </div>
          <div className={styles.rr}>
          <h6>© 2016 – 2023 Clay Global, LLC</h6>
          </div>
          </div>

<div className='spacesm'></div>

    </div>
  )
}

export default Foot

{/*

 <div className={styles.ll}>
     <h2> Let’s Talk </h2> 
<h4>kisu.ags@gmail.com</h4>    
<h6>300 Broadway, San Francisco, CA 94133</h6>     
<div className={styles.rww}>
<h6>Privacy </h6> 
<h6>Terms </h6> 
<h6>Sitemap </h6> 
</div>
     </div>

     <div className={styles.rr}>

     <ul className={styles.vl}>
      <li className={styles.vli}><h6> Work </h6> </li>
      <li className={styles.vli}><h6> Services </h6> </li>
      <li className={styles.vli}><h6> Clients </h6> </li>
      <li className={styles.vli}><h6> About </h6> </li>
      <li className={styles.vli}><h6> Contact </h6> </li>
    </ul>
    <div className={styles.hzdwp}>
      <a href=""> <img className={styles.iconf} src="/icons/facebook.svg" alt=""/> </a>    
      <a href=""> <img className={styles.iconf} src="/icons/instagram.svg" alt=""/> </a>    
      <a href="">   <img className={styles.iconf} src="/icons/lin.svg" alt=""/> </a>    
          </div>
          <h6>© 2016 – 2023 Clay Global, LLC</h6>
     </div>



  <div className={styles.ll}>
        <div>
        <h2> Let’s Talk </h2> 
<h4>kisu.ags@gmail.com</h4>    
<h6>300 Broadway, San Francisco, CA 94133</h6>     
<div className={styles.rww}>
<h6>Privacy </h6> 
<h6>Terms </h6> 
<h6>Sitemap </h6> 
</div>

        </div>

    <div className={styles.rr}>
    <ul className={styles.vl}>
      <li className={styles.vli}><h6> Work </h6> </li>
      <li className={styles.vli}><h6> Services </h6> </li>
      <li className={styles.vli}><h6> Clients </h6> </li>
      <li className={styles.vli}><h6> About </h6> </li>
      <li className={styles.vli}><h6> Contact </h6> </li>
    </ul>
    <div className={styles.hzdwp}>
      <a href=""> <img className={styles.iconf} src="/icons/facebook.svg" alt=""/> </a>    
      <a href=""> <img className={styles.iconf} src="/icons/instagram.svg" alt=""/> </a>    
      <a href="">   <img className={styles.iconf} src="/icons/lin.svg" alt=""/> </a>    

          </div>

    </div>
      </div>
*/}