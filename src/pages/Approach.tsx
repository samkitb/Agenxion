import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import FlywheelDiagram from "@/components/FlywheelDiagram";

const Approach = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Why Agenxion Exists */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-8 animate-fade-in">
              {/* Accent Bar */}
              <div className="hidden md:block w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full shrink-0" />
              
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Why Agenxion Is Not Another Cloud or AI Consultant</h1>
                
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <div className="space-y-4">
                    <div>
                      <p className="text-foreground font-semibold mb-2">1. Immediate Cost Savings Reinvested Into Innovation</p>
                      <p>
                        We identify structural cloud and ML cost levers, negotiate AWS programs (EDP/MAP), and convert savings into modernization and AI acceleration, creating self-funded innovation.
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-foreground font-semibold mb-2">2. Architecture & Innovation Led by a Fractional CTO</p>
                      <p>
                        You get senior product + architecture leadership without a full-time hire, helping your teams make the right decisions, in the right order, with the right ROI focus.
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-foreground font-semibold mb-2">3. A Proven Flywheel for Reliable, Trustworthy AI Adoption</p>
                      <p>
                        Most companies struggle with agent adoption and governance. We bring a repeatable model, from identifying the first use case to building an internal agentic factory for scaling trustworthy, production-ready agents.
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-foreground font-semibold mb-2">4. AWS-Aligned Without Being AWS-Biased</p>
                      <p>
                        You benefit from insider knowledge of AWS programs, teams, and mechanisms while maintaining independent architectural guidance focused on your best interests.
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-foreground font-semibold mb-2">5. Strategy + Execution Through a Trusted Partner Network</p>
                      <p>
                        Agenxion leads strategy and product/architecture direction; engineering execution is delivered by vetted SI partners giving you speed and quality without big-consulting overhead.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flywheel Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-card/20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Deliver Results</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Every engagement runs through a simple, repeatable cycle that compounds value over time:
            </p>
            
            {/* Flywheel Label */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/50 border border-primary/20 rounded-full mb-12">
              <span className="text-primary font-mono text-sm">Align</span>
              <span className="text-primary/40">→</span>
              <span className="text-primary font-mono text-sm">Plan</span>
              <span className="text-primary/40">→</span>
              <span className="text-primary font-mono text-sm">Build</span>
              <span className="text-primary/40">→</span>
              <span className="text-primary font-mono text-sm">Launch</span>
              <span className="text-primary/40">→</span>
              <span className="text-primary font-mono text-sm">Measure</span>
            </div>
          </div>

          <FlywheelDiagram />

          <p className="text-center text-muted-foreground mt-12 max-w-xl mx-auto italic">
            Each spin of the flywheel makes the next initiative faster and less risky.
          </p>
        </div>
      </section>

      {/* Applogika Partnership */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto bg-card/40 backdrop-blur border-primary/20 overflow-hidden">
            <div className="h-1 w-full bg-gradient-accent" />
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Strategy First. Execution Backed by Trusted Partners.
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Agenxion leads on strategy, architecture, and innovation, and collaborates with trusted engineering partners to turn plans into reality.
                </p>
                <p>
                  Our primary delivery partner, <span className="text-foreground font-medium">Applogika</span>, is an AWS Advanced Consulting Partner with:
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-3 px-4 py-3 bg-primary/10 border border-primary/20 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-medium text-sm">20+ AWS certifications</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 bg-primary/10 border border-primary/20 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-medium text-sm">3 AWS Competencies</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 bg-primary/10 border border-primary/20 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-medium text-sm">Cloud, Data & AI</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                <span className="text-foreground">Competencies:</span> Generative AI, Migration & Modernization, Data & Analytics
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Deep experience in cloud, data, and AI solution delivery.
              </p>
              
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-muted-foreground">
                  This model gives you senior, independent advisory backed by proven engineering capacity—without the overhead of a large consulting firm.
                </p>
              </div>
            </CardContent>
          </Card>
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

export default Approach;
