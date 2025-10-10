export function Testimonials() {
  const testimonials = [
    {
      name: "Alex Chen",
      role: "CEO, CryptoVerse",
      content:
        "Metawave Studio transformed our vision into a stunning reality. Their cyberpunk aesthetic perfectly captured our brand's futuristic essence.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Sarah Martinez",
      role: "Founder, NFT Gallery",
      content:
        "Working with James and the team was incredible. They delivered a 3D gallery experience that exceeded all expectations.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "David Kim",
      role: "CTO, MetaMarket",
      content:
        "The attention to detail and innovative design approach made our marketplace stand out. Highly recommend their services.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-foreground mb-12 text-center">What Clients Say</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="bg-card border border-border rounded-lg p-6">
            <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.content}</p>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
