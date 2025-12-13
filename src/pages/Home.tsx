import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Layers, Sparkles, Clock, Target, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import NetworkVisualization from "@/components/NetworkVisualization";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-hero opacity-30" />
        <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-gradient-glow opacity-15 blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Hero Text */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2">
                <span className="text-2xl md:text-3xl font-bold tracking-tight text-primary">Agenxion</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                Advisory You Can Trust. Innovation You Can Measure.
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Turning technology strategy, architecture, and AI innovation into real business outcomes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
                    Book a 30-Min Intro 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground pt-2 border-l-2 border-primary/30 pl-4">
                Built for software leaders who need to reduce cost, modernize platforms, and scale AI responsibly.
              </p>
            </div>

            {/* Right: Network Visualization */}
            <div className="relative h-[400px] lg:h-[550px] animate-scale-in hidden md:block">
              <NetworkVisualization />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Three Pillars */}
      <section className="py-24 relative">
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
            <div className="h-1 w-24 bg-gradient-accent mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Efficiency Panel */}
            <Card className="group bg-card/60 backdrop-blur border-border hover:border-primary/50 transition-all duration-500 overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/50 to-transparent" />
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Zap className="h-8 w-8" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary/70 font-mono">Pillar 01</span>
                    <h3 className="text-2xl font-bold">Efficiency</h3>
                  </div>
                </div>
                
                <p className="text-lg text-primary/80 font-medium mb-6">Lower Cost, Higher Performance</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Identify structural cost levers across compute, data, and ML inference</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Eliminate high-cost bottlenecks and undifferentiated heavy lifting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Optimize AWS footprint, including EDP strategy and negotiation support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Redirect savings into modernization and AI initiatives</span>
                  </li>
                </ul>
                
                <div className="px-4 py-3 rounded-lg bg-primary/10 border border-primary/20">
                  <span className="text-sm font-medium text-primary">Outcome: 20–40% lower run cost and a stronger financial foundation for innovation.</span>
                </div>
              </CardContent>
            </Card>

            {/* Modernization Panel */}
            <Card className="group bg-card/60 backdrop-blur border-border hover:border-primary/50 transition-all duration-500 overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/50 to-transparent" />
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Layers className="h-8 w-8" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary/70 font-mono">Pillar 02</span>
                    <h3 className="text-2xl font-bold">Modernization</h3>
                  </div>
                </div>
                
                <p className="text-lg text-primary/80 font-medium mb-6">A Platform You Can Build On</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Align architecture with your product roadmap and customer experience goals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Prioritize change into Do Now / Do Next / Do Later</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Improve resilience, observability, data readiness, and release velocity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Establish an AI Functional Advisory Board to break organizational silos and guide AI adoption</span>
                  </li>
                </ul>
                
                <div className="px-4 py-3 rounded-lg bg-primary/10 border border-primary/20">
                  <span className="text-sm font-medium text-primary">Outcome: 2× faster engineering cycles and a platform ready for scalable AI and agentic systems.</span>
                </div>
              </CardContent>
            </Card>

            {/* Innovation Panel */}
            <Card className="group bg-card/60 backdrop-blur border-border hover:border-primary/50 transition-all duration-500 overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/50 to-transparent" />
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary/70 font-mono">Pillar 03</span>
                    <h3 className="text-2xl font-bold">Innovation</h3>
                  </div>
                </div>
                
                <p className="text-lg text-primary/80 font-medium mb-6">From AI Features to Agentic Systems</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Identify high-ROI AI and agentic use cases tied to measurable business outcomes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Design trustworthy, human-in-the-loop agent workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Leverage hyperscaler programs to build prototypes at zero or minimal cost</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Partner with efficient engineering teams to scale reliably</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">Convert early wins into a repeatable "agentic factory" framework</span>
                  </li>
                </ul>
                
                <div className="px-4 py-3 rounded-lg bg-primary/10 border border-primary/20">
                  <span className="text-sm font-medium text-primary">Outcome: A scalable framework for delivering trustworthy, production-ready agents.</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-card/20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Engagement Models</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible ways to start—whether you need a thought partner, a deep dive, or a structured innovation program.
            </p>
            <div className="h-1 w-24 bg-gradient-accent mx-auto rounded-full mt-6" />
          </div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Fractional CTO */}
            <Card className="group bg-card/40 backdrop-blur border-border hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-xs font-mono uppercase tracking-wider px-2 py-1 bg-primary/10 text-primary rounded border border-primary/20">Advisory</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Fractional Field CTO Advisory</h3>
                <span className="inline-block text-sm text-primary/80 font-medium mb-4">10–15 hours per week</span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Senior guidance on technology strategy, architecture decisions, cost optimization, modernization, and AI adoption. Ideal for startups and scaleups that need a field-CTO voice without a full-time hire.
                </p>
              </CardContent>
            </Card>

            {/* Sprint */}
            <Card className="group bg-card/40 backdrop-blur border-border hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="text-xs font-mono uppercase tracking-wider px-2 py-1 bg-primary/10 text-primary rounded border border-primary/20">Sprint</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Architecture & Optimization Sprint</h3>
                <span className="inline-block text-sm text-primary/80 font-medium mb-4">4–6 weeks</span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A focused deep dive into platform health, performance, scalability, and cost. You get immediate wins plus a clear modernization and innovation roadmap.
                </p>
              </CardContent>
            </Card>

            {/* Program */}
            <Card className="group bg-card/40 backdrop-blur border-border hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Rocket className="h-5 w-5 text-primary" />
                  <span className="text-xs font-mono uppercase tracking-wider px-2 py-1 bg-primary/10 text-primary rounded border border-primary/20">Program</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation & Agentic Acceleration Program</h3>
                <span className="inline-block text-sm text-primary/80 font-medium mb-4">Multi-phase</span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Identify high-ROI AI/agentic use cases, build prototypes, define governance patterns, and prepare for scalable launch. Designed to take you from "we should do AI" to "we have a repeatable agentic innovation engine."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Can Expect</h2>
            <div className="h-1 w-24 bg-gradient-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card/30 border-primary/20 text-center group hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-4 group-hover:scale-105 transition-transform">20–40%</div>
                <p className="text-muted-foreground">reduction in run cost and inference spend</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/30 border-primary/20 text-center group hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-4 group-hover:scale-105 transition-transform">2×</div>
                <p className="text-muted-foreground">faster release cycles after targeted modernization</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/30 border-primary/20 text-center group hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-4 group-hover:scale-105 transition-transform">30–60%</div>
                <p className="text-muted-foreground">automation of specific workflows using AI and agentic patterns</p>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
            Specifics vary by company, but the goal is always the same: measurable, platform-aware impact.
          </p>
        </div>
      </section>

      {/* Why Agenxion Teaser */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto bg-card/30 backdrop-blur border-primary/20 overflow-hidden">
            <CardContent className="p-8 md:p-12 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              <h2 className="text-2xl md:text-3xl font-bold mb-6">The Real Moat is Trust</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Building an AI feature or agent is easier than ever. The real moat is scaling AI with trust: predictable behavior, clear governance, reliable performance, and clean integration into your product.
              </p>
              <Link 
                to="/approach" 
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors group"
              >
                Learn about our approach 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
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

export default Home;
