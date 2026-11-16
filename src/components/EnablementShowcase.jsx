import React, { useState } from 'react';
import { 
  Rocket, 
  ShieldAlert, 
  Users, 
  LayoutGrid, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles, 
  Terminal, 
  BookOpen, 
  Workflow, 
  ShieldCheck, 
  Flame 
} from 'lucide-react';
import { enablementPillars } from '../data/portfolioData';

export default function EnablementShowcase() {
  const [selectedPillar, setSelectedPillar] = useState(enablementPillars[0]);

  // Pillar detailed views
  const pillarDetails = {
    devex: {
      headline: "Golden Paths & Enterprise Starter Archetypes",
      problem: "Squads were spending an average of 3 weeks reinventing Kafka producers, security filters, and Dockerfiles for every new microservice.",
      solution: "Engineered an opinionated Maven archetype and CLI tool that generates production-certified Spring Boot 3 services with pre-configured OIDC, distributed tracing, and GitHub Actions in under 5 minutes.",
      artifacts: [
        "Spring Boot 3 + Java 21 Golden Path starter repository",
        "React 18 Admin Backoffice component library",
        "Automated Testcontainers suite for integration testing",
        "Zero-configuration Dockerfile and Helm charts"
      ],
      impactStats: [
        { label: "Service Bootstrap Time", before: "18 Days", after: "45 Minutes" },
        { label: "Deployment Pipeline Success", before: "68%", after: "94%" },
        { label: "Squads Onboarded", value: "25+ Teams" }
      ]
    },
    architecture: {
      headline: "Pragmatic Architecture Governance & Standards",
      problem: "Inconsistent REST endpoints, unversioned API contracts, and ad-hoc error handling caused frequent downstream breakages between frontend and backend squads.",
      solution: "Authored pragmatic REST & Event API Design Standards, introduced Architecture Decision Records (ADRs), and embedded automated Spectral API linting into CI/CD pipelines.",
      artifacts: [
        "Enterprise API Standards Guide (RFC 7807 problem details)",
        "Automated contract testing with Spring Cloud Contract",
        "Versioned OpenAPI 3.1 schema registry",
        "ADR documentation repository for architectural transparency"
      ],
      impactStats: [
        { label: "Breaking API Changes", before: "14/quarter", after: "1/quarter" },
        { label: "API Design Review Time", before: "5 Days", after: "1 Day" },
        { label: "Adoption Rate", value: "100% of New APIs" }
      ]
    },
    education: {
      headline: "Hands-on Workshops & Engineering Guilds",
      problem: "Engineers struggled with modern asynchronous programming, Virtual Threads concurrency nuances, and distributed Kafka consumer failure recovery.",
      solution: "Created interactive coding sandboxes and hosted monthly 'Tech Craftsmanship' workshops, training over 300 developers on hands-on distributed systems design.",
      artifacts: [
        "Interactive Java 21 Virtual Threads vs Reactive WebFlux workshop repo",
        "Kafka Failure Recovery & Dead-Letter Queue (DLQ) masterclass",
        "React Performance Optimization & Memoization masterclass",
        "Internal engineering podcast and monthly technical digest"
      ],
      impactStats: [
        { label: "Engineers Trained", value: "300+ Devs" },
        { label: "Workshop Satisfaction", value: "4.9 / 5.0" },
        { label: "Internal Certifications", value: "85 Issued" }
      ]
    },
    portal: {
      headline: "Internal Developer Portal (IDP) & Service Catalog",
      problem: "Developers lacked visibility into which team owned which microservice, what APIs were available, and how to request test cloud infrastructure.",
      solution: "Built a centralized Developer Portal backed by React and Spring Boot, aggregating service ownership, health metrics, OpenAPI specifications, and self-service cloud provisioning.",
      artifacts: [
        "Live API documentation playground with synthetic mock data",
        "Real-time service health & dependency graph visualizer",
        "Self-service sandbox database and Kafka topic provisioning",
        "Automated software catalog synchronized via GitHub webhooks"
      ],
      impactStats: [
        { label: "Cataloged Microservices", value: "45+ Services" },
        { label: "Self-Service Requests", value: "1,200+/month" },
        { label: "On-call Interruption Reduction", value: "40%" }
      ]
    }
  };

  const currentDetail = pillarDetails[selectedPillar.id] || pillarDetails.devex;

  return (
    <section id="enablement" className="py-24 bg-slate-950/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-xs font-mono text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Force Multiplier</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical Enablement in Action
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Great software engineering is not just about writing code yourself—it is about empowering dozens of other engineers to deliver resilient software with speed, safety, and confidence.
          </p>
        </div>

        {/* Pillar Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {enablementPillars.map((pillar) => {
            const isSelected = selectedPillar.id === pillar.id;
            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative border ${
                  isSelected
                    ? 'bg-gradient-to-b from-slate-900 to-indigo-950/60 border-indigo-500 shadow-xl shadow-indigo-600/20 scale-[1.02]'
                    : 'glass-panel hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/40' : 'bg-slate-800 text-slate-300'
                  }`}>
                    {pillar.id === 'devex' && <Rocket className="w-6 h-6" />}
                    {pillar.id === 'architecture' && <ShieldAlert className="w-6 h-6" />}
                    {pillar.id === 'education' && <Users className="w-6 h-6" />}
                    {pillar.id === 'portal' && <LayoutGrid className="w-6 h-6" />}
                  </div>
                  <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full font-semibold ${
                    isSelected ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {pillar.description}
                </p>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {pillar.metric}
                  </span>
                  <span className={`text-xs flex items-center gap-1 font-medium ${
                    isSelected ? 'text-indigo-400' : 'text-slate-500'
                  }`}>
                    Inspect Artifacts &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Pillar Deep Dive Viewer */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Left: Problem & Solution Story */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/60">
                  Case Study & Deliverables
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                  {currentDetail.headline}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-rose-900/30">
                  <h4 className="text-xs font-mono uppercase text-rose-400 font-bold flex items-center gap-1.5 mb-1">
                    <Flame className="w-4 h-4" /> The Challenge Faced By Teams
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {currentDetail.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-emerald-900/30">
                  <h4 className="text-xs font-mono uppercase text-emerald-400 font-bold flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-4 h-4" /> The Enablement Solution
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {currentDetail.solution}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider mb-3">
                  Delivered Artifacts & Tooling
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentDetail.artifacts.map((art, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-800/40 p-2.5 rounded-lg border border-slate-700/50">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{art}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Quantified Impact Metrics */}
            <div className="lg:col-span-5 space-y-5 bg-slate-950/90 p-6 rounded-xl border border-slate-800">
              <h4 className="text-sm font-mono uppercase tracking-wider text-indigo-400 font-bold flex items-center gap-2">
                <Workflow className="w-4 h-4" /> Quantified Velocity & Quality Impact
              </h4>

              <div className="space-y-4">
                {currentDetail.impactStats.map((stat, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-slate-900 border border-slate-800/90">
                    <p className="text-xs text-slate-400 mb-1">{stat.label}</p>
                    {stat.before && stat.after ? (
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-mono text-rose-400 line-through">
                          {stat.before}
                        </span>
                        <span className="text-slate-500">&rarr;</span>
                        <span className="text-xl font-bold font-mono text-emerald-400">
                          {stat.after}
                        </span>
                      </div>
                    ) : (
                      <span className="text-2xl font-bold font-mono text-white">
                        {stat.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-lg bg-indigo-950/30 border border-indigo-800/40 text-xs text-indigo-200">
                <span className="font-semibold text-white block mb-1">Architectural Philosophy:</span>
                "Enablement is not about enforcing red tape; it is about paving the easiest, safest path so developers naturally make the right architectural choice."
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
