import Hero from './components/homepage/hero-section/index.jsx';
import About from './components/homepage/about/index.jsx';
import Skills from './components/homepage/skills/index.jsx';
import Education from './components/homepage/education/index.jsx';
import Projects from './components/homepage/projects/index.jsx';
import Contact from './components/homepage/contact/index.jsx';
import HonorsAwards from './components/honors-awards/honors-awards.jsx';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <HonorsAwards />
      <Contact />
    </main>
  );
}