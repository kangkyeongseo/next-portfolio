'use client';
import Section from '../Section';
import Wave from './Wave';
import IntroTitle from './IntroTitle';

export default function Intro() {
  return (
    <Section sectionId='intro'>
      <div className='flex h-full w-full items-center justify-center'>
        <Wave />
        <IntroTitle />
      </div>
    </Section>
  );
}
