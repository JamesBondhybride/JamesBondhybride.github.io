import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Next.js",
    "Vue",
    "JavaScript (ES6+)",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
    "HTML5 & CSS3",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "Python",
    "Django",
    "FastAPI",
    "AWS",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "Redis",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            {/* Intro with Image */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 mb-8">
              <img
                src="/me.jpg"
                alt="Junaed Mustofa Chowdhury"
                className="w-40 m-auto h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-xl object-cover shadow-lg border-4 border-blue-400"
              />
              <div className="text-center md:text-left">
                <p className="text-gray-300 mb-2">
                  I’m <strong>Junaed Mustofa Chowdhury</strong>, a passionate{" "}
                  <strong>Full‑Stack Developer</strong>, Accessibility Advocate, and
                  Freelance Strategist based in Bangladesh, working remotely with
                  clients worldwide. My focus is on building performant, accessible,
                  and user‑friendly applications that empower businesses and delight
                  users. I thrive on technical rigor, clear communication, and
                  delivering solutions that scale globally.
                </p>

                <p className="text-gray-300 mb-6">
                  Beyond coding, I specialize in <strong>branding precision</strong>,
                  <strong>UI reliability</strong>, and <strong>workflow clarity</strong>.
                  I adapt instantly to client feedback, ensuring every asset—whether
                  it’s a product card, checkout flow, or portfolio page—is visually
                  balanced and context‑perfect. My projects often integrate modern
                  deployment workflows (Vercel, Netlify, GitHub Pages) and emphasize
                  accessibility standards so that applications are inclusive for all
                  users.
                </p>
              </div>
            </div>

            {/* Work Experience + Education side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Work Experience */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Work Experience</h3>
                <ul className="text-white list-disc list-inside space-y-2">
                  <li>
                    <strong>Full‑Stack Developer & Freelance Consultant (2021–Present)</strong> – 
                    Designed bilingual portfolio sites, built interactive demos with React & Node.js, 
                    integrated secure backend APIs, and created branded Fiverr gig visuals for global clients.
                  </li>
                  <li>
                    <strong>Finance & Sales Associate – HSBC (2007–2011)</strong> – 
                    Prospected and developed corporate banking relationships, led branch startup operations, 
                    and coordinated cross‑functional teams.
                  </li>
                  <li>
                    <strong>Sales Officer – Standard Chartered Bank (2006–2007)</strong> – 
                    Specialized in lead generation, account opening, and deposit collection in high‑pressure sales environments.
                  </li>
                </ul>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Education</h3>
                <ul className="text-white list-disc list-inside space-y-2">
                  <li><strong>HBO‑ICT (Bachelor’s)</strong> – Fontys University of Applied Sciences, Netherlands (2016–2021)</li>
                  <li><strong>MBA</strong> – Stamford University, Dhaka (2008–2011)</li>
                </ul>
              </div>
            </div>

            {/* Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
