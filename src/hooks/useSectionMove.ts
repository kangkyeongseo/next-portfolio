export const useSectionMove = () => {
  const handleSectionMove = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const sectionTop = sectionElement?.getBoundingClientRect().top as number;

    window.scrollTo({ top: window.scrollY + sectionTop, behavior: "smooth" });
  };

  return { handleSectionMove };
};
