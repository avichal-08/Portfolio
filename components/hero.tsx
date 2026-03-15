"use client"

import { motion } from "framer-motion"
import { ArrowRight, FileText } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center pt-24 pb-16 text-center overflow-hidden">
      
      {/* Dynamic Background Spotlight: Very subtle in light mode, glowing in dark */}
      <div className="absolute top-0 left-0 right-0 h-[500px] w-full 
        bg-[radial-gradient(circle_400px_at_50%_0%,rgba(234,88,12,0.08),transparent)] 
        dark:bg-[radial-gradient(circle_400px_at_50%_0%,rgba(234,88,12,0.1),transparent)] 
        -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex max-w-4xl flex-col items-center px-4"
      >
        {/* Photo Container */}
        <div className="mb-8 relative h-28 w-28 overflow-hidden rounded-full border border-border/50 shadow-2xl transition-transform hover:scale-105 duration-500 shadow-[0_0_50px_10px_rgba(234,88,12,0.3)] dark:shadow-[0_0_50px_10px_rgba(234,88,12,0.5)]">
          <img 
            src="/me.jpg" 
            alt="Avichal" 
            className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.4)] dark:shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]" />
        </div>

        {/* Dynamic Typography: text-foreground handles the light/dark swap */}
        <h1 className="mb-6 text-6xl font-extrabold tracking-tighter text-foreground sm:text-8xl">
          Avichal<span className="text-orange-600">.</span>
        </h1>

        {/* Paragraphs: text-muted-foreground for that elegant gray look in both modes */}
        <div className="mx-auto mb-10 max-w-2xl flex flex-col gap-5 text-base text-muted-foreground sm:text-lg">
          <p>
            I architect and engineer robust web systems, prioritizing <span className="font-semibold text-foreground">resilient server-side logic</span> and <span className="font-semibold text-foreground">efficient data pipelines</span>.
          </p>
          <p>
            My focus is on managing <span className="font-semibold text-foreground">real-time systems</span>, optimizing databases, and building infrastructure that performs reliably under load.
          </p>
        </div>

        {/* Tech Pills: Added dark: and light: specific border colors */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {["TypeScript", "Node.js", "Next.js", "PostgreSQL"].map((tech) => (
            <div key={tech} className="group flex cursor-default items-center gap-2 rounded-xl border border-dashed border-black/10 dark:border-white/20 bg-transparent px-3.5 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-orange-600/50 hover:bg-orange-600/5 hover:text-foreground">
              {tech === "TypeScript" && <span className="text-[#3178C6] font-bold text-[10px] bg-[#3178C6]/10 px-1 rounded-sm">TS</span>}
              {tech === "Node.js" && <span className="text-[#339933] font-bold text-base leading-none">⬢</span>}
              {tech === "Next.js" && <span className="flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-background font-bold text-[9px]">N</span>}
              {tech === "PostgreSQL" && <span className="text-[#4169E1] font-bold text-base leading-none">🐘</span>}
              {tech}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <a href="#contact" className="flex items-center justify-center gap-2 rounded-full bg-orange-600 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-orange-700 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(234,88,12,0.3)]">
            Get In Touch <ArrowRight className="h-4 w-4" />
          </a>
          <a href="/resume.pdf" target="_blank" className="flex items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-3.5 text-base font-medium text-foreground transition-all hover:bg-accent hover:scale-105 active:scale-95 shadow-sm">
            <FileText className="h-4 w-4 text-muted-foreground" /> Resume
          </a>
        </div>
      </motion.div>
    </section>
  )
}