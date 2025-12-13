import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const NetworkVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize nodes
    const nodeCount = 100;
    const nodes: Node[] = [];
    const rect = canvas.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxRadius = Math.min(rect.width, rect.height) * 0.42;

    for (let i = 0; i < nodeCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * maxRadius;
      nodes.push({
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 2.5 + 1,
      });
    }
    nodesRef.current = nodes;

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const maxRadius = Math.min(rect.width, rect.height) * 0.42;

      // Draw outer glow
      const outerGlow = ctx.createRadialGradient(centerX, centerY, maxRadius * 0.5, centerX, centerY, maxRadius * 1.3);
      outerGlow.addColorStop(0, 'rgba(77, 217, 217, 0.02)');
      outerGlow.addColorStop(0.5, 'rgba(77, 217, 217, 0.05)');
      outerGlow.addColorStop(1, 'rgba(77, 217, 217, 0)');
      ctx.beginPath();
      ctx.arc(centerX, centerY, maxRadius * 1.3, 0, Math.PI * 2);
      ctx.fillStyle = outerGlow;
      ctx.fill();

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Gentle movement
        node.x += node.vx;
        node.y += node.vy;

        // Pull towards center (spherical constraint)
        const dx = node.x - centerX;
        const dy = node.y - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist > maxRadius) {
          node.x = centerX + (dx / dist) * maxRadius;
          node.y = centerY + (dy / dist) * maxRadius;
          node.vx *= -0.5;
          node.vy *= -0.5;
        }

        // Subtle attraction to center
        node.vx += (centerX - node.x) * 0.00005;
        node.vy += (centerY - node.y) * 0.00005;

        // Draw connections
        nodes.forEach((other, j) => {
          if (i >= j) return;
          const ox = other.x - node.x;
          const oy = other.y - node.y;
          const odist = Math.sqrt(ox * ox + oy * oy);
          
          if (odist < 70) {
            const opacity = (1 - odist / 70) * 0.5;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(77, 217, 217, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        });

        // Draw node with glow
        const nodeGlow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 4);
        nodeGlow.addColorStop(0, 'rgba(77, 217, 217, 0.8)');
        nodeGlow.addColorStop(0.5, 'rgba(77, 217, 217, 0.2)');
        nodeGlow.addColorStop(1, 'rgba(77, 217, 217, 0)');
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = nodeGlow;
        ctx.fill();

        // Core node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(77, 217, 217, 0.9)';
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ minHeight: '450px' }}
    />
  );
};

export default NetworkVisualization;
