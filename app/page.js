import AboutSection from "./components/homepage/about";
import Education from "./components/homepage/education";
import ContactSection from "./components/homepage/contact";
import Skills from "./components/homepage/skills";
import Projects from "./components/homepage/projects";
import HeroSection from "./components/homepage/hero-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </div>
  )
}