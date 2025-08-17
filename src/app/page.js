"use client";
import { Link } from "react-scroll";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState, useRef, useEffect } from "react";
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiAmazon,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiLinkedin,
  SiGithub,
} from "react-icons/si";
import { FaJava, FaFileDownload } from "react-icons/fa";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const sendEmail = async (data, reset, setIsSubmitting, setShowSuccess) => {
  setIsSubmitting(true);
  try {
    await emailjs.send(
      "service_kmgifml",
      "template_4qfylve",
      {
        name: data.name,
        email: data.email,
        message: data.message,
      },
      "emmKxtAImBpAiSw0Y"
    );

    setShowSuccess(true);
    reset();

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to send message. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

export default function Home() {
  const [showTyping, setShowTyping] = useState(true);
  const [showmsg, setShowMsg] = useState(false);
  const [showfinalmsg, setShowFinalMsg] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

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
                className=" transition-colors duration-400 cursor-pointer hover:scale-105 hover:bg-white hover:text-mu-black rounded-lg px-4 py-2"
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={800}
                offset={-70}
                className="transition-colors duration-400 cursor-pointer hover:scale-105 hover:bg-white hover:text-mu-black rounded-lg px-4 py-2"
              >
                About
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={800}
                offset={-70}
                className="transition-colors duration-400 cursor-pointer hover:scale-105 hover:bg-white hover:text-mu-black rounded-lg px-4 py-2"
              >
                Skills
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={800}
                offset={-70}
                className="transition-colors duration-400 cursor-pointer hover:scale-105 hover:bg-white hover:text-mu-black rounded-lg px-4 py-2"
              >
                Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                offset={-70}
                className="transition-colors duration-400 cursor-pointer hover:scale-105 hover:bg-white hover:text-mu-black rounded-lg px-4 py-2"
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
              <a
                href="/resume.pdf"
                download="Divye_Pugaloke_Resume.pdf"
                className="bg-gradient-to-r from-mu-red to-red-700 hover:from-red-700 hover:to-mu-red text-white px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-500/25 font-medium flex items-center gap-2 hover:scale-105 "
              >
                <FaFileDownload className="text-lg" />
                Download Resume
              </a>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                offset={50}
                className="border border-white hover:bg-gradient-to-r hover:from-white hover:to-gray-100 hover:text-mu-black text-white px-8 py-3 rounded-lg transition-all duration-300 cursor-pointer hover:scale-105"
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
                    setTimeout(() => {
                      setShowMsg(true);
                    }, 2000);
                  },
                ]}
                wrapper="span"
                speed={50}
                className="text-2xl text-white"
                repeat={0}
              />
            </motion.div>
            <AnimatePresence>
              {showmsg && (
                <motion.p
                  key="message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0 }}
                  onViewportLeave={() => {
                    setShowMsg(false);
                    setShowFinalMsg(true);
                  }}
                  className="mt-15 text-center text-white text-xl"
                >
                  Yup im still trying to figure out how to make this website
                  look good.
                </motion.p>
              )}
            </AnimatePresence>
            {showfinalmsg && (
              <motion.p
                className="mt-15 text-center text-white text-xl"
                onViewportLeave={() => {
                  setShowFinalMsg(false);
                }}
              >
                See I told you I was trying... Go back and see my actual work.
              </motion.p>
            )}
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
                Fresh MACS graduate from Concordia University with a solid
                foundation in the art and science of software development. My
                academic journey took me through Advanced Programming Practices,
                Distributed Systems, Computer Networks, and Software Design
                Methodologies - because apparently, making computers talk to
                each other is harder than making humans do the same! I even
                spent time as a TA for Data Structures and Algorithms, proving I
                can actually explain why trees aren&apos;t just for climbing.
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
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {/* JavaScript */}
              <div className="flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 rounded-lg px-4 py-3 hover:scale-105 transition-transform">
                <SiJavascript className="text-2xl text-yellow-500" />
                <span className="text-white font-medium">JavaScript</span>
              </div>

              {/* Python */}
              <div className="flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-lg px-4 py-3 hover:scale-105 transition-transform">
                <SiPython className="text-2xl text-blue-500" />
                <span className="text-white font-medium">Python</span>
              </div>

              {/* Java */}
              <div className="flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-lg px-4 py-3 hover:scale-105 transition-transform">
                <FaJava className="text-2xl text-orange-500" />
                <span className="text-white font-medium">Java</span>
              </div>

              {/* React */}
              <div className="flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30 rounded-lg px-4 py-3 hover:scale-105 transition-transform">
                <SiReact className="text-2xl text-cyan-500" />
                <span className="text-white font-medium">React</span>
              </div>

              {/* Next.js */}
              <div className="flex items-center gap-3 bg-gradient-to-r from-gray-700/20 to-gray-800/20 border border-gray-600/30 rounded-lg px-4 py-3 hover:scale-105 transition-transform">
                <SiNextdotjs className="text-2xl text-white" />
                <span className="text-white font-medium">Next.js</span>
              </div>

              {/* Node.js */}
              <div className="flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-lg px-4 py-3 hover:scale-105 transition-transform">
                <SiNodedotjs className="text-2xl text-green-500" />
                <span className="text-white font-medium">Node.js</span>
              </div>

              {/* MongoDB */}
              <div className="flex items-center gap-3 bg-gradient-to-r from-green-600/20 to-green-700/20 border border-green-600/30 rounded-lg px-4 py-3 hover:scale-105 transition-transform">
                <SiMongodb className="text-2xl text-green-600" />
                <span className="text-white font-medium">MongoDB</span>
              </div>

              {/* MySQL */}
              <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-blue-700/20 border border-blue-600/30 rounded-lg px-4 py-3 hover:scale-105 transition-transform">
                <SiMysql className="text-2xl text-blue-600" />
                <span className="text-white font-medium">MySQL</span>
              </div>

              {/* AWS */}
              <div className="flex items-center gap-3 bg-gradient-to-r from-orange-400/20 to-orange-500/20 border border-orange-400/30 rounded-lg px-4 py-3 hover:scale-105 transition-transform">
                <SiAmazon className="text-2xl text-orange-400" />
                <span className="text-white font-medium">AWS</span>
              </div>

              {/* Docker */}
              <div className="flex items-center gap-3 bg-gradient-to-r from-blue-400/20 to-blue-500/20 border border-blue-400/30 rounded-lg px-4 py-3 hover:scale-105 transition-transform">
                <SiDocker className="text-2xl text-blue-400" />
                <span className="text-white font-medium">Docker</span>
              </div>

              {/* Git */}
              <div className="flex items-center gap-3 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-lg px-4 py-3 hover:scale-105 transition-transform">
                <SiGit className="text-2xl text-red-500" />
                <span className="text-white font-medium">Git</span>
              </div>

              {/* Tailwind CSS */}
              <div className="flex items-center gap-3 bg-gradient-to-r from-teal-500/20 to-teal-600/20 border border-teal-500/30 rounded-lg px-4 py-3 hover:scale-105 transition-transform">
                <SiTailwindcss className="text-2xl text-teal-500" />
                <span className="text-white font-medium">Tailwind CSS</span>
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
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Featured{" "}
              <span className="text-mu-red !font-outfit !font-[500]">
                Projects
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-2">
              {/* MarkIt Project */}
              <div className="bg-mu-black border-4 border-white rounded-2xl overflow-hidden hover:scale-110 hover:border-mu-red transition-all duration-300 shadow-lg hover:shadow-2xl">
                <div
                  className="h-56 bg-cover bg-center bg-no-repeat rounded-2xl "
                  style={{ backgroundImage: "url(/mark.png)" }}
                />
                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-mu-red">
                    MarkIt
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                    Smart bookmarking solution with Magic Save transcription,
                    semantic search, and AI-powered research assistance for
                    thesis improvements
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex items-center gap-1 bg-black/30 border border-white/30 text-white px-3 py-1 rounded-full text-sm">
                      <SiNextdotjs className="text-xs" />
                      <span>Next.js</span>
                    </div>
                    <div className="flex items-center gap-1 bg-blue-600/20 border border-blue-600/30 text-blue-600 px-3 py-1 rounded-full text-sm">
                      <SiReact className="text-xs" />
                      <span>TypeScript</span>
                    </div>
                    <div className="flex items-center gap-1 bg-green-500/20 border border-green-500/30 text-green-500 px-3 py-1 rounded-full text-sm">
                      <SiMongodb className="text-xs" />
                      <span>Supabase</span>
                    </div>
                    <div className="flex items-center gap-1 bg-blue-500/20 border border-blue-500/30 text-blue-500 px-3 py-1 rounded-full text-sm">
                      <SiTailwindcss className="text-xs" />
                      <span>Tailwind</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://markit-cyan.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mu-red hover:underline"
                    >
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/Divye2401/MarkIt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* D0DSA Project */}
              <div className="bg-mu-black border-4 border-white rounded-2xl overflow-hidden hover:scale-110 hover:border-mu-red transition-all duration-300 shadow-lg hover:shadow-2xl">
                <div
                  className="h-56 bg-cover md:bg-cover bg-center bg-no-repeat rounded-2xl "
                  style={{ backgroundImage: "url(/image.png)" }}
                />
                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-mu-red">
                    D0DSA
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                    Complete DSA learning ecosystem with LeetCode sync,
                    personalized dashboards, smart problem filtering, flashcard
                    PDFs, and AI mock interviews
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex items-center gap-1 bg-cyan-500/20 border border-cyan-500/30 text-cyan-500 px-3 py-1 rounded-full text-sm">
                      <SiReact className="text-xs" />
                      <span>React</span>
                    </div>
                    <div className="flex items-center gap-1 bg-green-500/20 border border-green-500/30 text-green-500 px-3 py-1 rounded-full text-sm">
                      <SiNodedotjs className="text-xs" />
                      <span>Node.js</span>
                    </div>
                    <div className="flex items-center gap-1 bg-purple-600/20 border border-purple-600/30 text-purple-600 px-3 py-1 rounded-full text-sm">
                      <SiReact className="text-xs" />
                      <span>OpenAI</span>
                    </div>
                    <div className="flex items-center gap-1 bg-blue-500/20 border border-blue-500/30 text-blue-500 px-3 py-1 rounded-full text-sm">
                      <SiReact className="text-xs" />
                      <span>Chrome Extension</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://dodsa-five.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mu-red hover:underline"
                    >
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/Divye2401/D0DSA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Frame Analysis Project */}
              <div className="bg-mu-black border-4 border-white rounded-2xl overflow-hidden hover:scale-110 hover:border-mu-red transition-all duration-300 shadow-lg hover:shadow-2xl">
                <div
                  className="h-56 bg-cover bg-center bg-no-repeat rounded-2xl"
                  style={{ backgroundImage: "url(/frame.png)" }}
                />
                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-mu-red">
                    Frame Analysis
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                    ML-powered real-time gaming stream quality analysis
                    integrated with DASH player, providing live performance
                    metrics for streamers
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex items-center gap-1 bg-yellow-500/20 border border-yellow-500/30 text-yellow-500 px-3 py-1 rounded-full text-sm">
                      <SiJavascript className="text-xs" />
                      <span>JavaScript</span>
                    </div>
                    <div className="flex items-center gap-1 bg-purple-500/20 border border-purple-500/30 text-purple-500 px-3 py-1 rounded-full text-sm">
                      <SiPython className="text-xs" />
                      <span>NDNET</span>
                    </div>
                    <div className="flex items-center gap-1 bg-red-500/20 border border-red-500/30 text-red-500 px-3 py-1 rounded-full text-sm">
                      <SiReact className="text-xs" />
                      <span>DASH</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-mu-red hover:underline">
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/Divye2401/Frame-Analysis-using-NDNET"
                      target="_blank"
                      rel="noopener noreferrer"
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
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-gray-300 mb-8 text-center">
                Ready to bring my skills and passion to challenging projects.
                Let&apos;s build something amazing together.
              </p>

              <form
                onSubmit={handleSubmit((data) => {
                  sendEmail(data, reset, setIsSubmitting, setShowSuccess);
                })}
                className="space-y-6"
              >
                {/* Name Field */}
                <div>
                  <input
                    {...register("name", {
                      required: "Ur not voldemort cmon...",
                    })}
                    type="text"
                    placeholder="Your Name"
                    autoComplete="name"
                    className="w-full px-4 py-3 bg-transparent focus:bg-transparent border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-mu-red transition-colors"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <input
                    {...register("email", {
                      required: "We dont have a mailman",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "No, not that one",
                      },
                    })}
                    type="email"
                    placeholder="Your Email"
                    autoComplete="email"
                    className="w-full px-4 py-3 bg-transparent focus:bg-transparent border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-mu-red transition-colors"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <textarea
                    {...register("message", {
                      required: "I know you have something to say",
                    })}
                    placeholder="Your Message"
                    rows="5"
                    autoComplete="off"
                    className="w-full px-4 py-3 bg-transparent focus:bg-transparent border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-mu-red transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-mu-red to-red-700 hover:from-red-700 hover:to-mu-red disabled:from-gray-600 disabled:to-gray-700 text-white px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-500/25 font-medium disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>

              {/* Success Message */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6 p-4 bg-transparent rounded-lg text-center text-white border-2 border-green-500/30"
                  >
                    <p className="text-green-400 font-medium">
                      ✅ Message sent successfully! I&apos;ll get back to you
                      soon :).
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Social Links */}
              <div className="mt-8 text-center">
                <p className="text-gray-400 mb-4">Or connect with me on:</p>
                <div className="flex justify-center gap-6">
                  <a
                    href="https://github.com/Divye2401"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                  >
                    <SiGithub className="text-4xl group-hover:scale-110 transition-transform" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/divye-pugaloke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors group"
                  >
                    <SiLinkedin className="text-4xl group-hover:scale-110 transition-transform" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
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
//Random comment
