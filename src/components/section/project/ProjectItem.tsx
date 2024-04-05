import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectItemProps {
  project: {
    title: string;
    contributor: number;
    summary: string[];
    website: string;
    github: string;
    skills: string[];
    intro: string[];
    review: string[];
    gifName: string;
    mainColor: string;
    subColor: string;
  };
}

const ProjectItem = ({
  project: {
    title,
    contributor,
    summary,
    website,
    github,
    skills,
    intro,
    review,
    gifName,
    mainColor,
    subColor,
  },
}: ProjectItemProps) => {
  return (
    <div
      className={`z-20 flex h-screen w-screen items-center justify-center pt-20 text-white ${mainColor}`}
    >
      <div className='mx-48 grid w-full grid-cols-[2fr,3fr] items-center'>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col items-start font-semibold'>
            <span className='ml-1 text-sm'>
              {contributor === 1
                ? '개인 프로젝트'
                : `${contributor}인 프로젝트`}
            </span>
            <span className='text-5xl'>{title}</span>
          </div>
          <ul className='ml-8 list-disc'>
            {summary.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className='ml-4 flex flex-col items-start gap-2 text-sm'>
            <Link
              href={website}
              passHref
              target='_blank'
              className='group flex items-center gap-2'
            >
              <span
                className={`px-2 py-[2px] text-xs text-gray-900 ${subColor} shadow-md`}
              >
                배포 링크
              </span>
              <span className='opacity-80 group-hover:opacity-100'>
                {website}
              </span>
            </Link>
            <Link
              href={github}
              passHref
              target='_blank'
              className='group flex items-center gap-2'
            >
              <span
                className={`px-2 py-[2px] text-xs text-gray-900 ${subColor} shadow-md`}
              >
                깃허브 레포지토리
              </span>
              <span className='opacity-80 group-hover:opacity-100'>
                {github}
              </span>
            </Link>
          </div>
          <div className='ml-4 space-y-2 text-sm'>
            <span
              className={`px-2 py-[2px] text-xs text-gray-900 ${subColor} shadow-md`}
            >
              기술 스택
            </span>
            <ul className='flex flex-wrap gap-3'>
              {skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex flex-col items-end gap-10'>
          <div className='relative aspect-video w-[520px] overflow-hidden rounded-md bg-black shadow-md'>
            <Image
              src={`/images/${gifName}.gif`}
              alt='gif'
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className='w-[70%] space-y-5 text-sm'>
            <div className='space-y-2'>
              <span
                className={`px-2 py-[2px] text-xs text-gray-900 ${subColor} shadow-md`}
              >
                프로젝트 소개
              </span>
              {intro.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <div className='space-y-2'>
              <span
                className={`px-2 py-[2px] text-xs text-gray-900 ${subColor} shadow-md`}
              >
                제작 후기
              </span>
              {review.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
