import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Linkedin } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Main Card */}
            <Card className="bg-card/30 backdrop-blur-xl border-primary/20 shadow-glow overflow-hidden">
              <div className="h-1 w-full bg-gradient-accent" />
              <CardContent className="p-8 md:p-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">Let's Talk</h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto animate-slide-up">
                  If you're thinking about reducing cost, modernizing your platform, or turning AI ideas into something real and measurable, let's have a conversation.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow hover:shadow-[0_0_60px_hsl(var(--primary)/0.4)] transition-all duration-300 group"
                  >
                    <a
                      href="https://calendly.com/yushbothra/30min "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a 30-Min Intro Call
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-border">
                  <a 
                    href="mailto:piyush@agenxion.com" 
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span>piyush@agenxion.com</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/piyushbothra" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <span>/in/piyushbothra</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="mt-8 bg-card/20 backdrop-blur border-border">
              <CardContent className="p-8">
                <h2 className="text-xl font-semibold mb-6">Send a Message</h2>
                <form
                  className="space-y-4"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setStatus(null);
                    setIsSubmitting(true);
                    try {
                      const response = await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ name, email, company, message }),
                      });

                      if (response.ok) {
                        setStatus("success");
                        setName("");
                        setEmail("");
                        setCompany("");
                        setMessage("");
                      } else {
                        setStatus("error");
                      }
                    } catch (error) {
                      console.error("Contact form submission error:", error);
                      setStatus("error");
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Name" 
                      className="bg-background/50 border-border focus:border-primary/50"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      className="bg-background/50 border-border focus:border-primary/50"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Input 
                    placeholder="Company" 
                    className="bg-background/50 border-border focus:border-primary/50"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                  <Textarea 
                    placeholder="Message" 
                    rows={4}
                    className="bg-background/50 border-border focus:border-primary/50 resize-none"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending…" : "Send Message"}
                  </Button>
                </form>
                {status === "success" && (
                  <p className="mt-3 text-sm text-green-600">Message sent! We’ll get back to you soon.</p>
                )}
                {status === "error" && (
                  <p className="mt-3 text-sm text-destructive">Something went wrong. Please try again.</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <p className="text-center text-muted-foreground text-sm">
          © 2025 Agenxion. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
