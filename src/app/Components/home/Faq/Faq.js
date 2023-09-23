import React from 'react';
import { useState } from 'react';
import ExpandCollapseSection from './ExpandCollapseSection';

function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        if (index === activeIndex) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const splitContentIntoParagraphs = (contentText) => {
        return contentText.split('. ').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ));
    };

    const faqData = [
        { toggleText: 'Do you work with clients in different timezones?', contentText: "At Clay, user experience is not just a capability but the cornerstone of our approach. We first began as a UX design agency in San Francisco, focusing on mobile apps and enterprise/SaaS software. However, our passion for branding and the demand from our clients led us to expand our offering to provide full-service brand design practice and web design and development of marketing websites. Today, our projects encompass a wide range, from building new products and defining brands to revitalizing existing mobile apps, websites, and enterprise software. We specialize in crafting digital products that wholeheartedly embody the brand's personality and deliver delightful experiences to your customers. Our team handles every aspect required to bring a digital product to life. This includes user research, product strategy, branding, user interface and experience design, usability testing, prototyping, web design, and development. Furthermore, we boast an in-house content production studio that provides creative direction, 2D/3D design, illustration and iconography, motion design, animation, sound design, photo/video, and copywriting services. For web projects, we integrate considerations for SEO into our process to ensure that our client's websites are optimized for search engines; however, SEO is not offered as a standalone service." },
        { toggleText: 'Question 2', contentText: "We have extensive experience working with clients in various time zones. Based in San Francisco, we operate as a remote-first company with team members across the United States, Europe, and South-East Asia. This global presence allows us to serve clients worldwide, regardless of location.Over the past 12 years, we have perfected our remote collaboration model, enabling seamless work with clients from Saudi Arabia, China, Australia, Germany, the UK, and many other countries. We understand the challenges of different time zones and have implemented effective communication and project management strategies to overcome them.Our team excels at coordinating and scheduling meetings to accommodate clients' time preferences and availability across different regions. We prioritize clear and timely communication, leveraging various collaboration tools and platforms to maintain constant connectivity and streamline project workflows.Working with clients across diverse time zones has expanded our agency's capabilities and deepened our understanding of global markets. It has fostered an adaptive and efficient culture within our team, allowing us to consistently deliver exceptional results while respecting and embracing our clients' unique needs and perspectives worldwide.        " },
        // Add more FAQ data as needed
    ];

    return (
        <div>

            {faqData.map((item, index) => (
                <ExpandCollapseSection
                    key={index}
                    toggleText={item.toggleText}
                    contentText={splitContentIntoParagraphs(item.contentText)}
                    isExpanded={index === activeIndex}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
    )
}

export default Faq;
