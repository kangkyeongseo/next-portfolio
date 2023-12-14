"use client";

import { useSectionMove } from "@/hooks/useSectionMove";

export default function Header() {
  const { handleSectionMove } = useSectionMove();
  return (
    <header className="z-10 w-full fixed top-0 flex justify-between px-24 py-8 bg-[rgba(255,255,255,0.8)] ">
      <h1
        className="cursor-pointer text-lg uppercase text-gray-600 hover:text-gray-900"
        onClick={() => handleSectionMove("intro")}
      >
        KyeongSeo
      </h1>
      <ul className="flex space-x-8 uppercase text-gray-500">
        <li
          className="cursor-pointer hover:text-gray-900"
          onClick={() => handleSectionMove("about")}
        >
          About
        </li>
        <li
          className="cursor-pointer hover:text-gray-900"
          onClick={() => handleSectionMove("skill")}
        >
          Skill
        </li>
        <li
          className="cursor-pointer hover:text-gray-900"
          onClick={() => handleSectionMove("project")}
        >
          Project
        </li>
        <li
          className="cursor-pointer hover:text-gray-900"
          onClick={() => handleSectionMove("contact")}
        >
          Contact
        </li>
      </ul>
    </header>
  );
}
