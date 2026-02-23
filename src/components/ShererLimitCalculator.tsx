import React, { useState, useEffect } from 'react';
import { MathBlock } from './MathBlock';
import { motion } from 'motion/react';

export const ShererLimitCalculator: React.FC = () => {
  // Constants
  const G = 6.67430e-11;
  const hbar = 1.054571817e-34;
  const c = 299792458;
  const planckMass = Math.sqrt((hbar * c) / G); // approx 2.176e-8 kg or 21.76 ug

  // State: Mass in kg
  // Default to something below Planck mass, e.g., 1e-9 kg (1 ug)
  const [mass, setMass] = useState<number>(1e-9);

  // Calculate Gamma
  const gamma = (G * mass * mass) / (hbar * c);
  const isCollapsed = gamma >= 1;

  // Logarithmic slider handling
  const minLog = -12; // 1 picogram (1e-12 kg)
  const maxLog = -6;  // 1 milligram (1e-6 kg)
  
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const logVal = parseFloat(e.target.value);
    setMass(Math.pow(10, logVal));
  };

  // Convert mass to log value for slider
  const sliderValue = Math.log10(mass);

  return (
    <div className="w-full max-w-2xl mx-auto my-12 p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
      <h3 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
        <span className="w-2 h-8 bg-cyan-500 rounded-full"/>
        Sherer Limit Calculator
      </h3>
      
      <p className="text-gray-400 mb-8 text-sm">
        Calculate the dimensionless coupling constant <MathBlock latex="\Gamma" /> based on mass. 
        When <MathBlock latex="\Gamma \ge 1" />, objective state collapse occurs.
      </p>

      {/* Slider Section */}
      <div className="mb-10 relative pt-8">
        <div className="flex justify-between text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">
          <span>1ng</span>
          <span>1µg</span>
          <span>1mg</span>
        </div>
        
        <input
          type="range"
          min={minLog}
          max={maxLog}
          step="0.01"
          value={sliderValue}
          onChange={handleSliderChange}
          className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400 transition-all"
        />
        
        {/* Planck Mass Marker */}
        <div 
          className="absolute top-8 w-0.5 h-4 bg-red-500/50 transform -translate-x-1/2 pointer-events-none"
          style={{ left: `${((Math.log10(planckMass) - minLog) / (maxLog - minLog)) * 100}%` }}
        >
          <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 text-[10px] text-red-400 whitespace-nowrap font-mono">
            Sherer Limit
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Mass Display */}
        <div className="bg-black/20 p-4 rounded-xl border border-white/5">
          <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Mass</div>
          <div className="text-xl font-mono text-white">
            {(mass * 1e9).toFixed(4)} µg
          </div>
          <div className="text-xs text-gray-600 mt-1 font-mono">
            {mass.toExponential(2)} kg
          </div>
        </div>

        {/* Planck Mass Reference */}
        <div className="bg-black/20 p-4 rounded-xl border border-white/5">
          <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Sherer Limit</div>
          <div className="text-xl font-mono text-gray-400">
            {(planckMass * 1e9).toFixed(4)} µg
          </div>
          <div className="text-xs text-gray-600 mt-1 font-mono">
            Planck Mass
          </div>
        </div>

        {/* Gamma Display */}
        <div className={`p-4 rounded-xl border transition-colors duration-500 ${isCollapsed ? 'bg-red-900/10 border-red-500/30' : 'bg-cyan-900/10 border-cyan-500/30'}`}>
          <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Coupling (<MathBlock latex="\Gamma" />)</div>
          <div className={`text-xl font-mono ${isCollapsed ? 'text-red-300' : 'text-cyan-300'}`}>
            {gamma.toExponential(2)}
          </div>
        </div>

        {/* Status Display */}
        <div className={`p-4 rounded-xl border flex flex-col justify-center items-center text-center transition-colors duration-500 ${isCollapsed ? 'bg-red-500/10 border-red-500/50' : 'bg-cyan-500/10 border-cyan-500/50'}`}>
          <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Status</div>
          <div className={`font-bold text-sm tracking-wider ${isCollapsed ? 'text-red-400' : 'text-cyan-400'}`}>
            {isCollapsed ? 'OBJECTIVE COLLAPSE' : 'QUANTUM SUPERPOSITION'}
          </div>
        </div>

      </div>

      {/* Explanation Text */}
      <motion.div 
        key={isCollapsed ? 'collapsed' : 'quantum'}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 p-4 bg-white/5 rounded-lg text-sm text-gray-300 leading-relaxed border-l-2 border-white/20"
      >
        {isCollapsed 
          ? "The system's mass exceeds the Sherer Limit. The deterministic drift term dominates, canceling stochastic noise and forcing the system into a single, classical state."
          : "The system's mass is below the threshold. Stochastic noise dominates, allowing the maintenance of quantum superposition and wave-like interference."
        }
      </motion.div>
    </div>
  );
};
