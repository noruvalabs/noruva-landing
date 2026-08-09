import { useState } from "react";
import { ArrowRight, Check, ExternalLink, Gavel, GraduationCap, Plane, Video, Building2, ShieldCheck, Briefcase, Cpu, Globe2, Scale, Zap } from "lucide-react";
import { useScrollY } from "@/hooks/use-scroll-motion";

const PRODUCTS_PREVIEW = [
  {
    id: "meeting",
    name: "Meeting Assistant",
    status: "Live",
    statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    liveUrl: "https://ai.noruvalabs.com",
    icon: Video,
    tagline: "Live notes, automated action item extraction & executive debriefs.",
    metrics: [
      { label: "Action Items", val: "12 Extracted" },
      { label: "Speakers Synced", val: "8 Identified" },
      { label: "Summary Score", val: "100% Verbatim" },
    ],
    sampleSnippet: "Captured product sync transcript → generated 12 action items → assigned owner tags.",
  },
  {
    id: "immigration",
    name: "Immigration Assistant",
    status: "Coming Soon",
    statusColor: "bg-paper text-stone border-silver",
    liveUrl: null,
    icon: Plane,
    tagline: "Visa route matching, evidence checklists and deadline tracking.",
    metrics: [
      { label: "Visa Routes", val: "120+ Covered" },
      { label: "Document Checks", val: "Automated" },
      { label: "Expiry Alerts", val: "Real-time" },
    ],
    sampleSnippet: "Automated spousal & skilled worker eligibility scoring with expiry tracking.",
  },
  {
    id: "law",
    name: "Law Assistant",
    status: "Coming Soon",
    statusColor: "bg-paper text-stone border-silver",
    liveUrl: null,
    icon: Gavel,
    tagline: "Paragraph-level cited research and precedent-aware drafting.",
    metrics: [
      { label: "Source Citations", val: "100% Verified" },
      { label: "Precedent Files", val: "Clause Bank" },
      { label: "Redline Audit", val: "Automated" },
    ],
    sampleSnippet: "Searches 100k+ matter files → returns cited answers with zero hallucination.",
  },
  {
    id: "learning",
    name: "Learning Assistant",
    status: "Coming Soon",
    statusColor: "bg-paper text-stone border-silver",
    liveUrl: null,
    icon: GraduationCap,
    tagline: "Adaptive study pathways, interactive quizzes and tutoring.",
    metrics: [
      { label: "Active Learners", val: "15k+ Enrolled" },
      { label: "Syllabus Loops", val: "Self-Paced" },
      { label: "Quiz Generator", val: "Adaptive" },
    ],
    sampleSnippet: "Indexes course materials into spaced-repetition modules and progress rubrics.",
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

      <div className="container-page relative grid items-center gap-10 py-14 lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:py-24">
        {/* Left Column - Text & CTAs */}
        <div className="min-w-0 w-full" style={{ transform: `translate3d(0, ${p * -0.04}px, 0)` }}>
          <span className="inline-flex items-center gap-2 rounded-md border border-silver bg-white px-3 py-1 font-inter text-[11px] font-semibold tracking-[0.05em] uppercase text-graphite shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Meeting Assistant is Live
          </span>

          <h1 className="mt-4 text-[32px] leading-[1.1] tracking-tight text-graphite sm:text-[44px] md:text-heading-lg lg:text-display font-bold font-cal">
            Software that
            <br />
            thinks through
            <br />
            hard decisions
          </h1>

          <p className="mt-5 max-w-md text-subheading text-slate leading-relaxed">
            Noruva Labs builds specialized AI assistants for critical operations — starting with our live{" "}
            <a
              href="https://ai.noruvalabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-action-blue underline decoration-action-blue/30 underline-offset-4 hover:decoration-action-blue"
            >
              Meeting Assistant
            </a>{" "}
            and upcoming Immigration, Law and Learning suites.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://ai.noruvalabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-ink group"
            >
              Launch Meeting AI <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#platform" className="btn-pill btn-ghost">
              See all products
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5 font-inter text-caption text-slate">
            <li className="inline-flex items-center gap-1.5 font-semibold text-graphite">
              <Check className="h-3.5 w-3.5 text-action-blue" />
              <a href="https://ai.noruvalabs.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-action-blue">
                Meeting AI Live (ai.noruvalabs.com)
              </a>
            </li>
            <li className="inline-flex items-center gap-1.5 font-medium">
              <Check className="h-3.5 w-3.5 text-action-blue" /> 3 Products Coming Soon
            </li>
            <li className="inline-flex items-center gap-1.5 font-medium">
              <Check className="h-3.5 w-3.5 text-action-blue" /> Enterprise & SOC 2 Ready
            </li>
          </ul>
        </div>

        {/* Right Column - Product Console Window with Parallax */}
        <div
          className="relative min-w-0 w-full max-w-full"
          style={{
            transform: `translate3d(0, ${p * -0.1}px, 0) scale(${Math.max(0.96, 1 - p * 0.00015)})`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="card-surface overflow-hidden border-silver shadow-lg max-w-full">
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
                  <span>{prod.name.split(" ")[0]}</span>
                  <span className={`text-[8px] sm:text-[9px] font-bold px-1.5 py-0.2 rounded border uppercase ${prod.statusColor}`}>
                    {prod.status === "Live" ? "Live" : "Soon"}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Product Preview Box */}
            <div className="p-5 sm:p-6 bg-white space-y-4 max-w-full overflow-hidden">
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-silver/60 pb-3.5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-cal text-heading-sm font-bold text-graphite">{currentProduct.name}</span>
                    <span className={`rounded px-2 py-0.5 text-[10px] font-bold border uppercase tracking-wider ${currentProduct.statusColor}`}>
                      {currentProduct.status}
                    </span>
                  </div>
                  <p className="font-inter text-body-sm text-slate mt-1">{currentProduct.tagline}</p>
                </div>

                {currentProduct.liveUrl ? (
                  <a
                    href={currentProduct.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-action-blue px-3.5 py-2 text-[12px] font-bold text-white shadow-xs hover:opacity-90 transition-opacity shrink-0"
                  >
                    Launch App <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-md bg-paper border border-silver px-3 py-1.5 text-[11px] font-bold text-stone shrink-0">
                    Coming Soon
                  </span>
                )}
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {currentProduct.metrics.map((m) => (
                  <div key={m.label} className="rounded-lg bg-paper border border-silver p-2.5 sm:p-3 min-w-0">
                    <p className="font-inter text-[9px] sm:text-[10px] font-bold tracking-[0.04em] uppercase text-stone truncate">{m.label}</p>
                    <p className="font-cal text-[14px] sm:text-[15px] font-extrabold text-graphite mt-0.5 truncate">{m.val}</p>
                  </div>
                ))}
              </div>

              {/* Sample Interface Log / Snippet */}
              <div className="rounded-lg bg-paper border border-silver p-3.5">
                <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-stone pb-1.5 border-b border-silver/60">
                  <span>Engine Status</span>
                  <span className="text-action-blue font-bold">verified</span>
                </div>
                <p className="mt-2 font-mono text-[11px] sm:text-[12px] text-graphite leading-relaxed break-words">
                  {currentProduct.sampleSnippet}
                </p>
              </div>
            </div>

            {/* Bottom Window Bar */}
            <div className="grid grid-cols-3 border-t border-silver bg-paper divide-x divide-silver text-center">
              <div className="py-2.5 px-2">
                <p className="font-cal text-[16px] font-extrabold text-emerald-700">01 Live</p>
                <p className="font-inter text-[9px] font-bold text-stone uppercase truncate">ai.noruvalabs.com</p>
              </div>
              <div className="py-2.5 px-2">
                <p className="font-cal text-[16px] font-extrabold text-graphite">03</p>
                <p className="font-inter text-[9px] font-bold text-stone uppercase truncate">Coming Soon</p>
              </div>
              <div className="py-2.5 px-2">
                <p className="font-cal text-[16px] font-extrabold text-graphite">65k+</p>
                <p className="font-inter text-[9px] font-bold text-stone uppercase truncate">Sessions Run</p>
              </div>
            </div>
          </div>

          {/* Floating Parallax Badge */}
          <div
            className="absolute -right-3 -bottom-5 hidden sm:flex items-center gap-2 rounded-md border border-silver bg-white px-3 py-1.5 shadow-md font-inter text-[11px] font-bold text-graphite"
            style={{ transform: `translate3d(0, ${p * 0.08}px, 0)` }}
          >
            <span className="h-2 w-2 rounded-full bg-action-blue" />
            <span>SOC 2 Type II Certified</span>
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
