"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Floating planets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl animate-float" />
        <div className="absolute bottom-40 left-[15%] w-48 h-48 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 right-[20%] w-24 h-24 rounded-full bg-gradient-to-br from-primary/40 to-transparent blur-xl animate-float" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="mb-6 inline-block">
          <span className="text-sm font-mono text-primary uppercase tracking-wider border border-primary/30 px-4 py-2 rounded-full bg-primary/5 backdrop-blur-sm">
            Design Agency
          </span>
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 text-balance">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary animate-pulse-glow">
            METAWAVE
          </span>
          <br />
          <span className="text-foreground">STUDIO</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
          Crafting digital experiences from the future. We design interfaces that transcend reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono uppercase tracking-wider shadow-lg shadow-primary/50 transition-all hover:shadow-xl hover:shadow-primary/60"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10 font-mono uppercase tracking-wider bg-transparent"
          >
            Get in Touch
          </Button>
        </div>

        <button
          onClick={scrollToProjects}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </button>
      </div>
    </section>
  )
}
