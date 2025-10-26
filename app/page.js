import AboutSection from "./components/homepage/about";
import Education from "./components/homepage/education";

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
        </div>
      </section>

      <AboutSection />
      <Education />
    </div>
  )
}