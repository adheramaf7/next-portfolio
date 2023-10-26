import React from 'react';
import { useInView } from 'react-intersection-observer';
import { SectionName, useActiveSectionContext } from '@/context/active-section-context';

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
   const { ref, inView } = useInView({ threshold });
   const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

   React.useEffect(() => {
      if (inView && Date.now() - timeOfLastClick > 1000) {
         setActiveSection(sectionName);
      }
   }, [inView, setActiveSection, timeOfLastClick, sectionName]);

   return { ref };
}
