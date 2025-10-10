"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">
            <span className="text-primary font-mono">03.</span> Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Ready to start your next project? Let's create something extraordinary together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <Input placeholder="Your Name" className="bg-card/50 border-primary/20 focus:border-primary" />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-card/50 border-primary/20 focus:border-primary"
                />
              </div>
              <div>
                <Input placeholder="Subject" className="bg-card/50 border-primary/20 focus:border-primary" />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  className="bg-card/50 border-primary/20 focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-mono uppercase tracking-wider shadow-lg shadow-primary/50"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="border border-primary/20 rounded-lg p-6 bg-card/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-muted-foreground">hello@metawave.studio</p>
                </div>
              </div>
            </div>

            <div className="border border-primary/20 rounded-lg p-6 bg-card/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="border border-primary/20 rounded-lg p-6 bg-card/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    San Francisco, CA
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-32 pt-12 border-t border-primary/20 text-center">
        <p className="text-muted-foreground font-mono text-sm">© 2025 Metawave Studio. All rights reserved.</p>
      </div>
    </section>
  )
}
