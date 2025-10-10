export function About() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">
              <span className="text-primary font-mono">01.</span> About Us
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We are a collective of designers, developers, and digital artists pushing the boundaries of what's
              possible in the digital realm.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our work exists at the intersection of technology and art, creating immersive experiences that captivate
              and inspire.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-lg border border-primary/30 bg-card/50 backdrop-blur-sm p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="text-6xl font-bold text-primary mb-2">10+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-6xl font-bold text-secondary mb-2">500+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-6xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
