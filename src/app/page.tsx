"use client";

import Header from "@/components/laytout/Header";
import Wave from "@/components/section/intro/Wave";
import Title from "@/components/section/intro/Title";
import { useSectionMove } from "@/hooks/useSectionMove";

const { handleSectionMove } = useSectionMove();

export default function Home() {
  return (
    <>
      <Header />
      <div className=" w-full h-[100vh] relative" id="intro">
        <div className="w-full h-[100vh] flex justify-center items-center">
          <Wave />
          <Title />
          <button
            className="absolute bottom-10"
            onClick={() => handleSectionMove("about")}
          >
            down
          </button>
        </div>
      </div>
      <div className=" w-full h-[100vh] relative" id="about"></div>
    </>
  );
}
