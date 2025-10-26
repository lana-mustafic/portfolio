export default function Home() {
  return (
    <div>
      {/* Simple hero section only - no imported components */}
      <section className="min-h-screen flex items-center justify-center bg-[#0d1224] text-white px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hello, I&apos;m <span className="text-pink-500">Lana Mustafić</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#16f2b3] mb-6">
            Junior Full-Stack Developer
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Specializing in .NET and Angular development. Passionate about building modern, 
            maintainable applications with clean architecture and efficient workflows.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#contact" className="bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 rounded-full text-white font-medium">
              Contact Me
            </a>
            <a href="https://github.com/lana-mustafic" target="_blank" rel="noopener noreferrer" className="border border-[#16f2b3] text-[#16f2b3] px-6 py-3 rounded-full font-medium">
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Simple about section */}
      <section id="about" className="py-20 bg-[#0d1224] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              I&apos;m a soon-to-be Software Engineering graduate specializing in full-stack development with .NET and Angular. 
              I&apos;m passionate about building modern, maintainable applications using clean architecture, secure authentication, 
              and efficient deployment workflows.
            </p>
            <p className="text-lg">
              Currently, I&apos;m expanding my skills in .NET 8, Angular, and Docker, and preparing to start my Master&apos;s degree 
              in Software Engineering. I&apos;m always eager to learn new technologies and continuously grow as a developer.
            </p>
          </div>
        </div>
      </section>

      {/* Simple contact section */}
      <section id="contact" className="py-20 bg-[#0d1224] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
          <div className="max-w-md mx-auto text-center">
            <p className="mb-4">Email: lana-mustafic@outlook.com</p>
            <p className="mb-4">Phone: +387 60 335 2668</p>
            <p className="mb-8">Location: Sarajevo, Bosnia and Herzegovina</p>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/lana-mustafic" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#16f2b3] transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com/in/lana-mustafic" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#16f2b3] transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}