import Section from "../Section";
import Info from "./Info";

export default function About() {
  return (
    <Section sectionId="about">
      <div className="w-full h-full flex flex-col justify-center items-center gap-5">
        <Info type="name" value="강경서" />
        <Info type="birth" value="1994.07.18" />
        <Info type="phone" value="010-6415-5062" />
        <Info type="mail" value="kks_big@naver.com" />
      </div>
    </Section>
  );
}
