"use client";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export default function Home() {
  const [showTyping, setShowTyping] = useState(true);
  return (
    <div className="min-h-screen bg-mu-black text-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-mu-black/80 backdrop-blur-sm border-b border-gray-800">
        <nav className="container mx-auto px-3 py-4">
          <div className="flex justify-between items-center">
            <div className="text-4xl !font-[600] text-white pl-2">DP</div>
            <div className="hidden md:flex space-x-8">
              <Link
                to="hero"
                smooth={true}
                duration={800}
                offset={-70}
                className=" transition-colors duration-500 cursor-pointer hover:scale-105 hover:bg-white hover:text-mu-black rounded-lg px-4 py-2"
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={800}
                offset={-70}
                className="transition-colors duration-500 cursor-pointer hover:scale-105 hover:bg-white hover:text-mu-black rounded-lg px-4 py-2"
              >
                About
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={800}
                offset={-70}
                className="transition-colors duration-500 cursor-pointer hover:scale-105 hover:bg-white hover:text-mu-black rounded-lg px-4 py-2"
              >
                Skills
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={800}
                offset={-70}
                className="transition-colors duration-500 cursor-pointer hover:scale-105 hover:bg-white hover:text-mu-black rounded-lg px-4 py-2"
              >
                Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                offset={-70}
                className="transition-colors duration-500 cursor-pointer hover:scale-105 hover:bg-white hover:text-mu-black rounded-lg px-4 py-2"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center px-6 bg-mu-black"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-7xl font-medium mb-6"
            >
              Divye{" "}
              <span className="text-mu-red !font-outfit !font-[600]">
                Pugaloke
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-gray-300"
            >
              Software Developer
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4 justify-center"
            >
              <Link
                to="projects"
                smooth={true}
                duration={800}
                offset={-70}
                className="bg-gradient-to-r from-mu-red to-red-700 hover:from-red-700 hover:to-mu-red text-white px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-500/25 cursor-pointer"
              >
                View My Work
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                offset={-70}
                className="border border-white hover:bg-gradient-to-r hover:from-white hover:to-gray-100 hover:text-mu-black text-white px-8 py-3 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Get In Touch
              </Link>
            </motion.div>
            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showTyping ? 1 : 0 }}
              transition={{
                duration: showTyping ? 0.8 : 0.5,
                delay: showTyping ? 1.2 : 0,
              }}
              className="mt-15 text-center"
            >
              <TypeAnimation
                sequence={[
                  1500, // Wait 1 second before starting
                  "Coder..",
                  2000,
                  "Gamer..",
                  2000,
                  "Solver..",
                  1500,
                  () => {
                    setShowTyping(false);
                  },
                ]}
                wrapper="span"
                speed={50}
                className="text-2xl text-white"
                repeat={0}
              />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 px-6"
        >
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-center">
              About{" "}
              <span className="text-mu-red !font-outfit !font-[500]">Me</span>
            </h2>
            <div className="text-lg text-gray-300 space-y-6 flex-col">
              <p className="">
                Fresh MACS graduate from Concordia University (Class of 2025)
                with a solid foundation in the art and science of software
                development. My academic journey took me through Advanced
                Programming Practices, Distributed Systems, Computer Networks,
                and Software Design Methodologies - because apparently, making
                computers talk to each other is harder than making humans do the
                same! I even spent time as a TA for Data Structures and
                Algorithms, proving I can actually explain why trees aren&apos;t
                just for climbing.
              </p>
              <p>
                What brought me to Canada wasn&apos;t just the promise of maple
                syrup and politeness (though those are nice perks). I was
                genuinely fascinated by diving deeper into computer science
                fundamentals - there&apos;s something oddly satisfying about
                problem-solving, debugging those sneaky bugs that hide in plain
                sight, and finding creative solutions. You know, like figuring
                out how to make animations behave properly without breaking
                entire layouts - that&apos;s the kind of &apos;aha!&apos; moment
                that gets me excited about code.
              </p>
              <p>
                My programming journey started with Java back in school - the
                language that teaches you patience through verbosity. Python
                became my data whisperer during my Data Science internship,
                where I spent months convincing datasets to reveal their secrets
                and building predictive models (18% accuracy improvement, thank
                you very much). JavaScript entered my life during my Junior
                Developer role, where I built dashboards, crafted APIs, and
                wrestled with MongoDB - nothing quite prepares you for debugging
                async JavaScript while managing data flows.
              </p>
              <p>
                The most challenging part of development isn&apos;t actually the
                technical implementation - though MongoDB does throw its fair
                share of tantrums. The real challenge is on the customer side:
                translating business requirements into actionable technical
                plans, managing expectations, and ensuring what we build
                actually solves the problems they thought they had (which
                aren&apos;t always the problems they actually had).
              </p>
              <p>
                When I&apos;m not debugging code, you&apos;ll find me in Rainbow
                Six Siege perfecting the art of tactical patience - I&apos;m the
                guy who will hold an angle for 3 minutes straight and still
                somehow get the perfect headshot when you finally peek
                (don&apos;t you dare!). I&apos;m also a dedicated Manchester
                United fan, which means I&apos;ve developed an impressive
                tolerance for disappointment - a skill that surprisingly
                translates well to debugging production code at 2 AM. Outside
                the digital world, I stay active with swimming, soccer, and
                athletics.
              </p>
              <p>
                Looking ahead, I&apos;m genuinely excited about the generative
                AI revolution and its practical applications. My next learning
                targets are RAG systems and MCP servers, because there&apos;s
                something fascinating about building AI that can actually access
                and reason with real-world data. I&apos;ve got my AWS Cloud
                Developer certification, though I&apos;ll admit it&apos;s more
                theoretical knowledge than hands-on battle scars at this point -
                but that&apos;s exactly the kind of challenge I&apos;m looking
                forward to tackling next.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 px-6 bg-mu-black border-t border-gray-800"
        >
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Skills &{" "}
              <span className="text-mu-red !font-outfit !font-[500]">
                Technologies
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <h3 className="font-semibold mb-2">Frontend</h3>
                <p className="text-sm text-gray-300">
                  React, Next.js, JavaScript
                </p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-semibold mb-2">Backend</h3>
                <p className="text-sm text-gray-300">Node.js, Python, Java</p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-semibold mb-2">Database</h3>
                <p className="text-sm text-gray-300">MongoDB, SQL</p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-semibold mb-2">Tools</h3>
                <p className="text-sm text-gray-300">AWS, Docker, Git</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 px-6"
        >
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Featured{" "}
              <span className="text-mu-red !font-outfit !font-[500]">
                Projects
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* MarkIt Project */}
              <div className="bg-mu-black border border-gray-800 rounded-lg overflow-hidden hover:border-mu-red transition-colors">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: "url(/markit.png)" }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-mu-red">MarkIt</h3>
                  <p className="text-gray-300 mb-4">
                    Smart bookmarking solution with Magic Save transcription,
                    semantic search, and AI-powered research assistance for
                    thesis improvements
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-mu-red text-white px-3 py-1 rounded text-sm">
                      JavaScript
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-mu-red hover:underline">
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/Divye2401/MarkIt"
                      className="text-gray-300 hover:text-white"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* D0DSA Project */}
              <div className="bg-mu-black border border-gray-800 rounded-lg overflow-hidden hover:border-mu-red transition-colors">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: "url(/dodsa.png)" }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-mu-red">D0DSA</h3>
                  <p className="text-gray-300 mb-4">
                    Complete DSA learning ecosystem with LeetCode sync,
                    personalized dashboards, smart problem filtering, flashcard
                    PDFs, and AI mock interviews
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-mu-red text-white px-3 py-1 rounded text-sm">
                      JavaScript
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-mu-red hover:underline">
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/Divye2401/D0DSA"
                      className="text-gray-300 hover:text-white"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Frame Analysis Project */}
              <div className="bg-mu-black border border-gray-800 rounded-lg overflow-hidden hover:border-mu-red transition-colors">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: "url(/markIt2.png)" }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-mu-red">
                    Frame Analysis
                  </h3>
                  <p className="text-gray-300 mb-4">
                    ML-powered real-time gaming stream quality analysis
                    integrated with DASH player, providing live performance
                    metrics for streamers
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-mu-red text-white px-3 py-1 rounded text-sm">
                      JavaScript
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-mu-red hover:underline">
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/Divye2401/Frame-Analysis-using-NDNET"
                      className="text-gray-300 hover:text-white"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 px-6 bg-mu-black border-t border-gray-800"
        >
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Get In{" "}
              <span className="text-mu-red !font-outfit !font-[500]">
                Touch
              </span>
            </h2>
            <div className="text-center">
              <p className="text-lg text-gray-300 mb-8">
                Ready to bring my skills and passion to challenging projects.
                Let&apos;s build something amazing together.
              </p>
              <a
                href="mailto:divye.canada@gmail.com"
                className="bg-gradient-to-r from-mu-red to-red-700 hover:from-red-700 hover:to-mu-red text-white px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-500/25 inline-block"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-mu-black border-t border-gray-800 py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Divye Pugaloke. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
