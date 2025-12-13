import { useState } from 'react';

const steps = [
  { name: 'Align', description: 'Clarify priorities, constraints, and success metrics' },
  { name: 'Plan', description: 'Create a roadmap that balances quick wins and long-term change' },
  { name: 'Build', description: 'Deliver targeted improvements or prototypes with predictable scope' },
  { name: 'Launch', description: 'Support internal rollout and ecosystem/partner alignment' },
  { name: 'Measure', description: 'Benchmark results and reinvest into the next cycle' },
];

const FlywheelDiagram = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* Horizontal Pipeline */}
      <div className="relative flex items-center justify-between max-w-4xl mx-auto mb-12 px-4">
        {/* Connection Line */}
        <div className="absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20" />
        
        {steps.map((step, index) => (
          <div
            key={step.name}
            className="relative z-10 flex flex-col items-center"
            onMouseEnter={() => setActiveStep(index)}
            onMouseLeave={() => setActiveStep(null)}
          >
            {/* Node */}
            <div
              className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-300 cursor-pointer ${
                activeStep === index
                  ? 'border-primary bg-primary/20 shadow-glow scale-110'
                  : 'border-primary/40 bg-background hover:border-primary/60'
              }`}
            >
              <span className={`text-sm font-bold transition-colors ${
                activeStep === index ? 'text-primary' : 'text-foreground'
              }`}>
                {index + 1}
              </span>
            </div>
            
            {/* Step Name */}
            <span className={`mt-3 text-sm font-semibold transition-colors ${
              activeStep === index ? 'text-primary' : 'text-foreground'
            }`}>
              {step.name}
            </span>
          </div>
        ))}
      </div>

      {/* Step Details Grid */}
      <div className="grid md:grid-cols-5 gap-3 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={step.name}
            className={`p-4 rounded-lg border transition-all duration-300 ${
              activeStep === index
                ? 'border-primary bg-primary/10'
                : 'border-border bg-card/30'
            }`}
            onMouseEnter={() => setActiveStep(index)}
            onMouseLeave={() => setActiveStep(null)}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold ${
                activeStep === index ? 'border-primary text-primary bg-primary/20' : 'border-primary/40 text-muted-foreground'
              }`}>
                {index + 1}
              </div>
              <span className={`font-semibold text-sm ${activeStep === index ? 'text-primary' : 'text-foreground'}`}>
                {step.name}
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlywheelDiagram;
