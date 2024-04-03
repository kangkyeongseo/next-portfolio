'use client';
import { motion } from 'framer-motion';
import Section from '../Section';
import AboutSection from './AboutSection';
import Typing from './Typing';
import { buttons, carrer, skills } from '../../../../public/constants';

export default function About() {
  return (
    <Section sectionId='about'>
      <div className='mx-48 grid h-full grid-cols-[2fr,2fr,3fr] items-center justify-between pt-20'>
        <motion.div
          className='flex flex-col items-start gap-5 text-gray-900'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <AboutSection
            label='Name'
            type='simpleText'
            simpleText='강경서'
            textSize='text-[42px]'
          />
          <AboutSection
            label='Birth'
            type='simpleText'
            simpleText='1994.07.18'
            textSize='text-2xl'
          />
          <AboutSection label='Carrer' type='carrer' carrer={carrer} />
        </motion.div>
        <motion.div
          className='flex flex-col items-start gap-5 text-gray-900'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <AboutSection label='Channel' type='button' buttons={buttons} />
          <AboutSection label='Skill' type='skill' skills={skills} />
        </motion.div>
        <motion.div
          className='flex flex-col items-center justify-center text-4xl'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Typing />
        </motion.div>
      </div>
    </Section>
  );
}
