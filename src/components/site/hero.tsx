import { useState } from "react";
import { ArrowRight, Check, ExternalLink, Gavel, GraduationCap, Plane, Video, Building2, ShieldCheck, Briefcase, Cpu, Globe2, Scale, Zap } from "lucide-react";
import { useScrollY } from "@/hooks/use-scroll-motion";

const PRODUCTS_PREVIEW = [
  {
    id: "meeting",
    name: "NoruvaAI Copilot",
    status: "Live",
    statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    liveUrl: "https://ai.noruvalabs.com",
    icon: Video,
    headlineLead: "Hear the question.",
    headlineHighlight: "See the answer.",
    headlineHighlightClass: "text-emerald-600 underline decoration-emerald-300/80",
    badgeText: "Real-time AI Copilot is Live",
    badgePulseColor: "bg-emerald-500",
    tagline: "NoruvaAI listens to your call, transcribes every question the instant it's asked, and hands you the right answer in real time — across interviews, sales calls, and meetings.",
    ctaText: "Try NoruvaAI Free",
    ctaUrl: "https://ai.noruvalabs.com",
    ctaExternal: true,
    type: "meeting-ui",
    platforms: ["Google Meet", "Zoom", "Webex", "HackerRank", "LeetCode", "Discord", "Telegram"],
  },
  {
    id: "immigration",
    name: "Torii Immigration",
    status: "Coming Soon",
    statusColor: "bg-paper text-stone border-silver",
    liveUrl: null,
    icon: Plane,
    headlineLead: "File your visa application",
    headlineHighlight: "correctly.",
    headlineHighlightClass: "text-blue-600 underline decoration-blue-300/80 font-serif italic",
    badgeText: "Torii Immigration Suite",
    badgePulseColor: "bg-blue-500",
    tagline: "Torii walks you from 'which forms do I even need?' to a submission-ready packet: branching intake, document checklists, auto-filled forms — for a fraction of a lawyer's fee.",
    ctaText: "Explore Torii Suite",
    ctaUrl: "/products/immigration",
    ctaExternal: false,
    type: "immigration-ui",
  },
  {
    id: "law",
    name: "Law Assistant",
    status: "Coming Soon",
    statusColor: "bg-paper text-stone border-silver",
    liveUrl: null,
    icon: Gavel,
    headlineLead: "Research grounded in",
    headlineHighlight: "official precedent.",
    headlineHighlightClass: "text-[#153E6E] underline decoration-[#153E6E]/40",
    badgeText: "Law Assistant Suite",
    badgePulseColor: "bg-[#153E6E]",
    tagline: "Search matter files and public legal sources together with paragraph-level citations, clause bank extraction, and precedent-aware drafting.",
    ctaText: "See Law AI Features",
    ctaUrl: "/products/law",
    ctaExternal: false,
    type: "law-ui",
  },
  {
    id: "learning",
    name: "Learning Assistant",
    status: "Coming Soon",
    statusColor: "bg-paper text-stone border-silver",
    liveUrl: null,
    icon: GraduationCap,
    headlineLead: "Personalized study loops for",
    headlineHighlight: "every student.",
    headlineHighlightClass: "text-purple-600 underline decoration-purple-300/80",
    badgeText: "Learning Assistant Suite",
    badgePulseColor: "bg-purple-500",
    tagline: "Turn curriculum materials into interactive study modules, adaptive practice quizzes, and real-time tutoring feedback with syllabus mastery tracking.",
    ctaText: "See Learning AI Features",
    ctaUrl: "/products/learning",
    ctaExternal: false,
    type: "learning-ui",
  },
];

