import React from 'react';
import Link from 'next/link';

interface AboutSectionProps {
  label: string;
  type: 'simpleText' | 'carrer' | 'button' | 'skill';
  simpleText?: string;
  textSize?: string;
  carrer?: {
    title: string;
    subTitle: string;
    period: string;
    awards: string;
  }[];
  buttons?: {
    title: string;
    href: string;
    color: string;
    hoverColor: string;
  }[];
  skills?: { title: string; skill: string[] }[];
}

const AboutSection = ({
  label,
  type,
  simpleText,
  textSize,
  carrer,
  buttons,
  skills,
}: AboutSectionProps) => {
  return (
    <div className='flex flex-col items-start'>
      <span className='text-xs'>{label}</span>
      {type === 'simpleText' && simpleText && textSize && (
        <div className='flex flex-col'>
          <span className={`${textSize} font-semibold`}>{simpleText}</span>
        </div>
      )}
      {type === 'carrer' && carrer && (
        <div className='flex flex-col gap-5'>
          {carrer.map(item => (
            <div key={item.title} className='flex flex-col'>
              <span className='font-semibold'>{item.title}</span>
              <span className='font-semibold'>{item.subTitle}</span>
              <span className='text-sm font-light'>{item.period}</span>
              <span className='font-bold'>{item.awards}</span>
            </div>
          ))}
        </div>
      )}
      {type === 'button' && buttons && (
        <div className='mt-2 flex items-center justify-center gap-2 text-white'>
          {buttons.map(button => (
            <Link
              key={button.title}
              href={button.href}
              target='_blank'
              className={`w-20 rounded-md px-2 py-1 text-center ${button.color} ${button.hoverColor}`}
            >
              <span>{button.title}</span>
            </Link>
          ))}
        </div>
      )}
      {type === 'skill' && skills && (
        <>
          {skills.map(skill => (
            <div key={skill.title} className='flex flex-col gap-5'>
              <div className='flex flex-col'>
                <span className='font-semibold'>{skill.title}</span>
                <ul className='flex flex-wrap gap-2'>
                  {skill.skill.map(item => (
                    <li key={item} className='text-sm font-light'>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default AboutSection;
