'use client';

import React from 'react';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading';
import { experiencesData } from '@/lib/data';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from '@/context/theme-context';

export default function Experience() {
   const { ref } = useSectionInView('Experience');
   const { theme } = useTheme();

   return (
      <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
         <SectionHeading>My Experience</SectionHeading>
         <VerticalTimeline>
            {experiencesData.map((item, index) => {
               return (
                  <VerticalTimelineElement
                     key={index}
                     visible
                     contentStyle={{
                        background: theme === 'light' ? '#f3f4f6' : 'rgba(255,255,255,0.05)',
                        boxShadow: 'none',
                        border: '1px solid rgba(0,0,0,0.05)',
                        textAlign: 'left',
                        padding: '1.3rem 2rem',
                     }}
                     contentArrowStyle={{
                        borderRight:
                           theme === 'light'
                              ? '0.4rem solid #9ca3af'
                              : '0.4rem solid rgba(255,255,255,0.5)',
                     }}
                     date={item.date}
                     icon={item.icon}
                     iconStyle={{
                        background: theme === 'light' ? 'white' : 'rgba(255,255,255,0.5)',
                        fontSize: '1.5rem',
                     }}
                     className="">
                     <h3 className="text-gray-800 dark:text-white/80 font-semibold capitalize">
                        {item.title}
                     </h3>
                     <p className="font-normal !mt-0">{item.location}</p>
                     <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                        {item.description}
                     </p>
                  </VerticalTimelineElement>
               );
            })}
         </VerticalTimeline>
      </section>
   );
}
