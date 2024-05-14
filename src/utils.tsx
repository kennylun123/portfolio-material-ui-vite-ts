const scrollToSection = (sectionId: string) => {
  const sectionElement = document.getElementById(sectionId);
  const offset = 0;
  if (sectionElement) {
    const targetScroll = sectionElement.offsetTop - offset;
    sectionElement.scrollIntoView({ behavior: "smooth" });
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  }
};

export default scrollToSection;
