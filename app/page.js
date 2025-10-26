import { personalData } from "@/utils/data/personal-data";
import dynamic from 'next/dynamic';

// Dynamically import all components with SSR disabled
const HeroSection = dynamic(() => import("./components/homepage/hero-section"), {
  ssr: false,
  loading: () => <div className="h-screen bg-[#0d1224]"></div>
});

const AboutSection = dynamic(() => import("./components/homepage/about"), {
  ssr: false
});

const Skills = dynamic(() => import("./components/homepage/skills"), {
  ssr: false
});

const Projects = dynamic(() => import("./components/homepage/projects"), {
  ssr: false
});

const Education = dynamic(() => import("./components/homepage/education"), {
  ssr: false
});

const ContactSection = dynamic(() => import("./components/homepage/contact"), {
  ssr: false
});

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </div>
  )
}