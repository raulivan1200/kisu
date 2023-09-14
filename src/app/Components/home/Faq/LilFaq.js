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
      { toggleText: 'Question 1', contentText: " A brand is more than just a logo and color palette. We'll craft a distinct visual and verbal identity, create necessary assets, and establish clear brand guidelines to maintain consistency across all touchpoints."},
      { toggleText: 'Question 2', contentText: "Clay concentrates on designing authentic connections through the use of both aesthetics and behavioral science. Our team of senior UI/UX designers delivers engaging digital products that help brands thrive in the modern economy." },
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