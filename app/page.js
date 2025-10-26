import AboutSection from "./components/homepage/about";
import Education from "./components/homepage/education";
import ContactSection from "./components/homepage/contact";

export default function Home() {
  return (
    <div>
      {/* Simple hero section */}
      <section className="min-h-screen flex items-center justify-center bg-[#0d1224] text-white px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hello, I&apos;m <span className="text-pink-500">Lana Mustafić</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#16f2b3] mb-6">
            Junior Full-Stack Developer
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Specializing in .NET and Angular development. Passionate about building modern, 
            maintainable applications with clean architecture and efficient workflows.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <a href="#contact" className="bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 rounded-full text-white font-medium">
              Contact Me
            </a>
            <a href="#about" className="border border-[#16f2b3] text-[#16f2b3] px-6 py-3 rounded-full font-medium">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <AboutSection />
      <Education />
      <ContactSection />
    </div>
  )
}