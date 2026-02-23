import React, { useEffect, useRef } from 'react';

export const SubstrateViz: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = canvas.offsetHeight;

    // Simulation parameters
    const gridSize = 40;
    const rows = Math.ceil(height / gridSize);
    const cols = Math.ceil(width / gridSize);
    
    // State: Phase angle (theta) for each cell
    const grid: number[] = new Array(rows * cols).fill(0).map(() => Math.random() * Math.PI * 2);
    const nextGrid: number[] = new Array(rows * cols).fill(0);

    // Physics constants
    const coupling = 0.15; // Strength of deterministic drift (neighbor alignment)
    const noiseStrength = 0.05; // Strength of stochastic noise
    
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      // Update step
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const idx = y * cols + x;
          
          // Calculate average phase of neighbors (Drift)
          let sinSum = 0;
          let cosSum = 0;
          let count = 0;

          const neighbors = [
            [x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]
          ];

          for (const [nx, ny] of neighbors) {
            if (nx >= 0 && nx < cols && ny >= 0 && ny < rows) {
              const nIdx = ny * cols + nx;
              sinSum += Math.sin(grid[nIdx]);
              cosSum += Math.cos(grid[nIdx]);
              count++;
            }
          }

          // Mouse interaction: Add a strong local drift towards mouse
          const px = x * gridSize + gridSize/2;
          const py = y * gridSize + gridSize/2;
          const dx = mouseX - px;
          const dy = mouseY - py;
          const dist = Math.sqrt(dx*dx + dy*dy);
          
          if (dist < 200) {
             // Influence vector from mouse
             const influence = (1 - dist/200) * 0.2;
             const mouseAngle = Math.atan2(dy, dx);
             sinSum += Math.sin(mouseAngle) * influence * 5;
             cosSum += Math.cos(mouseAngle) * influence * 5;
             count += influence * 5;
          }

          if (count > 0) {
            const avgAngle = Math.atan2(sinSum / count, cosSum / count);
            // Pull current angle towards average
            const currentAngle = grid[idx];
            // Shortest angular distance
            let diff = avgAngle - currentAngle;
            while (diff <= -Math.PI) diff += Math.PI * 2;
            while (diff > Math.PI) diff -= Math.PI * 2;
            
            nextGrid[idx] = currentAngle + diff * coupling;
          } else {
            nextGrid[idx] = grid[idx];
          }

          // Add Stochastic Noise (Langevin term)
          nextGrid[idx] += (Math.random() - 0.5) * noiseStrength;
        }
      }

      // Swap grids
      for (let i = 0; i < grid.length; i++) {
        grid[i] = nextGrid[i];
      }

      // Draw
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const idx = y * cols + x;
          const angle = grid[idx];
          
          // Map angle to color (Phase visualization)
          // Use a "scientific" palette: Cyan/Teal/Blue
          const hue = (angle / (Math.PI * 2)) * 360;
          const saturation = 60;
          const lightness = 40 + Math.sin(Date.now() * 0.001 + x * 0.1) * 10; // Subtle pulse

          ctx.fillStyle = `hsla(${180 + Math.sin(angle)*40}, ${saturation}%, ${lightness}%, 0.8)`;
          
          // Draw cell
          const px = x * gridSize;
          const py = y * gridSize;
          
          // Draw a small line indicating phase direction
          ctx.beginPath();
          ctx.moveTo(px + gridSize/2, py + gridSize/2);
          ctx.lineTo(
            px + gridSize/2 + Math.cos(angle) * (gridSize * 0.4),
            py + gridSize/2 + Math.sin(angle) * (gridSize * 0.4)
          );
          ctx.strokeStyle = `hsla(${180 + Math.sin(angle)*40}, 80%, 70%, 0.5)`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Draw a faint dot
          ctx.beginPath();
          ctx.arc(px + gridSize/2, py + gridSize/2, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full absolute inset-0 opacity-30 pointer-events-none" />;
};
