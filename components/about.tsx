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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eligendi fugit sunt
            nisi? Incidunt voluptate ullam iusto, labore illo a! Accusamus sit asperiores ea sequi
            numquam obcaecati aut suscipit facere blanditiis labore. Sint sit quasi nam cumque et
            atque exercitationem dicta quis reiciendis ad rem odit, dolor necessitatibus voluptatem
            vel?
         </p>
         <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, iusto. Fuga, nemo!
            Culpa laudantium expedita, voluptatum voluptate, debitis explicabo illum ullam eveniet
            molestiae sed cupiditate autem dicta, sequi non natus ipsam magnam distinctio
            praesentium esse aliquid saepe. Provident est quasi itaque temporibus cupiditate,
            eveniet mollitia laborum inventore reprehenderit culpa accusantium.
         </p>
      </motion.section>
   );
}
