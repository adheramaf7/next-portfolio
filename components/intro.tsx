'use client';

import React from 'react';
import Image from 'next/image';
import AvatarImage from '@/public/avatar.jpg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
   const { ref } = useSectionInView('Home', 0.5);
   const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

   return (
      <section id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-96" ref={ref}>
         <div className="flex items-center justify-center">
            <div className="relative">
               <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'tween', duration: 0.2 }}>
                  <Image
                     src={AvatarImage}
                     alt="Avatar Image"
                     width={200}
                     height={200}
                     quality={95}
                     priority={true}
                     className="h-32 w-32 rounded-full object-cover border-[0.2rem] border-white shadow-lg"
                  />
               </motion.div>
               <motion.span
                  className="absolute text-3xl bottom-0 right-0"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 125, delay: 0.1, duration: 0.7 }}>
                  😍
               </motion.span>
            </div>
         </div>
         <motion.h1
            className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa a quam at minus assumenda
            pariatur beatae, eaque quia eius inventore corporis ut eum saepe magni exercitationem
            est dolorem quasi doloremque.
         </motion.h1>
         <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}>
            {/* <Link
               href={'#contact'}
               className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
               onClick={() => {
                  setActiveSection('Contact');
                  setTimeOfLastClick(Date.now());
               }}>
               Contact me here{' '}
               <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link> */}
            <a
               href="#"
               className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10 dark:bg-white/10 dark:text-white/60">
               Download CV{' '}
               <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>
            <a
               href="https://linkedin.com"
               target="_blank"
               className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10  dark:bg-white/10 dark:text-white/60">
               LinkedIn <BsLinkedin />
            </a>
            <a
               href="https://github.com"
               target="_blank"
               className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10  dark:bg-white/10 dark:text-white/60">
               GitHub <BsGithub />
            </a>
         </motion.div>
      </section>
   );
}
