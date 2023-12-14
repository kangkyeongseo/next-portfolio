import Header from "@/components/laytout/Header";
import Intro from "@/components/section/intro/Intro";
import About from "@/components/section/about/About";
import Skill from "@/components/section/skill/Skill";
import Project from "@/components/section/project/Project";
import Contact from "@/components/section/contact/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Skill />
      <Project />
      <Contact />
    </>
  );
}
