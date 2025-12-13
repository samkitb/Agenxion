import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-primary text-foreground">
      {/* About Section */}
      <section className="container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-center mb-16 animate-fade-in">About Agenxion</h1>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <Card className="bg-gradient-card border-border shadow-card">
                <CardContent className="p-8 space-y-6 text-lg leading-relaxed">
                  <p className="text-foreground">
                    Agenxion was founded by Piyush Bothra, a technology leader with decades of experience in digital transformation, architecture, and AI-driven innovation.
                  </p>
                  <p className="text-muted-foreground">
                    Piyush has spent his career working with software teams to modernize platforms, scale reliably, and adopt new technologies responsibly—developing frameworks that balance speed and long-term platform health.
                  </p>
                  <p className="text-muted-foreground">
                    Agenxion exists to bring that experience to startups, scaleups, and portfolio companies who want intelligent growth without compromising trust.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Placeholder for Future Founder Photo */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-card border border-primary/30 shadow-glow flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">P</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Founder photo placeholder</p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 border border-primary/20 rounded-lg -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-primary/20 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">What You Can Expect</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-card border-primary/30 shadow-glow text-center card-hover">
              <CardContent className="p-8 space-y-4">
                <div className="text-5xl font-bold text-primary">20–40%</div>
                <p className="text-lg text-muted-foreground">reduction in run cost and inference spend</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-primary/30 shadow-glow text-center card-hover">
              <CardContent className="p-8 space-y-4">
                <div className="text-5xl font-bold text-primary">2×</div>
                <p className="text-lg text-muted-foreground">faster release cycles after targeted modernization</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-primary/30 shadow-glow text-center card-hover">
              <CardContent className="p-8 space-y-4">
                <div className="text-5xl font-bold text-primary">30–60%</div>
                <p className="text-lg text-muted-foreground">automation of specific workflows using AI and agentic patterns</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-muted-foreground mt-8">
            Specifics vary by company, but the goal is always the same: measurable, platform-aware impact.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-border">
        <p className="text-center text-muted-foreground">
          © 2025 Agenxion. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;

