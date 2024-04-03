'use client';
import { useSectionMove } from '@/hooks/useSectionMove';

export default function Header() {
  const { handleSectionMove } = useSectionMove();
  return (
    <header className='fixed top-0 z-20 flex w-screen justify-between bg-[rgba(255,255,255,0)] px-24 py-6 uppercase '>
      <h1
        className='cursor-pointer text-lg text-gray-900'
        onClick={() => handleSectionMove('intro')}
      >
        KyeongSeo
      </h1>
      <ul className='flex space-x-8 text-gray-900'>
        <li
          className='cursor-pointer'
          onClick={() => handleSectionMove('about')}
        >
          About
        </li>
        <li
          className='cursor-pointer'
          onClick={() => handleSectionMove('project')}
        >
          Project
        </li>
        <li
          className='cursor-pointer'
          onClick={() => handleSectionMove('contact')}
        >
          Contact
        </li>
      </ul>
    </header>
  );
}
