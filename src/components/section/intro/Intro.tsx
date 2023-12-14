"use client";

import Section from "../Section";
import Title from "./Title";
import Wave from "./Wave";

export default function Intro() {
  return (
    <Section sectionId="intro">
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Wave />
        <Title />
      </div>
    </Section>
  );
}
