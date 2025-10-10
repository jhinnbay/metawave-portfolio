import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Quantum Interface",
    category: "UI/UX Design",
    description: "A revolutionary dashboard for quantum computing visualization",
    tags: ["Design", "Development", "3D"],
    image: "/futuristic-quantum-computing-interface-with-hologr.jpg",
  },
  {
    title: "Neural Network",
    category: "Branding",
    description: "Complete brand identity for an AI startup",
    tags: ["Branding", "Strategy", "Design"],
    image: "/cyberpunk-ai-neural-network-visualization-with-neo.jpg",
  },
  {
    title: "Cyber Marketplace",
    category: "Web Design",
    description: "E-commerce platform with immersive 3D product views",
    tags: ["E-commerce", "3D", "Development"],
    image: "/futuristic-cyberpunk-marketplace-with-neon-signs.jpg",
  },
  {
    title: "Holographic UI",
    category: "Interface Design",
    description: "Next-gen holographic user interface concept",
    tags: ["UI Design", "Concept", "Innovation"],
    image: "/holographic-user-interface-with-floating-elements.jpg",
  },
  {
    title: "Space Station OS",
    category: "System Design",
    description: "Operating system interface for space exploration",
    tags: ["UI/UX", "System", "Space"],
    image: "/space-station-control-panel-with-stars-and-planets.jpg",
  },
  {
    title: "Digital Realm",
    category: "Experience Design",
    description: "Immersive virtual reality experience design",
    tags: ["VR", "Experience", "3D"],
    image: "/virtual-reality-cyberpunk-world-with-neon-lights.jpg",
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">
            <span className="text-primary font-mono">02.</span> Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore our portfolio of cutting-edge digital experiences
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-mono text-primary uppercase tracking-wider mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-2 text-balance">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="border-primary/30 text-primary text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
