"use client";

import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import { useSectionMove } from "@/hooks/useSectionMove";

interface SectionProp {
  children: React.ReactNode;
  sectionId: string;
}

export default function Section({ children, sectionId }: SectionProp) {
  const sections = ["intro", "about", "skill", "project", "contact"];
  const { handleSectionMove } = useSectionMove();
  const [nextSection, setNextSection] = useState<string>();

  useEffect(() => {
    const currentIndex = sections.indexOf(sectionId);
    const nextIndex = currentIndex + 1;
    setNextSection(sections[nextIndex]);
  }, [sectionId]);

  return (
    <div className=" w-full h-[100vh] relative" id={sectionId}>
      {children}
      <div className="w-full absolute bottom-14 flex justify-center">
        {nextSection && (
          <Button onClick={() => handleSectionMove(nextSection)} />
        )}
      </div>
    </div>
  );
}
