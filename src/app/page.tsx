import Header from '@/components/laytout/Header';
import Intro from '@/components/section/intro/Intro';
import About from '@/components/section/about/About';
import Project from '@/components/section/project/Project';
import Contact from '@/components/section/contact/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Project />
      <Contact />
    </>
  );
}
