import AboutSection from "./_sections/AboutSection";
import Contact from "./_sections/Contact";
import HeroSection from "./_sections/HeroSection";
import ProjectsSection from "./_sections/ProjectsSection";




export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <ProjectsSection></ProjectsSection>
      <AboutSection/>
      <Contact/>
    </>
  );
}
