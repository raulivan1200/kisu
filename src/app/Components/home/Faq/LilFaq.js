import React from 'react'
import { useState } from 'react';
import ExpandCollapseSection from './LilExpandCollapseSection';

function LilFaq() {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleToggle = (index) => {
      if (index === activeIndex) {
        setActiveIndex(null);
      } else {
        setActiveIndex(index);
      }
    };
    const faqData = [
      { toggleText: 'Branding', contentText: " A brand is more than just a logo and color palette. We'll craft a distinct visual and verbal identity, create necessary assets, and establish clear brand guidelines to maintain consistency across all touchpoints."},
      { toggleText: 'Digital Products', contentText: "Clay concentrates on designing authentic connections through the use of both aesthetics and behavioral science. Our team of senior UI/UX designers delivers engaging digital products that help brands thrive in the modern economy." },
      { toggleText: 'Websites', contentText: "Clay concentrates on designing authentic connections through the use of both aesthetics and behavioral science. Our team of senior UI/UX designers delivers engaging digital products that help brands thrive in the modern economy." },
      { toggleText: 'Development', contentText: "Our web developers are committed to achieving both visual and performance excellence. From the backend to the frontend, we prioritize delivering a seamless and enjoyable user experience on all devices." },
      { toggleText: 'Content', contentText: "Content is a crucial aspect of the user experience, and we offer a range of services to support this, including copywriting, illustration, 2D and 3D graphics, iconography, animation, video production, and photography." },
      // Add more FAQ data as needed
    ];
  
  return (
    <div>
    {faqData.map((item, index) => (
      <ExpandCollapseSection
        key={index}
        toggleText={item.toggleText}
        contentText={item.contentText}
        isExpanded={index === activeIndex}
        onToggle={() => handleToggle(index)}
      />
    ))}
  </div>  )
}

export default LilFaq