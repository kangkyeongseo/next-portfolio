'use client';
import React, { useEffect, useState } from 'react';
import ScrollDownButton from '../common/ScrollDownButton';
import { useSectionMove } from '@/hooks/useSectionMove';

interface SectionProp {
  children: React.ReactNode;
  sectionId: string;
}

export default function Section({ children, sectionId }: SectionProp) {
  const sections = ['intro', 'about', 'project', 'contact'];
  const { handleSectionMove } = useSectionMove();
  const [nextSection, setNextSection] = useState<string>();

  useEffect(() => {
    const currentIndex = sections.indexOf(sectionId);
    const nextIndex = currentIndex + 1;
    setNextSection(sections[nextIndex]);
  }, [sectionId]);

  return (
    <div className=' relative h-screen w-full' id={sectionId}>
      {children}
      <div className='absolute bottom-14 z-10 flex w-full justify-center'>
        {nextSection && (
          <ScrollDownButton onClick={() => handleSectionMove(nextSection)} />
        )}
      </div>
      {sectionId !== 'intro' && (
        <div className='absolute left-40 top-28 z-10'>
          <span
            className={`text-6xl font-extrabold ${sectionId === 'project' && 'text-white'}`}
          >
            {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
          </span>
        </div>
      )}
    </div>
  );
}
