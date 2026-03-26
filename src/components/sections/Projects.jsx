import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* EverGreen Clinic */}
            <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <h3 className="text-xl font-bold mb-2">EverGreen Clinic</h3>
              <p className="text-gray-400 mb-4">
                Healthcare management platform with patient booking, doctor
                dashboards, admin controls, and accessibility-focused UI
                refinement.
              </p>

              <h4 className="text-sm font-semibold text-blue-400 mb-2">Frontend:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React 19",
                  "Vite 7",
                  "TailwindCSS 4",
                  "Axios",
                  "React Router DOM 7",
                  "React Toastify",
                  "React Spinners",
                ].map((tech) => (
                  <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="text-sm font-semibold text-green-400 mb-2">Backend:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Node.js",
                  "Express 5",
                  "MongoDB",
                  "Mongoose 9",
                  "JWT",
                  "Cloudinary",
                  "Multer",
                  "bcrypt",
                ].map((tech) => (
                  <span key={tech} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-2 my-4">
                <a href="https://ever-green-red-three.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 block">
                  EverGreen Main →
                </a>
                <a href="https://ever-green-lilac.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 block">
                  Admin / Doctor Dashboard →
                </a>
              </div>

              <h4 className="text-sm font-semibold text-red-400 mb-2">Demo video</h4>
              <div className="aspect-video mt-2">
                <iframe
                  src="https://www.youtube.com/embed/Ruc1hIyzR0s"
                  title="EverGreen Demo Video"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>

            {/* GearGrid */}
            <div className="glass rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <h3 className="text-xl font-bold mb-2">GearGrid</h3>
              <p className="text-gray-400 mb-4">
                Full-stack e-commerce app with product grids, secure
                authentication, media uploads, and event-driven workflows
                powered by Inngest.
              </p>

              <h4 className="text-sm font-semibold text-blue-400 mb-2">Frontend:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Next.js 15",
                  "React 19",
                  "Axios",
                  "Clerk",
                  "React Hot Toast",
                  "TailwindCSS",
                ].map((tech) => (
                  <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="text-sm font-semibold text-green-400 mb-2">Backend:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Mongoose 9",
                  "Inngest",
                  "Cloudinary",
                  "JWT",
                ].map((tech) => (
                  <span key={tech} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <a href="https://geargrid-eight.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 block my-4">
                Live Preview →
              </a>

              <h4 className="text-sm font-semibold text-red-400 mb-2">Demo video</h4>
              <div className="aspect-video mt-2">
                <iframe
                  src="https://www.youtube.com/embed/R9yLKyVkS-Y"
                  title="GearGrid Demo Video"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>

            {/* Food Delivery Platform */}
            <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <h3 className="text-xl font-bold mb-2">Food Delivery Platform</h3>
              <p className="text-gray-400 mb-4">
                Complete food delivery solution with responsive frontend, secure
                authentication, real-time order tracking, media uploads, and
                RESTful backend APIs.
              </p>

              <h4 className="text-sm font-semibold text-blue-400 mb-2">Frontend:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React 18",
                  "Vite",
                  "TailwindCSS",
                  "Axios",
                  "Redux Toolkit",
                  "Firebase",
                ].map((tech) => (
                  <span key={tech} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="text-sm font-semibold text-green-400 mb-2">Backend:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Node.js",
                  "Express 4",
                  "MongoDB",
                  "Mongoose 7",
                  "JWT",
                  "bcryptjs",
                  "Cloudinary",
                  "Multer",
                  "Nodemailer",
                  "Socket.io",
                ].map((tech) => (
                  <span key={tech} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-2 my-4">
                <a href="https://food-delivery-38i7.onrender.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 block">
                  Live Preview (Render) →
                </a>
                <a href="https://food-delivery-nine-hazel.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 block">
                  Live Preview (Vercel) →
                </a>
              </div>

              <h4 className="text-sm font-semibold text-red-400 mb-2">Demo video</h4>
              <div className="aspect-video mt-2">
                <iframe
                  src="https://www.youtube.com/embed/rGgPFuePOs8"
                  title="Food Delivery Demo Video"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
