import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MathBlock } from './components/MathBlock';
import { SubstrateViz } from './components/SubstrateViz';
import { ShererLimitCalculator } from './components/ShererLimitCalculator';
import { ChevronDown, Atom, Activity, Zap, Radio, Globe, Cpu } from 'lucide-react';

const Section: React.FC<{ title: string; children: React.ReactNode; className?: string; icon?: React.ElementType }> = ({ title, children, className = '', icon: Icon }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`py-24 px-6 md:px-12 max-w-5xl mx-auto border-l border-white/10 ml-4 md:ml-auto md:mr-auto pl-8 md:pl-12 relative ${className}`}
    >
      <div className="absolute -left-[5px] top-24 w-2.5 h-2.5 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
      <div className="flex items-center gap-4 mb-8">
        {Icon && <Icon className="w-8 h-8 text-cyan-400/80" strokeWidth={1.5} />}
        <h2 className="text-3xl md:text-4xl font-serif text-white/90 tracking-tight">
          {title}
        </h2>
      </div>
      <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
        {children}
      </div>
    </motion.section>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 z-0">
        <SubstrateViz />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />
      </div>
      
      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-tight">
            Substrate <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-400">Mechanics</span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto mb-12"
        >
          A Unified Pre-Geometric Framework for Quantum-Gravitational Coherence
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex justify-center gap-8 text-sm font-mono text-cyan-500/60 uppercase tracking-widest">
            <span>Non-Local</span>
            <span>•</span>
            <span>Pre-Geometric</span>
            <span>•</span>
            <span>Stochastic</span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-sm uppercase tracking-wider rounded-full hover:bg-cyan-500/20 transition-colors"
          >
            Access Research Data
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/20 animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.div>
    </div>
  );
};

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-gray-200 selection:bg-cyan-500/30 selection:text-cyan-100">
      <Hero />

      <main className="relative z-10 pb-32">
        <Section title="The Crisis in Physics" icon={Activity}>
          <p>
            The crisis in modern theoretical physics is characterized by a fundamental schism between the two pillars of twentieth-century science: <strong className="text-white font-medium">General Relativity</strong>, which describes the macroscopic universe as a deterministic, curved manifold, and <strong className="text-white font-medium">Quantum Mechanics</strong>, which defines the microscopic realm as a probabilistic wave-function evolution.
          </p>
          <p>
            Albert Einstein famously resisted the nondeterministic nature of the uncertainty principle. His conviction that "God does not play dice" was a demand for a complete physical theory that did not rely on the act of measurement to define state variables. Standard quantum mechanics fails to define what constitutes a "measurement" or where the "Heisenberg cut" between the quantum system and the classical apparatus should be placed.
          </p>
          <p>
            These two frameworks are ontologically incompatible, particularly at the Planck scale. Substrate Mechanics offers a resolution to this epistemological crisis by positing that neither spacetime nor quantum uncertainty are fundamental features of reality. Instead, they are emergent properties of a deeper, pre-geometric tensor field, <MathBlock latex="\Phi_{ab}" />, operating within a stochastic medium. The transition from quantum to classical behavior is not a result of "magical observers" but an emergent property of this physical substrate.
          </p>
          <div className="mt-6 p-6 bg-white/5 rounded-xl border border-white/10">
            <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">The Hierarchy of Emergence</h4>
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-[1fr_2fr] gap-4 border-b border-white/5 pb-2">
                <span className="text-white">Substrate Mechanics</span>
                <span className="text-gray-400">Pre-geometric tensor field <MathBlock latex="\Phi_{ab}" /> evolution via Langevin Dynamics.</span>
              </div>
              <div className="grid grid-cols-[1fr_2fr] gap-4 border-b border-white/5 pb-2">
                <span className="text-white">Field Theory</span>
                <span className="text-gray-400">Wave propagation and particle interactions in vacuum (Maxwell, QFT).</span>
              </div>
              <div className="grid grid-cols-[1fr_2fr] gap-4">
                <span className="text-white">General Relativity</span>
                <span className="text-gray-400">Macroscopic curvature and gravitational dynamics.</span>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Langevin Dynamics & The Substrate" icon={Atom}>
          <p>
            The universe is composed of a complex, pre-geometric tensor field <MathBlock latex="\Phi_{ab}" /> that evolves in "stochastic time" (<MathBlock latex="\tau" />). This parameter represents the sequential update of substrate states rather than a geometric dimension. Within this framework, the vacuum is not empty space but a continuous, non-particulate dielectric medium characterized by intrinsic properties such as impedance (<MathBlock latex="Z_0" />), permittivity (<MathBlock latex="\epsilon_0" />), and permeability (<MathBlock latex="\mu_0" />). The dynamics are governed by a modified Langevin equation:
          </p>
          <div className="my-8 p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm shadow-lg">
            <MathBlock 
              block 
              latex="\frac{\partial \Phi_{ab}(x, \tau)}{\partial \tau} = - \frac{\delta S_{drift}[\Phi]}{\delta \Phi_{ab}(x, \tau)} + \eta_{ab}(x, \tau)" 
              className="text-xl md:text-2xl text-cyan-100"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/5">
              <h3 className="text-white font-serif text-xl mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Deterministic Drift
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                The term <MathBlock latex="- \frac{\delta S_{drift}}{\delta \Phi_{ab}}" /> represents the structural gradient pulling the substrate toward its lowest energy state (maximum coherence). This drift is the physical origin of what we perceive as the deterministic laws of gravity and inertia.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/5">
              <h3 className="text-white font-serif text-xl mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Stochastic Noise
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                The term <MathBlock latex="\eta_{ab}" /> represents violent microscopic fluctuations (Gaussian white noise). While <MathBlock latex="\langle \eta_{ab} \rangle = 0" />, the variance <MathBlock latex="\langle \eta_{ab}^2 \rangle \neq 0" />. This noise is the underlying mechanism for quantum uncertainty.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-500 italic">
            Wave-particle duality is thus essentially a Fokker-Planck process: a localized topological defect is "buffeted" by substrate noise, creating the probability distributions we interpret as wave functions.
          </p>
        </Section>

        <Section title="The Sherer Limit: Objective Collapse" icon={Zap}>
          <p>
            Substrate Mechanics resolves the measurement problem by defining state collapse as a thermodynamic threshold. The transition between quantum and classical regimes is governed by the dimensionless coupling constant <MathBlock latex="\Gamma" />:
          </p>
          <div className="my-6 flex justify-center">
            <MathBlock block latex="\Gamma(M) = \frac{G M^2}{\hbar c}" className="text-xl text-cyan-100" />
          </div>
          <p>
            The effective interaction Hamiltonian is defined as:
          </p>
          <div className="my-4 flex justify-center">
            <MathBlock block latex="H_{eff} = \int d^3x \left[ J^\mu A_\mu + i \hbar (1 - \Gamma) \eta_{ab} \Phi^{ab} \right]" className="text-lg text-gray-300" />
          </div>
          <p>
            For microscopic particles (<MathBlock latex="\Gamma \ll 1" />), the noise term dominates, maintaining superposition. When mass reaches the <strong>Sherer Limit</strong> (~22 micrograms), <MathBlock latex="\Gamma \ge 1" />. The dampening term <MathBlock latex="(1-\Gamma)" /> cancels the noise, and the system "freezes" into a classical state due to the substrate's gravitational self-energy.
          </p>
          
          <div className="my-8 overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-400">
              <thead className="text-xs text-cyan-400 uppercase bg-white/5">
                <tr>
                  <th className="px-6 py-3">System Type</th>
                  <th className="px-6 py-3">Mass Scale</th>
                  <th className="px-6 py-3">Coupling <MathBlock latex="\Gamma" /></th>
                  <th className="px-6 py-3">Regime</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4">Electron</td>
                  <td className="px-6 py-4"><MathBlock latex="10^{-30} \text{ kg}" /></td>
                  <td className="px-6 py-4"><MathBlock latex="10^{-45}" /></td>
                  <td className="px-6 py-4">Quantum (Pure Wave)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4">Large Molecules</td>
                  <td className="px-6 py-4"><MathBlock latex="10^{-24} \text{ kg}" /></td>
                  <td className="px-6 py-4"><MathBlock latex="10^{-33}" /></td>
                  <td className="px-6 py-4">Mesoscopic (Interference possible)</td>
                </tr>
                <tr className="border-b border-white/5 bg-cyan-900/20">
                  <td className="px-6 py-4 font-bold text-cyan-300">Sherer Limit</td>
                  <td className="px-6 py-4 font-bold text-cyan-300"><MathBlock latex="22 \mu\text{g}" /></td>
                  <td className="px-6 py-4 font-bold text-cyan-300"><MathBlock latex="\approx 1.0" /></td>
                  <td className="px-6 py-4 font-bold text-cyan-300">Transition (Collapse)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4">Dust Mote</td>
                  <td className="px-6 py-4"><MathBlock latex="1 \text{ mg}" /></td>
                  <td className="px-6 py-4"><MathBlock latex="10^3" /></td>
                  <td className="px-6 py-4">Classical (Pure Particle)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Human</td>
                  <td className="px-6 py-4"><MathBlock latex="70 \text{ kg}" /></td>
                  <td className="px-6 py-4"><MathBlock latex="10^{13}" /></td>
                  <td className="px-6 py-4">Classical (Deterministic)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <ShererLimitCalculator />
          </div>
        </Section>

        <Section title="Computational Proof: QuTiP Simulation" icon={Cpu}>
          <p>
            To demonstrate that substrate terms reproduce the quantum-to-classical transition, we utilize the Quantum Toolbox in Python (QuTiP) to model a "Topological Knot" as a quantum harmonic oscillator.
          </p>
          <p className="mt-4">
            In the substrate model, we introduce a non-linear collapse operator that scales with <MathBlock latex="\Gamma" />. The "Drift" acts as a continuous position measurement performed by the substrate itself. The "Collapse Rate" in the Lindblad master equation is defined by:
          </p>
          <div className="my-6 flex justify-center p-4 bg-white/5 rounded-xl border border-white/10">
            <MathBlock block latex="\text{collapse\_rate} = \sqrt{\Gamma \cdot f_{\text{update}}}" className="text-xl text-cyan-100" />
          </div>
          <p>
            Simulating a "Cat State" (<MathBlock latex="|coherent(2)\rangle + |coherent(-2)\rangle" />) reveals:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-400">
            <li><strong>Low Mass (<MathBlock latex="M < 1.0" />):</strong> <MathBlock latex="\Gamma \approx 0" />. High fringe visibility; particle behaves as a wave.</li>
            <li><strong>The Sherer Spike (<MathBlock latex="M \approx 1.0" />):</strong> Quadratic scaling of <MathBlock latex="\Gamma" /> activates the collapse rate sharply. The non-linear drift forces the wave function to "choose" a position.</li>
            <li><strong>High Mass (<MathBlock latex="M > 1.0" />):</strong> Coherence drops to zero instantly. Standard QM predicts a flat line, failing to account for this natural transition.</li>
          </ul>
        </Section>

        <Section title="Emergent Spacetime & Dark Energy" icon={Globe}>
          <p>
            Spacetime is not a physical container but a thermodynamic expectation value. The macroscopic metric <MathBlock latex="g_{\mu\nu}" /> is derived via covariant coarse-graining of the substrate field:
          </p>
          <div className="my-8 overflow-x-auto p-4 bg-black/20 rounded-lg">
            <MathBlock 
              block 
              latex="g_{\mu\nu}(x) = \int d^4y \sqrt{-g(y)} \, \mathcal{K}_\sigma(x, y) \langle \Phi_{ab}(y) \rangle_\eta" 
              className="text-lg text-cyan-100"
            />
          </div>
          <p>
            This integration averages out external grid coordinates, ensuring the resulting geometry is fundamentally relational and respects General Relativity.
          </p>
          
          <h3 className="text-2xl font-serif text-white mt-12 mb-4">The Dark Energy Solution</h3>
          <p>
            The cosmological constant (<MathBlock latex="\Lambda" />) is identified as the macroscopic thermodynamic "exhaust" of the substrate's internal variance. By holographically coarse-graining the Planck density noise over the Hubble radius (<MathBlock latex="R_H" />):
          </p>
          <div className="my-6 space-y-4">
            <MathBlock block latex="\rho_\Lambda = \rho_P \left( \frac{l_P}{R_H} \right)^2 = \frac{c^4}{G R_H^2}" className="text-lg text-gray-300" />
            <p className="text-center text-sm text-gray-500">Substituting into Einstein's field equations yields:</p>
            <MathBlock block latex="\Lambda \approx \frac{1}{R_H^2}" className="text-xl text-cyan-100" />
          </div>
          <p>
            This resolves the 120-order-of-magnitude discrepancy in standard theory. Dark Energy is not an exotic fluid, but the residual vacuum pressure of the substrate.
          </p>
        </Section>

        <Section title="Gauge Symmetries & Black Holes" icon={Atom}>
          <p>
            Standard Model forces are reinterpreted as emergent topological geometries within the <MathBlock latex="\Phi_{ab}" /> field.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="p-5 border border-white/10 rounded-lg">
              <h4 className="text-white font-medium mb-2">Electromagnetism (U1)</h4>
              <p className="text-sm text-gray-400 mb-3">
                Electrons are phase vortices. The EM field emerges to maintain phase continuity:
              </p>
              <MathBlock block latex="A_\mu \propto \partial_\mu \theta" className="text-cyan-200" />
            </div>
            <div className="p-5 border border-white/10 rounded-lg">
              <h4 className="text-white font-medium mb-2">QCD (SU3)</h4>
              <p className="text-sm text-gray-400 mb-3">
                Quarks are topological knots. Gluons are substrate strain tensors. The potential represents the drift required to stretch this tension:
              </p>
              <MathBlock block latex="V(r) = -\frac{4}{3} \frac{\alpha_s \hbar c}{r} + \sigma r" className="text-cyan-200" />
            </div>
          </div>
          
          <h3 className="text-2xl font-serif text-white mt-12 mb-4">Black Holes & Information</h3>
          <p>
            Substrate Mechanics rejects physical singularities. The event horizon marks a <strong>thermodynamic phase boundary</strong>. Inside, matter "drops out" of the emergent metric <MathBlock latex="g_{\mu\nu}" /> and returns to the pre-geometric <MathBlock latex="\Phi_{ab}" /> state. Information is never lost; it is simply reconfigured within the substrate's internal coherence structure, akin to ice melting into water.
          </p>
        </Section>

        <Section title="Empirical Data & TEQ Project" icon={Radio}>
          <p>
            Theoretical predictions must be validated against high-precision experimental data. The <strong>TEQ (Testing the Large-Scale Limit of Quantum Mechanics)</strong> project investigates this boundary using levitated nanoparticles in ultra-low noise environments.
          </p>
          <p className="mt-4">
            Non-interferometric tests monitor a system's energy for "spontaneous heating"—a predicted side-effect of the collapse process. If Substrate Mechanics is correct, the "Decoherence Rate vs. Mass" dataset should exhibit a non-linear "spike" as the mass approaches the 22-microgram scale.
          </p>
          
          <div className="my-8 p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">Predicted Decoherence Signature</div>
            <MathBlock 
              block 
              latex="\lambda_{total} = \lambda_{gas} + \lambda_{thermal} + (\Gamma \cdot f_{update})" 
              className="text-lg text-cyan-100"
            />
          </div>
          
          <h3 className="text-xl font-serif text-white mt-8 mb-4">Insights from ZnS Nanoparticles</h3>
          <p className="mb-4">
            The study of ZnS nanoparticles provides a practical example of size-dependent thresholds. The transition in electrical conduction mechanisms mirrors the substrate logic where the "spatial extent" of a topological knot relative to the substrate's update frequency determines its quantum status.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-400">
              <thead className="text-xs text-cyan-400 uppercase bg-white/5">
                <tr>
                  <th className="px-6 py-3">Parameter</th>
                  <th className="px-6 py-3">ZnS Nanoparticle Study</th>
                  <th className="px-6 py-3">Substrate Mechanics Model</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 font-medium text-white">Key Formula</td>
                  <td className="px-6 py-4">Debye-Scherrer (<MathBlock latex="D = K\lambda/\beta\cos\theta" />)</td>
                  <td className="px-6 py-4">Sherer Limit (<MathBlock latex="\Gamma = GM^2/\hbar c" />)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 font-medium text-white">Critical Scale</td>
                  <td className="px-6 py-4">Crystallite Size (<MathBlock latex="\sim 4.47 \text{ nm}" />)</td>
                  <td className="px-6 py-4">Planck Mass (<MathBlock latex="\sim 22 \mu\text{g}" />)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4 font-medium text-white">Observation</td>
                  <td className="px-6 py-4">Peak Broadening (Quantum Size Effect)</td>
                  <td className="px-6 py-4">Coherence Collapse (Classical Transition)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Mechanism</td>
                  <td className="px-6 py-4">Lattice Strain / Dislocation</td>
                  <td className="px-6 py-4">Substrate Drift / Noise</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Gravitational Decoherence & Time Dilation" icon={Globe}>
          <p>
            Decoherence is not just an environmental effect but a universal gravitational phenomenon. In Substrate Mechanics, the intrinsic fuzziness of spacetime at the Planck scale is the noise term <MathBlock latex="\eta_{ab}" />.
          </p>
          <p className="mt-4">
            When the spatial distance between two states in a superposition becomes large enough, the gravitational time dilation between those "branches" causes them to dephase. The "update frequency" of the substrate is influenced by the local gravitational potential, leading to a self-measuring universe.
          </p>
          <p className="mt-4">
            Recent studies on atomic clock interferometers show that relativistic time dilation causes entanglement between internal states (the "clock") and position. In the substrate model, this is the "Drift" forcing the topological knot to synchronize with the local substrate frequency. A "coherence lag" across a gradient eventually forces a collapse into a localized particle.
          </p>
        </Section>

        <Section title="Metric Engineering" icon={Cpu}>
          <p>
            The framework opens pathways for <strong>Metric Engineering</strong>—manipulating the substrate's thermodynamic properties directly.
          </p>
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="text-white font-medium text-lg">Inertial Decoupling</h4>
              <p className="text-gray-400 mt-2">
                In macroscopic quantum states like BECs, the coherence fraction <MathBlock latex="\chi" /> approaches unity. This suppresses the substrate's stochastic noise scattering, effectively reducing inertial drag:
              </p>
              <div className="my-4 pl-4 border-l-2 border-cyan-500/50">
                <MathBlock 
                  block 
                  latex="\Pi_{\mu\nu}^{eff} = (1 - \chi) \Pi_{\mu\nu}^{classical} + \chi \Pi_{\mu\nu}^{boundary}" 
                  className="text-cyan-100"
                />
              </div>
              <p className="text-gray-400">
                This implies that highly coherent macroscopic objects could undergo extreme acceleration without experiencing classical G-forces, as the "volume drag" vanishes.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium text-lg">Localized <MathBlock latex="\Lambda" /> Modulation & Tesla's Waves</h4>
              <p className="text-gray-400 mt-2">
                By locally suppressing noise variance (<MathBlock latex="\eta_{ab}^2" />), one can engineer gradients in vacuum pressure. This allows for apparent superluminal transit via metric contraction, where speed is limited only by the substrate's update rate (<MathBlock latex="f_{update}" />) rather than light speed (<MathBlock latex="c" />).
              </p>
              <p className="text-gray-400 mt-4">
                This framework offers a reinterpretation of historical anomalies, such as Nikola Tesla's reported observations of superluminal wave propagation (<MathBlock latex="1.573c" />). Substrate Mechanics employs algebraic response operators (<MathBlock latex="R" />) to describe how matter and energy displace the substrate. These "substrate waves" are longitudinal excitations of the medium itself, which can propagate faster than transverse electromagnetic waves constrained by the Lieb-Robinson bound (<MathBlock latex="c" />).
              </p>
            </div>
          </div>
        </Section>

        <Section title="Addressing Resistance & Objections" icon={Activity}>
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-serif text-xl mb-2">Objection: "Is this just Aether theory?"</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                <strong>Response:</strong> Historical aether theories failed because they proposed a mechanical fluid with a preferred rest frame, violating Special Relativity. The Substrate is <strong>Lorentz-invariant</strong>. It has no "velocity" relative to matter; rather, matter is a wave-mode <em>of</em> the substrate. The speed of light emerges as the Lieb-Robinson bound of the medium's causal propagation, strictly preserving <MathBlock latex="E^2=p^2c^2" /> for massless particles.
              </p>
            </div>

            <div>
              <h3 className="text-white font-serif text-xl mb-2">Objection: "Lorentz Invariance Violation (LIV)"</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                <strong>Response:</strong> Discrete spacetime theories often suffer from LIV. Substrate Mechanics avoids this via <strong>Covariant Coarse-Graining</strong>. The emergent metric is an integral over geodesic distances, not a grid. This ensures that the geometry remains relational and continuous at the macroscopic level, pushing any potential LIV effects far below the Planck scale, essentially unobservable to current high-energy astrophysics.
              </p>
            </div>

            <div>
              <h3 className="text-white font-serif text-xl mb-2">Objection: "Hidden Variables & Bell's Theorem"</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                <strong>Response:</strong> Bell's Theorem rules out <em>local</em> hidden variables. Substrate Mechanics is fundamentally <strong>non-local</strong> at the pre-geometric level. The substrate operates in a high-dimensional connectivity where "distance" is an emergent property. Therefore, the correlations observed in entanglement are natural consequences of the substrate's underlying unity, not "spooky action at a distance."
              </p>
            </div>
          </div>
        </Section>

        <footer className="mt-32 py-12 border-t border-white/10 text-center text-gray-600 font-mono text-sm">
          <p>Substrate Mechanics • Quantum Substrate Dynamics (QSD)</p>
          <p className="mt-2">© 2026 Theoretical Physics Archive</p>
        </footer>
      </main>
    </div>
  );
}
