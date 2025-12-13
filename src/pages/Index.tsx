import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, Linkedin, CheckCircle2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-primary text-foreground">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="text-4xl font-bold tracking-tight text-primary mb-8">
            Agenxion
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
            Advisory You Can Trust. Innovation You Can Measure.
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Turning technology strategy, architecture, and AI innovation into real business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
            >
              <a
                href="https://calendly.com/yushbothra/30min "
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a 30-Min Intro <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground pt-4">
            Built for software leaders who need to reduce cost, modernize platforms, and scale AI responsibly.
          </p>
        </div>
      </section>

      {/* Who We Partner With */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-center">Who We Partner With</h2>
          <Card className="bg-gradient-card border-border shadow-lg">
            <CardContent className="p-8 lg:p-12 space-y-6">
              <p className="text-lg text-card-foreground">
                We work with growth-stage software companies who are under pressure to do more with their platforms:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">PE & VC-backed software companies focused on value creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">Mid-market SaaS platforms looking to modernize and scale</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">AI-driven startups that want to move fast without breaking trust</span>
                </li>
              </ul>
              <p className="text-lg text-card-foreground pt-4">
                If you're balancing cloud spend, technical debt, and AI ambition, Agenxion is built for you.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Agenxion Exists */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">Why Agenxion Exists</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              The next wave of software differentiation won't come from adding more features. It will come from transforming platforms into intelligent, adaptive systems that customers can trust.
            </p>
            <p>
              Agenxion helps technology leaders navigate that shift—balancing cost, modernization, and innovation to create measurable impact.
            </p>
            <Card className="bg-gradient-card border-primary/30 shadow-glow">
              <CardContent className="p-8 space-y-4">
                <p className="font-semibold text-primary">Building an AI feature or agent is easier than ever.</p>
                <p>
                  The real moat is scaling AI with trust: predictable behavior, clear governance, reliable performance, and clean integration into your product.
                </p>
              </CardContent>
            </Card>
            <p>
              Agenxion is built on decades of experience helping software teams modernize platforms, scale architectures, and adopt new technologies responsibly—with frameworks that balance speed, reliability, and long-term platform health.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">What We Deliver</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-border shadow-lg hover:shadow-glow transition-shadow">
              <CardContent className="p-8 space-y-6">
                <div className="h-1 w-16 bg-gradient-accent rounded-full"></div>
                <h3 className="text-2xl font-bold">Efficiency – Lower Cost, Higher Performance</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Find structural cost levers across compute, data, and inference</li>
                  <li>Simplify high-cost bottlenecks and undifferentiated load</li>
                  <li>Redirect savings into modernization and AI initiatives</li>
                </ul>
                <p className="font-semibold text-primary pt-4">
                  Outcome: 20–40% lower run cost and higher throughput.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-lg hover:shadow-glow transition-shadow">
              <CardContent className="p-8 space-y-6">
                <div className="h-1 w-16 bg-gradient-accent rounded-full"></div>
                <h3 className="text-2xl font-bold">Modernization – A Platform You Can Build On</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Align architecture with product roadmap and customer experience</li>
                  <li>Prioritize changes into Do Now, Do Next, Do Later</li>
                  <li>Improve resilience, observability, and release velocity</li>
                </ul>
                <p className="font-semibold text-primary pt-4">
                  Outcome: 2× faster engineering cycles and stronger platform foundations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-lg hover:shadow-glow transition-shadow">
              <CardContent className="p-8 space-y-6">
                <div className="h-1 w-16 bg-gradient-accent rounded-full"></div>
                <h3 className="text-2xl font-bold">Innovation – From AI Features to Agentic Systems</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Identify high-ROI AI and agentic use cases tied to real outcomes</li>
                  <li>Design trustworthy, human-in-the-loop agent workflows</li>
                  <li>Build prototypes and patterns that can scale across teams</li>
                </ul>
                <p className="font-semibold text-primary pt-4">
                  Outcome: Faster validation and measurable AI-driven automation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">How We Deliver Results</h2>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Every engagement runs through a simple, repeatable cycle that compounds value over time:
          </p>
          <Card className="bg-gradient-card border-border shadow-lg">
            <CardContent className="p-8 lg:p-12">
              <div className="text-3xl font-bold text-center mb-12 text-primary">
                Align → Plan → Build → Launch → Measure
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Align</h4>
                    <p className="text-muted-foreground">Clarify priorities, constraints, and success metrics</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Plan</h4>
                    <p className="text-muted-foreground">Create a roadmap that balances quick wins and long-term change</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Build</h4>
                    <p className="text-muted-foreground">Deliver targeted improvements or prototypes with predictable scope</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Launch</h4>
                    <p className="text-muted-foreground">Support internal rollout and ecosystem/partner alignment</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    5
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Measure</h4>
                    <p className="text-muted-foreground">Benchmark results and reinvest into the next cycle</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-muted-foreground mt-8 italic">
                Each spin of the flywheel makes the next initiative faster and less risky.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Execution Model */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
            Strategy First. Execution Backed by Trusted Partners.
          </h2>
          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              Agenxion leads on strategy, architecture, and innovation, and collaborates with trusted engineering partners to turn plans into reality.
            </p>
            <Card className="bg-gradient-card border-border shadow-lg">
              <CardContent className="p-8 lg:p-12 space-y-6">
                <p className="text-lg">
                  Our primary delivery partner, <span className="font-semibold text-primary">Applogika</span>, is an AWS Advanced Consulting Partner with:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>20+ AWS certifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>3 AWS Competencies: Generative AI, Migration & Modernization, Data & Analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>Deep experience in cloud, data, and AI solution delivery</span>
                  </li>
                </ul>
                <p className="text-muted-foreground pt-4">
                  This model gives you senior, independent advisory backed by proven engineering capacity—without the overhead of a large consulting firm.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-8">Engagement Models</h2>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Flexible ways to start—whether you need a thought partner, a deep dive, or a structured innovation program.
          </p>
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border shadow-lg">
              <CardContent className="p-8 lg:p-10 space-y-4">
                <h3 className="text-2xl font-bold">1. Fractional Field CTO Advisory</h3>
                <p className="text-muted-foreground">10–15 hours per week</p>
                <p className="text-lg">
                  Senior guidance on technology strategy, architecture decisions, cost optimization, modernization, and AI adoption.
                </p>
                <p className="text-muted-foreground">
                  Ideal for startups and scaleups that need a field-CTO voice without a full-time hire.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-lg">
              <CardContent className="p-8 lg:p-10 space-y-4">
                <h3 className="text-2xl font-bold">2. Architecture & Optimization Sprint</h3>
                <p className="text-muted-foreground">4–6 weeks</p>
                <p className="text-lg">
                  A focused deep dive into platform health, performance, scalability, and cost.
                </p>
                <p className="text-muted-foreground">
                  You get immediate wins plus a clear modernization and innovation roadmap.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-lg">
              <CardContent className="p-8 lg:p-10 space-y-4">
                <h3 className="text-2xl font-bold">3. Innovation & Agentic Acceleration Program</h3>
                <p className="text-muted-foreground">Multi-phase</p>
                <p className="text-lg">
                  Identify high-ROI AI/agentic use cases, build prototypes, define governance patterns, and prepare for scalable launch.
                </p>
                <p className="text-muted-foreground">
                  Designed to take you from "we should do AI" to "we have a repeatable agentic innovation engine."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">What You Can Expect</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-card border-primary/30 shadow-glow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="text-4xl font-bold text-primary">20–40%</div>
                <p className="text-lg">reduction in run cost and inference spend</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-primary/30 shadow-glow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="text-4xl font-bold text-primary">2×</div>
                <p className="text-lg">faster release cycles after targeted modernization</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-primary/30 shadow-glow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="text-4xl font-bold text-primary">30–60%</div>
                <p className="text-lg">automation of specific workflows using AI and agentic patterns</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-muted-foreground mt-8">
            Specifics vary by company, but the goal is always the same: measurable, platform-aware impact.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">About Agenxion</h2>
          <Card className="bg-gradient-card border-border shadow-lg">
            <CardContent className="p-8 lg:p-12 space-y-6 text-lg leading-relaxed">
              <p>
                Agenxion was founded by Piyush Bothra, a technology leader with decades of experience in digital transformation, architecture, and AI-driven innovation.
              </p>
              <p>
                Piyush has spent his career working with software teams to modernize platforms, scale reliably, and adopt new technologies responsibly—developing frameworks that balance speed and long-term platform health.
              </p>
              <p>
                Agenxion exists to bring that experience to startups, scaleups, and portfolio companies who want intelligent growth without compromising trust.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-8">Let's Talk</h2>
          <p className="text-lg text-center text-muted-foreground mb-12">
            If you're thinking about reducing cost, modernizing your platform, or turning AI ideas into something real and measurable, let's have a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
            >
              <a
                href="https://calendly.com/yushbothra/30min "
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a 30-Min Intro Call <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-lg">
            <a href="mailto:piyush@agenxion.com" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <Mail className="h-5 w-5" />
              piyush@agenxion.com
            </a>
            <a href="https://linkedin.com/in/piyushbothra" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <Linkedin className="h-5 w-5" />
              /in/piyushbothra
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-border">
        <p className="text-center text-muted-foreground">
          Copyright © 2025 Agenxion. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
