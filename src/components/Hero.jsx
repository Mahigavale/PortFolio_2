import React, { useState } from 'react';
import { 
  Terminal, 
  Cpu, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Copy, 
  Check, 
  Server, 
  Code2, 
  BookOpen,
  Share2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ activePersona, setActivePersona }) {
  const [activeTab, setActiveTab] = useState('fullstack');
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState(`$ java --version
openjdk 21.0.3 2024-04-16 LTS
Spring Boot 3.3.0 (vThreads: enabled)
React 18.3.1 (Virtual DOM & Hydration: optimal)
Internal Developer Platform (IDP): Ready for squads`);

  const runCommand = (cmd) => {
    if (cmd === 'spring') {
      setTerminalOutput(`$ ./mvnw spring-boot:run
[INFO] --- spring-boot-maven-plugin:3.3.0:run ---
[INFO] Initializing Tomcat with port 8080 (http)
[INFO] VirtualThreadExecutor initialized: poolSize=256
[INFO] Connected to Kafka Cluster at kafka:9092
[INFO] PostgreSQL connection pool verified (HikariCP)
[INFO] Application started in 1.42 seconds!`);
    } else if (cmd === 'enablement') {
      setTerminalOutput(`$ npx enablement-cli generate --template=spring-boot-golden-path
✔ Pulling company approved archetypes (v3.2)
✔ Injecting OAuth2 OIDC & OpenTelemetry auto-instrumentation
✔ Configured GitHub Actions CI/CD with security scan
✔ Scaffolded React 18 administrative backoffice
✔ Team onboarding time reduced from 2 weeks to 10 minutes!`);
    } else if (cmd === 'health') {
      setTerminalOutput(`$ curl -s http://localhost:8080/actuator/health | jq .
{
  "status": "UP",
  "components": {
    "db": { "status": "UP", "details": { "database": "PostgreSQL", "validationQuery": "isValid()" } },
    "kafka": { "status": "UP", "details": { "clusterId": "kf-eu-central-1" } },
    "diskSpace": { "status": "UP" }
  }
}`);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-violet-600/20 to-amber-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-xs font-mono text-slate-300 mb-6 backdrop-blur shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="font-semibold text-emerald-400">Available:</span>
          <span>{personalInfo.availability}</span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Bio, Dual-role tabs */}
          <div className="lg:col-span-7 space-y-6">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Engineering Resilient{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-amber-300 bg-clip-text text-transparent">
                Java Systems
              </span>{' '}
              & Driving{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">
                Technical Enablement
              </span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Hi, I'm <strong className="text-white font-semibold">{personalInfo.name}</strong>. {personalInfo.about}
            </p>

            {/* Persona Switch Pills */}
            <div className="p-1.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-wrap gap-1 max-w-xl">
              <button
                onClick={() => { setActiveTab('fullstack'); setActivePersona('fullstack'); }}
                className={`flex-1 min-w-[150px] py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  activeTab === 'fullstack'
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Server className="w-4 h-4 text-amber-400" />
                Java Full Stack Dev
              </button>
              <button
                onClick={() => { setActiveTab('enablement'); setActivePersona('enablement'); }}
                className={`flex-1 min-w-[150px] py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  activeTab === 'enablement'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Sparkles className="w-4 h-4 text-emerald-300" />
                Technical Enablement
              </button>
              <button
                onClick={() => { setActiveTab('all'); setActivePersona('all'); }}
                className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  activeTab === 'all'
                    ? 'bg-slate-700 text-white'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                Unified View
              </button>
            </div>

            {/* Persona Focus Highlight Box */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm max-w-2xl">
              {activeTab === 'fullstack' && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider">
                    <Server className="w-4 h-4" /> Core Java Full Stack Focus
                  </div>
                  <p className="text-sm text-slate-300">
                    High-throughput Spring Boot 3 microservices, Java 21 Virtual Threads, Kafka event streams, ACID transactional integrity, and responsive React 18 interfaces with clean state architectures.
                  </p>
                </div>
              )}
              {activeTab === 'enablement' && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" /> Technical Enablement & DevEx Focus
                  </div>
                  <p className="text-sm text-slate-300">
                    Standardizing "Golden Path" project scaffolds, authoring architectural standards, building self-service developer portals, leading workshops, and unlocking massive engineering velocity.
                  </p>
                </div>
              )}
              {activeTab === 'all' && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                    <Layers className="w-4 h-4" /> The Hybrid Advantage
                  </div>
                  <p className="text-sm text-slate-300">
                    Because I actively write production Java and React applications, my enablement tooling and developer platform decisions are pragmatic, developer-first, and battle-tested in real production environments.
                  </p>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] transition-all"
              >
                View Selected Work
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#architecture-lab"
                className="px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700/80 font-semibold text-sm flex items-center gap-2 transition-all hover:text-white"
              >
                <Cpu className="w-4 h-4 text-emerald-400" />
                Interactive System Lab
              </a>

              <button
                onClick={copyEmail}
                className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 text-sm flex items-center gap-2 transition-colors"
                title="Copy Email Address"
              >
                {copiedCmd ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copiedCmd ? 'Email Copied!' : 'Copy Email'}
              </button>
            </div>

            {/* Metrics Quick Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
              <div>
                <p className="text-2xl font-bold font-mono text-white">{personalInfo.yearsExperience}</p>
                <p className="text-xs text-slate-400">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-mono text-emerald-400">{personalInfo.teamsEnabled}</p>
                <p className="text-xs text-slate-400">Squads Enabled</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-mono text-indigo-400">{personalInfo.productionServices}</p>
                <p className="text-xs text-slate-400">Prod Microservices</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-mono text-amber-400">{personalInfo.uptimeRecord}</p>
                <p className="text-xs text-slate-400">Uptime SLA</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Terminal Console */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl shadow-black/80 overflow-hidden font-mono">
              
              {/* Terminal Window Header */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs text-slate-400 font-mono ml-2">mahesh@enablement-dev:~</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-950/80 text-indigo-400 border border-indigo-800/40">
                  Interactive CLI
                </span>
              </div>

              {/* Terminal Quick Command Triggers */}
              <div className="px-4 py-2 bg-slate-950/40 border-b border-slate-800/60 flex flex-wrap gap-2 text-xs">
                <span className="text-slate-500 text-[11px] self-center">Run:</span>
                <button
                  onClick={() => runCommand('spring')}
                  className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-indigo-900/40 hover:text-indigo-300 text-slate-300 text-[11px] border border-slate-700/60 transition-colors"
                >
                  spring-boot:run
                </button>
                <button
                  onClick={() => runCommand('enablement')}
                  className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-emerald-900/40 hover:text-emerald-300 text-slate-300 text-[11px] border border-slate-700/60 transition-colors"
                >
                  enablement-cli
                </button>
                <button
                  onClick={() => runCommand('health')}
                  className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-amber-900/40 hover:text-amber-300 text-slate-300 text-[11px] border border-slate-700/60 transition-colors"
                >
                  curl /health
                </button>
              </div>

              {/* Terminal Output Body */}
              <div className="p-4 text-xs text-slate-300 space-y-3 min-h-[260px] max-h-[340px] overflow-y-auto leading-relaxed whitespace-pre-wrap selection:bg-slate-700">
                <div className="text-slate-500">
                  // Dual stack architecture console. Click commands above to simulate runtime.
                </div>
                <div className="text-emerald-400 font-mono">
                  {terminalOutput}
                </div>
                <div className="flex items-center gap-1.5 text-indigo-400 pt-2 border-t border-slate-800/40">
                  <span className="text-slate-500">mgavale@developer:~$</span>
                  <span className="w-2 h-4 bg-indigo-400 animate-pulse"></span>
                </div>
              </div>

              {/* Terminal Footer Info */}
              <div className="bg-slate-950/90 px-4 py-2.5 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1 text-slate-400">
                  <Server className="w-3.5 h-3.5 text-amber-500" /> Java 21 LTS
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> DevEx Golden Path
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" /> React 18+
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
