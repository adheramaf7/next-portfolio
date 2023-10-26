'use client';

import React from 'react';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/send-email';
import SubmitButton from './submit-button';
import toast from 'react-hot-toast';

export default function Contact() {
   // const { ref } = useSectionInView('Contact');

   return (
      <motion.section
         id="contact"
         className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1 }}
         viewport={{ once: true }}>
         <SectionHeading>Contact Me</SectionHeading>
         <p className="text-gray-700 -mt-5 dark:text-white/80">
            Please contact me directly at{' '}
            <a className="underline" href="mailto:adheramaf7@gmail.com">
               adheramaf7@gmail.com
            </a>{' '}
            or through this form
         </p>
         <form
            className="mt-10 flex flex-col dark:text-black"
            action={async (formData) => {
               const { data, error } = await sendEmail(formData);

               if (error) {
                  return toast.error(error);
               }

               toast.success('Message sent successfully!');
            }}>
            <input
               type="email"
               name="email"
               className="h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
               placeholder="Your email"
               required
               maxLength={100}
            />
            <textarea
               name="message"
               className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
               placeholder="Your message"
               required
               maxLength={500}
            />
            <SubmitButton />
         </form>
      </motion.section>
   );
}
