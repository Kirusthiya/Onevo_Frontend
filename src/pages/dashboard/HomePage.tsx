import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-background text-on-background selection:bg-primary/30">
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/60 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 h-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 h-full">
          <div className="text-2xl font-black tracking-tighter text-white">ONEVO</div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-slate-400 font-medium hover:text-white transition-all duration-300" href="#">Solutions</a>
            <a className="text-slate-400 font-medium hover:text-white transition-all duration-300" href="#">HR Suite</a>
            <a className="text-slate-400 font-medium hover:text-white transition-all duration-300" href="#">Work Suite</a>
            <a className="text-slate-400 font-medium hover:text-white transition-all duration-300" href="#">Pricing</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-slate-400 font-medium hover:text-white transition-all duration-300 active:scale-95 px-4 py-2">Login</button>
            <button className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all active:scale-95">Get Started</button>
          </div>
        </div>
      </header>

      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center hero-gradient px-8 overflow-hidden pt-20">
          <div className="glow-orb absolute top-20 left-10 w-96 h-96 bg-primary-container/20 rounded-full"></div>
          <div className="glow-orb absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary-container/10 rounded-full"></div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 glass-card rounded-full">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs uppercase tracking-widest text-primary font-bold">NEW FEATURE: AI ASSISTANT V2.0</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight">All-in-One Platform</h1>
              <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed">
                Manage your entire business in one place. Onevo streamlines HR, operations, and productivity with a unified, high-performance ecosystem.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-primary text-on-primary rounded-xl font-bold transition-all hover:shadow-[0_0_20px_rgba(207,188,255,0.4)] active:scale-95">Start Free Trial</button>
                <button className="px-8 py-4 glass-card text-white rounded-xl font-bold transition-all hover:bg-white/5 active:scale-95">Watch Demo</button>
              </div>
            </div>
            <div className="relative lg:block hidden">
              <div className="glass-card p-4 rounded-2xl rotate-3 transform translate-x-4 translate-y-4 border border-white/20 shadow-2xl">
                <img 
                  alt="Product Dashboard Preview" 
                  className="rounded-xl w-full h-auto object-cover" 
                  src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1632&auto=format&fit=crop" 
                />
              </div>
              <div className="absolute -top-10 -left-10 glass-card p-6 rounded-2xl -rotate-6 transform border border-white/20 shadow-2xl w-64">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">monitoring</span>
                  </div>
                  <div>
                    <div className="text-xs text-on-surface-variant">Efficiency</div>
                    <div className="text-lg font-bold text-white">+24.8%</div>
                  </div>
                </div>
                <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
                  <div className="w-[75%] h-full bg-primary"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerfully Effortless</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">Built for high-growth teams that demand speed and simplicity without sacrificing control.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-3xl group hover:border-primary/50 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-primary-container/20 flex items-center justify-center mb-6 neumorphic-inset">
                <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Lightning Performance</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Built on a distributed architecture to ensure sub-100ms response times globally.</p>
              <div className="mt-6 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
            </div>
            <div className="glass-card p-8 rounded-3xl group hover:border-secondary/50 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-secondary-container/20 flex items-center justify-center mb-6 neumorphic-inset">
                <span className="material-symbols-outlined text-secondary text-3xl">security</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Military-grade encryption and SSO integration for your most sensitive company data.</p>
              <div className="mt-6 h-1 w-0 bg-secondary group-hover:w-full transition-all duration-500"></div>
            </div>
            <div className="glass-card p-8 rounded-3xl group hover:border-tertiary/50 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-tertiary-container/20 flex items-center justify-center mb-6 neumorphic-inset">
                <span className="material-symbols-outlined text-tertiary text-3xl">api</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Infinite Scalability</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Connect to over 2,000+ apps via native integrations and our robust open API.</p>
              <div className="mt-6 h-1 w-0 bg-tertiary group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
        </section>

        {/* Product Modules */}
        <section className="py-24 bg-surface-container-low/50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-4xl">groups</span>
                  <h2 className="text-3xl font-black text-white">HR Suite</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="glass-card p-6 rounded-2xl hover:translate-y-[-4px] transition-transform">
                    <div className="text-primary font-bold mb-2">Core HR</div>
                    <p className="text-xs text-on-surface-variant">Centralize all employee records and documents in one secure place.</p>
                  </div>
                  <div className="glass-card p-6 rounded-2xl hover:translate-y-[-4px] transition-transform">
                    <div className="text-primary font-bold mb-2">Attendance</div>
                    <p className="text-xs text-on-surface-variant">Real-time clock-in/out tracking with geo-fencing and biometrics.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary text-4xl">tactic</span>
                  <h2 className="text-3xl font-black text-white">Work Suite</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="glass-card p-6 rounded-2xl hover:translate-y-[-4px] transition-transform border-secondary/20">
                    <div className="text-secondary font-bold mb-2">Task Engine</div>
                    <p className="text-xs text-on-surface-variant">Advanced task automation with custom dependencies and triggers.</p>
                  </div>
                  <div className="glass-card p-6 rounded-2xl hover:translate-y-[-4px] transition-transform border-secondary/20">
                    <div className="text-secondary font-bold mb-2">Kanban Board</div>
                    <p className="text-xs text-on-surface-variant">Visual workflow management with drag-and-drop simplicity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Assistant Section */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="glass-card p-12 rounded-[2.5rem] relative overflow-hidden border-primary/30 shadow-[0_0_50px_rgba(207,188,255,0.15)]">
            <div className="glow-orb absolute -top-20 -right-20 w-80 h-80 bg-primary/30 rounded-full"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full border border-primary/30 text-primary font-bold text-xs mb-6 uppercase tracking-widest">Autonomous Intelligence</div>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">AI Assistant</h2>
                <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                  Meet your new team member. Our built-in AI predicts project delays, automates reporting, and suggests resource optimizations before you even notice the need.
                </p>
                <button className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold">Discover AI Power</button>
              </div>
              <div className="neumorphic-inset rounded-3xl p-8 bg-slate-900/50 border border-white/5">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary-container shrink-0"></div>
                    <div className="glass-card p-4 rounded-2xl text-xs text-on-surface max-w-[80%]">How is the "Project Phoenix" timeline looking for Q3?</div>
                  </div>
                  <div className="flex gap-4 justify-end">
                    <div className="glass-card p-4 rounded-2xl text-xs text-primary max-w-[80%] bg-primary/5 border-primary/20">Based on current task velocity, Phoenix is 4 days ahead of schedule.</div>
                    <div className="w-8 h-8 rounded-full bg-primary shrink-0 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-sm">auto_awesome</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="rounded-[3rem] p-16 relative overflow-hidden bg-gradient-to-br from-primary-container to-slate-950 text-center">
            <div className="glow-orb absolute inset-0 opacity-40 bg-primary/20"></div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Start your free trial today</h2>
              <p className="text-xl text-on-primary-container mb-10 max-w-xl mx-auto opacity-80">Experience the future of business management. No credit card required, cancel anytime.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-12 py-5 bg-white text-slate-950 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all">Get Started Now</button>
                <button className="px-12 py-5 glass-card text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">Talk to Sales</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 gap-6">
          <div className="text-xl font-bold text-slate-200 tracking-tighter">ONEVO</div>
          <div className="font-inter text-xs uppercase tracking-widest text-slate-500 opacity-80">
            © 2024 ONEVO. Engineered for effortless power.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
