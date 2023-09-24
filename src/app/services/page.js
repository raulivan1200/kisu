"use client"
import Image from "next/image";
import cat from "../../../public/cats/catmouse.png";
import cate from "../../../public/cats/cateating.png";
import catg from "../../../public/cats/catgold.png";
import catj from "../../../public/cats/catjump.png";
import catp from "../../../public/cats/catpad.png";
import styles from "../styles/service.module.css"

const service = () => {

    return (
      <div>
        service
        <div className="space"></div>
        <div className="space"></div>
        <div className={styles.servp}>
          <Image src={cate} className={styles.cat} placeholder="blur" />
          <h1>A full-service digital innovation partner</h1>
        </div>
        <div className="space"> </div>
  
        <div className={styles.wser}>
          <div className={styles.container} >
            <div className={styles.im1}>
                <Image src={catj} className={styles.cat} placeholder="blur" />
            </div>
            <div className={styles.im2}>
                <Image src={catp} className={styles.cat} placeholder="blur" />
            </div>
            <div className={styles.im3}>
                <Image src={cat} className={styles.cat} placeholder="blur" />
            </div>
            <div className={styles.im4}>
                <Image src={catg} className={styles.cat} placeholder="blur" />
            </div>
  <div className={styles.t1}>
<h2>
     Digital Products
    </h2> 
At Clay, we believe everyone deserves an exceptional user experience, whether using a product at work or in their free time. We create memorable enterprise and consumer products as well as provide comprehensive design systems for effortless product iteration.

Consumer & Enterprise Software
User Research & Testing
CX, UX & Interaction Design
UI Design
Motion Design
Design Systems
  </div>
  <div className={styles.t2}>
  <h2>
  Websites
  </h2>
A website is the most important channel to showcase your brand to customers. Our portfolio features award-winning websites designed to give users the best experience possible while also meeting business goals.

Content Strategy
Web Design
Interactive Experiences
Content Production
Frontend & Backend Development
CMS Implementation
  </div>
  <div className={styles.t3}>
  <h2>
  Content
  </h2>
Authentic content is essential in the digital world. We work with brands to identify their unique content needs and deliver custom-made assets at the highest quality, down to the last detail.

Art Direction
Illustration & Graphic Design
Iconography
Animation
Photo & Video
3D
  </div>
  <div className={styles.t4}>
  <h2>
  Development
  </h2>
Our designers and developers collaborate to create websites and products that provide exceptional user experiences and functionality. We optimize search engine visibility, ensure accessibility, and maximize performance.

Technology Consulting
Architecture Planning
Mobile App Development
Frontend Web Development
Backend Development & API Integration
Emerging Tech (AI, AR/VR, Wearables, Web3)
  </div>
</div>

        </div>
        <div className="space"></div>
        <div className="space"></div>

    </div> );
}
 
export default service;