export function Hero() {
  const y = useScrollY();
  const p = Math.min(y, 900);
  const [activeTab, setActiveTab] = useState(0);

  const currentProduct = PRODUCTS_PREVIEW[activeTab]!;

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 glow-purple" />

      <div className="container-page relative grid items-center gap-10 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:py-20">
        {/* Left Column - Text & CTAs dynamically synced with active tab */}
        <div className="min-w-0 w-full transition-all duration-300" style={{ transform: `translate3d(0, ${p * -0.04}px, 0)` }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-silver bg-white px-3.5 py-1 font-inter text-[11px] font-semibold tracking-[0.05em] uppercase text-graphite shadow-xs">
            <span className={`h-2 w-2 rounded-full ${currentProduct.badgePulseColor} animate-pulse`} />
            {currentProduct.badgeText}
          </span>

          <h1 className="mt-4 text-[28px] sm:text-[38px] md:text-[46px] lg:text-[54px] leading-[1.1] tracking-tight text-graphite font-bold font-cal">
            {currentProduct.headlineLead}
            <br />
            <span className={`${currentProduct.headlineHighlightClass} underline-offset-4 font-extrabold`}>
              {currentProduct.headlineHighlight}
            </span>
          </h1>

          <p className="mt-4 max-w-md text-[15px] sm:text-[17px] md:text-[18px] text-slate leading-relaxed">
            {currentProduct.tagline}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
            <a
              href={currentProduct.ctaUrl}
              target={currentProduct.ctaExternal ? "_blank" : undefined}
              rel={currentProduct.ctaExternal ? "noopener noreferrer" : undefined}
              className="btn-pill justify-center bg-graphite text-white hover:bg-zinc-800 shadow-md font-bold text-[14px] sm:text-[15px] px-5 py-2.5 rounded-md flex items-center gap-2 group"
            >
              <span>{currentProduct.ctaText}</span>
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 text-emerald-400" />
            </a>
            <a href="#platform" className="btn-pill justify-center btn-ghost px-5 py-2.5 text-[14px] sm:text-[15px] font-semibold">
              See All Products
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5 font-inter text-caption text-slate">
            <li className="inline-flex items-center gap-1.5 font-semibold text-graphite">
              <Check className="h-3.5 w-3.5 text-emerald-600" />
              <a href="https://ai.noruvalabs.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-emerald-700">
                NoruvaAI Live (ai.noruvalabs.com)
              </a>
            </li>
            <li className="inline-flex items-center gap-1.5 font-medium">
              <Check className="h-3.5 w-3.5 text-action-blue" /> Torii Immigration Suite
            </li>
            <li className="inline-flex items-center gap-1.5 font-medium">
              <Check className="h-3.5 w-3.5 text-action-blue" /> SOC 2 Ready & Private
            </li>
          </ul>
        </div>

        {/* Right Column - Browser Mockup Console Window */}
        <div
          className="relative min-w-0 w-full max-w-full"
          style={{
            transform: `translate3d(0, ${p * -0.08}px, 0) scale(${Math.max(0.97, 1 - p * 0.0001)})`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="card-surface overflow-hidden border-silver shadow-xl max-w-full rounded-xl">
            {/* macOS Browser Chrome Controls */}
            <div className="flex items-center justify-between border-b border-silver bg-paper/90 px-3.5 py-2">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="font-mono text-[10px] font-semibold text-stone bg-white px-3 py-0.5 rounded border border-silver">
                {currentProduct.liveUrl || "noruvalabs.com/products"}
              </span>
              <span className="text-[10px] font-mono text-emerald-600 font-bold">● LIVE</span>
            </div>

            {/* Header Product Selector Tabs */}
            <div className="flex items-center border-b border-silver bg-paper overflow-x-auto p-1.5 gap-1 scrollbar-none max-w-full">
              {PRODUCTS_PREVIEW.map((prod, idx) => (
                <button
                  key={prod.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[11px] sm:text-[12px] font-semibold transition-all whitespace-nowrap shrink-0 ${
                    activeTab === idx
                      ? "bg-white text-graphite shadow-xs border border-silver"
                      : "text-slate hover:text-graphite hover:bg-white/50"
                  }`}
                >
                  <prod.icon className={`h-3.5 w-3.5 ${activeTab === idx ? "text-action-blue" : "text-stone"}`} />
                  <span>{prod.name}</span>
                  <span className={`text-[8px] sm:text-[9px] font-bold px-1.5 py-0.2 rounded border uppercase ${prod.statusColor}`}>
                    {prod.status === "Live" ? "Live" : "Soon"}
                  </span>
                </button>
              ))}
            </div>

            {/* Render Mockup UI for Active Product */}
            <div className="p-4 sm:p-5 bg-white space-y-4 max-w-full overflow-hidden">
              <div className="flex flex-wrap items-start justify-between gap-2 border-b border-silver/60 pb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-cal text-[17px] font-bold text-graphite">{currentProduct.name}</span>
                    <span className={`rounded px-2 py-0.5 text-[9px] font-bold border uppercase tracking-wider ${currentProduct.statusColor}`}>
                      {currentProduct.status}
                    </span>
                  </div>
                  <p className="font-cal text-[14px] font-bold text-slate mt-0.5">"{currentProduct.headlineLead} {currentProduct.headlineHighlight}"</p>
                </div>

                {currentProduct.liveUrl ? (
                  <a
                    href={currentProduct.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-graphite px-3.5 py-1.5 text-[12px] font-bold text-white shadow-xs hover:opacity-90 transition-opacity shrink-0"
                  >
                    <span>Try Free</span>
                    <ExternalLink className="h-3.5 w-3.5 text-emerald-400" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-md bg-paper border border-silver px-3 py-1 text-[11px] font-bold text-stone shrink-0">
                    Coming Soon
                  </span>
                )}
              </div>

              {/* NoruvaAI Meeting App UI Mockup */}
              {currentProduct.type === "meeting-ui" && (
                <div className="space-y-3 font-inter text-[11px]">
                  {/* Video call frame */}
                  <div className="relative rounded-lg bg-[#0e2a26] p-3.5 text-white overflow-hidden shadow-inner min-h-[140px] flex flex-col justify-between">
                    <div className="flex items-center justify-between font-mono text-[10px] opacity-90">
                      <span className="font-bold">NoruvaAI · Live Call</span>
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-white/20 px-1.5 py-0.5 text-[9px] font-bold text-emerald-300">Answer ready</span>
                        <span className="flex items-center gap-1 text-red-400 font-bold">🔴 REC</span>
                      </div>
                    </div>
                    {/* Interviewer avatar */}
                    <div className="my-3 flex items-center justify-center gap-3">
                      <div className="h-12 w-12 rounded-full border-2 border-emerald-400/80 bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center font-bold text-[14px]">
                        AI
                      </div>
                      <div>
                        <p className="font-bold text-[12px]">Interviewer</p>
                        <p className="text-[10px] text-emerald-300 font-medium">Speaking...</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="rounded bg-black/50 px-2 py-0.5 text-[9px]">Interviewer</span>
                      <div className="h-8 w-10 rounded border border-white/30 bg-slate/70 flex items-center justify-center text-[9px] font-bold">You</div>
                    </div>
                  </div>

                  {/* Live Answer Prompt Box */}
                  <div className="rounded-lg bg-emerald-50/70 border border-emerald-200 p-3 text-graphite space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] font-bold text-emerald-800">
                      <span className="inline-flex items-center gap-1">📊 Question</span>
                      <span className="font-mono text-[9px]">claude-opus-4.8 · <span className="text-emerald-600 font-bold">● Live</span></span>
                    </div>
                    <p className="font-semibold text-[11px] text-graphite">Q: Walk me through a tradeoff you made under real pressure.</p>
                    <p className="text-[11px] text-slate leading-snug italic bg-white/80 p-2 rounded border border-emerald-100">
                      "At my last role we had to cut scope a week before launch. I framed it as protecting quality over completeness, aligned the team on the key metric, and shipped on time..."
                    </p>
                  </div>

                  {/* Platforms marquee */}
                  <div className="flex items-center justify-between text-[9px] font-bold text-stone pt-1 border-t border-silver/50 overflow-x-auto scrollbar-none gap-2">
                    <span className="uppercase text-stone shrink-0">Listening on:</span>
                    {currentProduct.platforms?.map((p) => (
                      <span key={p} className="rounded bg-paper border border-silver px-2 py-0.5 text-graphite shrink-0">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Torii Immigration App UI Mockup */}
              {currentProduct.type === "immigration-ui" && (
                <div className="space-y-3 font-inter text-[11px] rounded-lg bg-[#0e1726] p-4 text-white">
                  <div className="flex items-center justify-between text-[10px]">
                    <div>
                      <span className="font-mono font-bold text-emerald-400">JP-WORK-2049</span>
                      <span className="ml-2 text-slate-400">EN locale · Live demo</span>
                    </div>
                    <span className="rounded bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2 py-0.5 text-[9px]">Intake in progress</span>
                  </div>

                  {/* Stepper */}
                  <div className="flex items-center justify-between gap-1 text-[10px] pt-1 text-slate-400 border-b border-white/10 pb-2">
                    <span className="text-blue-400 font-bold">Intake ›</span>
                    <span>Eligibility ›</span>
                    <span>Checklist ›</span>
                    <span>Forms ›</span>
                    <span>Review</span>
                  </div>

                  {/* Question Prompt */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Question 4 of 12</span>
                    <p className="font-bold text-[13px] text-white">Which visa category are you applying for?</p>
                    <div className="rounded-md bg-blue-600 px-3.5 py-2 text-[11px] font-semibold text-white shadow-xs">
                      ✓ Engineer / Specialist in Humanities
                    </div>
                  </div>

                  <p className="text-[10px] text-slate-400 pt-1">
                    Torii builds a submission-ready packet with auto-filled government forms and official page citations.
                  </p>
                </div>
              )}

              {/* Law UI Mockup */}
              {currentProduct.type === "law-ui" && (
                <div className="space-y-2.5 font-inter text-[11px] p-3 rounded-lg bg-paper border border-silver">
                  <div className="flex items-center justify-between font-mono text-[10px] text-stone">
                    <span>Research Query · Contract Clause §14</span>
                    <span className="text-action-blue font-bold">100% Cited</span>
                  </div>
                  <p className="text-[11px] text-graphite font-semibold">
                    Summary: Indemnity cap applies to direct damages only [Ref: Precedent §4.2].
                  </p>
                  <div className="rounded bg-white p-2 text-[10px] text-slate border border-silver font-mono">
                    "Searched 100k+ matter files → extracted 3 precedent clauses with paragraph citations."
                  </div>
                </div>
              )}

              {/* Learning UI Mockup */}
              {currentProduct.type === "learning-ui" && (
                <div className="space-y-2.5 font-inter text-[11px] p-3 rounded-lg bg-paper border border-silver">
                  <div className="flex items-center justify-between font-mono text-[10px] text-stone">
                    <span>Syllabus Adaptive Quiz</span>
                    <span className="text-emerald-700 font-bold">15k Active Learners</span>
                  </div>
                  <p className="text-[11px] text-graphite font-semibold">
                    Module 3: Neural Network Optimization & Backprop
                  </p>
                  <div className="rounded bg-white p-2 text-[10px] text-slate border border-silver">
                    Generated 5 adaptive practice questions tailored to recent quiz performance.
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Window Bar */}
            <div className="grid grid-cols-3 border-t border-silver bg-paper divide-x divide-silver text-center">
              <div className="py-2.5 px-2">
                <p className="font-cal text-[16px] font-extrabold text-emerald-700">01 Live App</p>
                <p className="font-inter text-[9px] font-bold text-stone uppercase truncate">ai.noruvalabs.com</p>
              </div>
              <div className="py-2.5 px-2">
                <p className="font-cal text-[16px] font-extrabold text-graphite">Torii Suite</p>
                <p className="font-inter text-[9px] font-bold text-stone uppercase truncate">Immigration Filing</p>
              </div>
              <div className="py-2.5 px-2">
                <p className="font-cal text-[16px] font-extrabold text-graphite">65k+</p>
                <p className="font-inter text-[9px] font-bold text-stone uppercase truncate">Sessions Run</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const LOGOS = [
  { name: "Northbeam", icon: Building2 },
  { name: "Kestrel", icon: ShieldCheck },
  { name: "Fielded", icon: Briefcase },
  { name: "Vantiq", icon: Cpu },
  { name: "Orbital", icon: Globe2 },
  { name: "Halden", icon: Scale },
  { name: "Provolt", icon: Zap },
];

export function LogoMarquee() {
  return (
    <section className="py-8 bg-paper/40">
      <p className="container-page mb-6 text-center font-inter text-[11px] font-bold tracking-[0.06em] uppercase text-stone">
        Trusted by hiring teams, immigration consultancies and law firms
      </p>
      <div className="mx-auto max-w-[1200px] overflow-hidden px-6 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-6 pr-6">
          {[...LOGOS, ...LOGOS].map((l, i) => (
            <div key={i} className="flex items-center gap-3 rounded-md border border-silver bg-white px-5 py-3 shadow-xs">
              <l.icon className="h-4 w-4 text-action-blue shrink-0" />
              <span className="font-cal text-[15px] font-bold text-graphite whitespace-nowrap">
                {l.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
