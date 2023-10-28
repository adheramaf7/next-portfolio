'use client';

import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
   const { ref } = useSectionInView('About');

   return (
      <motion.section
         id="about"
         ref={ref}
         className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
         initial={{ opacity: 0, y: 100 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.175 }}>
         <SectionHeading>About Me</SectionHeading>
         <p className="mb-3 ">
            Hello, I am m Adhe, a software developer with over 5 years of experience in designing
            and building robust software solutions. My expertise lies in PHP, Laravel, Javascript,
            React JS, Flutter, Node JS, Express JS, and I have a proven track record of delivering
            high-quality code and meeting project deadlines.
         </p>
         <p className="mb-3">
            I am well-versed in the entire software development lifecycle, from requirement analysis
            and system design to implementation, testing, and deployment. I thrive in collaborative
            environments, enjoy tackling complex problems, and continuously stay updated with the
            latest industry trends and best practices.
         </p>
         <p>
            I am passionate about creating efficient, maintainable, and scalable software that
            addresses real-world challenges. My dedication to writing clean code and implementing
            best coding practices reflects my commitment to producing software solutions that stand
            the test of time.
         </p>
      </motion.section>
   );
}
