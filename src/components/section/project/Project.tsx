'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './project.css';
import Section from '../Section';
import ProjectItem from './ProjectItem';
import { ChevronLeft, ChevronRight } from '../../../../public/svgs';
import { projects } from '../../../../public/constants';

export default function Project() {
  return (
    <Section sectionId='project'>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={{
          prevEl: '.custom-navigation-prev',
          nextEl: '.custom-navigation-next',
        }}
        pagination={{ clickable: true, el: '.custom-pagination' }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        {projects.map(project => (
          <SwiperSlide key={project.title}>
            <ProjectItem project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className='custom-navigation-prev'>
        <ChevronLeft />
      </button>
      <button className='custom-navigation-next w-10 text-white'>
        <ChevronRight />
      </button>
      <div className='absolute left-[120px] top-48 z-10 translate-x-[50%]'>
        <div className='custom-pagination' />
      </div>
    </Section>
  );
}
