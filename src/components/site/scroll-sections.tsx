import { useSectionProgress } from "@/hooks/use-scroll-motion";
import { SectionLabel } from "./reveal";
import { Video, Plane, Gavel, GraduationCap, Cpu, Zap, CheckCircle2, ShieldCheck, FileText, Layers } from "lucide-react";

const STEPS = [
  {
    n: "01",
    title: "NoruvaAI Copilot",
    headline: "Hear the question. See the answer.",
    body: "Captures live meeting calls, transcribes questions in real-time, extracts action items, and hands you instant answers across Google Meet, Zoom, Webex, and LeetCode.",
    stat: ["Meetings structured", "48k"],
    status: "Live",
    statusColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    cardBg: "bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/60 border-emerald-200 shadow-emerald-500/5",
    accentColor: "text-emerald-600",
    link: "https://ai.noruvalabs.com",
  },
  {
    n: "02",
    title: "Torii Immigration",
    headline: "File your visa application correctly.",
    body: "Torii walks you from 'which forms do I even need?' to a submission-ready packet: branching intake, document checklists, auto-filled forms, and deadline tracking.",
    stat: ["Case types covered", "120+"],
    status: "Coming Soon",
    statusColor: "bg-blue-100 text-blue-800 border-blue-300",
    cardBg: "bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/60 border-blue-200 shadow-blue-500/5",
    accentColor: "text-blue-600",
    link: "/products/immigration",
  },
  {
    n: "03",
    title: "Law Assistant",
    headline: "Precedent-grounded research & drafting.",
    body: "Research, summarisation and drafting grounded in your own matter files and public sources — every answer carries a citation back to the exact paragraph.",
    stat: ["Answers with citations", "100%"],
    status: "Coming Soon",
    statusColor: "bg-slate-100 text-slate-800 border-slate-300",
    cardBg: "bg-gradient-to-br from-slate-100/90 via-white to-indigo-50/60 border-slate-300 shadow-slate-500/5",
    accentColor: "text-[#153E6E]",
    link: "/products/law",
  },
  {
    n: "04",
    title: "Learning Assistant",
    headline: "Personalized study loops for every course.",
    body: "Generates interactive curriculum, adaptive quizzes and personalized study loops for students, corporate teams and educational institutions.",
    stat: ["Active learners", "15k+"],
    status: "Coming Soon",
    statusColor: "bg-purple-100 text-purple-800 border-purple-300",
    cardBg: "bg-gradient-to-br from-purple-50/90 via-white to-fuchsia-50/60 border-purple-200 shadow-purple-500/5",
    accentColor: "text-purple-600",
    link: "/products/learning",
  },
  {
    n: "05",
    title: "Agentic AI Services",
    headline: "Custom enterprise agent systems.",
    body: "Beyond our products we design, build and run custom agent systems inside your stack: tool integrations, evaluations, approvals and deployment support from our engineers.",
    stat: ["Typical first build", "6 wks"],
    status: "Available",
    statusColor: "bg-amber-100 text-amber-800 border-amber-300",
    cardBg: "bg-gradient-to-br from-amber-50/90 via-white to-orange-50/60 border-amber-200 shadow-amber-500/5",
    accentColor: "text-amber-600",
    link: "/contact",
  },
];

/** Scroll-jacked section: the panel is pinned while steps advance with scroll. */
export function ScrollStory() {
  const { ref, progress } = useSectionProgress<HTMLDivElement>();
  const index = Math.min(STEPS.length - 1, Math.floor(progress * STEPS.length * 0.999));
  const active = STEPS[index]!;

  return (
    <section id="platform" ref={ref} className="relative" style={{ height: "450vh" }}>
      <div className="sticky top-0 flex h-screen w-screen max-w-full items-center overflow-hidden">
        <div className="container-page w-full min-w-0">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel>What we build</SectionLabel>
              <h2 className="mt-4 text-[28px] leading-[1.1] tracking-[0.4px] text-graphite sm:text-[36px] md:text-heading-lg font-bold font-cal">
                Four products,
                <br />
                one engineering team
              </h2>
              <p className="mt-4 max-w-sm text-body text-slate">
                Walk through our live apps and upcoming software suite.
              </p>

              <ol className="mt-8 space-y-3">
                {STEPS.map((s, i) => (
                  <li key={s.n} className="flex items-center gap-3">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-md font-inter text-caption transition-colors duration-300 font-bold ${
                        i === index
                          ? "bg-graphite text-white shadow-xs"
                          : i < index
                          ? "bg-emerald-100 text-emerald-800 font-bold"
                          : "bg-silver/80 text-stone"
                      }`}
                    >
                      {s.n}
                    </span>
                    <span
                      className={`font-inter text-body-sm transition-colors duration-300 ${
                        i === index ? "text-graphite font-bold" : "text-slate"
                      }`}
                    >
                      {s.title}
                    </span>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${s.statusColor}`}>
                      {s.status}
                    </span>
                  </li>
                ))}
              </ol>

              <div className="mt-8 h-1.5 w-full rounded-full bg-silver/60 overflow-hidden">
                <div
                  className="h-full bg-graphite transition-[width] duration-150 rounded-full"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
            </div>

            <div className="relative min-h-[380px]">
              {STEPS.map((s, i) => (
                <article
                  key={s.n}
                  className={`card-surface absolute inset-x-0 top-0 p-8 shadow-lg transition-all duration-300 ${s.cardBg}`}
                  style={{
                    opacity: i === index ? 1 : 0,
                    transform:
                      i === index
                        ? "translateY(0) scale(1)"
                        : `translate3d(0, ${i < index ? -24 : 24}px, 0) scale(0.97)`,
                    pointerEvents: i === index ? "auto" : "none",
                  }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-caption text-stone">{s.n} / 05</span>
                    <span className={`rounded-md px-2.5 py-1 text-[10px] font-bold border uppercase tracking-wider ${s.statusColor}`}>
                      {s.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-heading-lg text-graphite font-bold font-cal">{s.title}</h3>
                  <p className={`text-[15px] font-bold mt-1 ${s.accentColor}`}>"{s.headline}"</p>
                  <p className="mt-3 text-body text-slate leading-relaxed">{s.body}</p>

                  <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-silver/60 pt-6">
                    <div>
                      <span className="font-inter text-caption text-stone uppercase font-bold tracking-wider">{s.stat[0]}</span>
                      <p className={`font-cal text-[24px] font-extrabold ${s.accentColor}`}>{s.stat[1]}</p>
                    </div>

                    {s.link && (
                      <a
                        href={s.link}
                        target={s.link.startsWith("http") ? "_blank" : undefined}
                        rel={s.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="btn-pill bg-graphite text-white hover:bg-zinc-800 text-[13px] font-bold shadow-md flex items-center gap-1.5"
                      >
                        <span>{s.status === "Live" ? "Try App Live" : "View Details"}</span>
                        <span>→</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const RAIL = [
  {
    n: "01",
    product: "NoruvaAI Copilot",
    title: "Real-time Call Q&A Copilot",
    body: "Transcribes questions instantly as spoken on Google Meet, Zoom, and Webex, overlaying ideal responses in under 400ms.",
    tag: "Live App",
    tagColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    cardBg: "bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/60 border-emerald-300/80 hover:border-emerald-500 shadow-emerald-500/5",
    icon: Video,
    iconColor: "text-emerald-700 bg-emerald-100 border-emerald-300",
    badge: "400ms Latency",
  },
  {
    n: "02",
    product: "NoruvaAI Copilot",
    title: "Action Item & Debrief Sync",
    body: "Automatically identifies commitments, task owners, and target deadlines during calls, pushing directly to Jira & Slack.",
    tag: "Live App",
    tagColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    cardBg: "bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/60 border-emerald-300/80 hover:border-emerald-500 shadow-emerald-500/5",
    icon: Zap,
    iconColor: "text-emerald-700 bg-emerald-100 border-emerald-300",
    badge: "Auto Board Sync",
  },
  {
    n: "03",
    product: "Torii Immigration",
    title: "Branching Route Intake",
    body: "Guides applicants and legal consultants through dynamic questionnaires mapping eligibility across 120+ global visa routes.",
    tag: "Torii Suite",
    tagColor: "bg-blue-100 text-blue-800 border-blue-300",
    cardBg: "bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/60 border-blue-300/80 hover:border-blue-500 shadow-blue-500/5",
    icon: Plane,
    iconColor: "text-blue-700 bg-blue-100 border-blue-300",
    badge: "120+ Visa Routes",
  },
  {
    n: "04",
    product: "Torii Immigration",
    title: "Auto-Filled Government Packets",
    body: "Compiles document checklists, monitors certificate expiry dates, and populates official government submission forms.",
    tag: "Torii Suite",
    tagColor: "bg-blue-100 text-blue-800 border-blue-300",
    cardBg: "bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/60 border-blue-300/80 hover:border-blue-500 shadow-blue-500/5",
    icon: FileText,
    iconColor: "text-blue-700 bg-blue-100 border-blue-300",
    badge: "Submission Ready",
  },
  {
    n: "05",
    product: "Law Assistant",
    title: "Paragraph-Cited Research",
    body: "Searches internal matter files and public judicial records, delivering precedent summaries where every assertion carries a paragraph citation.",
    tag: "Law AI",
    tagColor: "bg-slate-100 text-slate-800 border-slate-300",
    cardBg: "bg-gradient-to-br from-slate-100/90 via-white to-indigo-50/60 border-slate-300 hover:border-slate-500 shadow-slate-500/5",
    icon: Gavel,
    iconColor: "text-[#153E6E] bg-slate-100 border-slate-300",
    badge: "100% Citation Grounding",
  },
  {
    n: "06",
    product: "Law Assistant",
    title: "Precedent Clause Redlining",
    body: "Compares contract terms against firm playbooks, extracting risk flags, custom indemnities, and recommended redline edits.",
    tag: "Law AI",
    tagColor: "bg-slate-100 text-slate-800 border-slate-300",
    cardBg: "bg-gradient-to-br from-slate-100/90 via-white to-indigo-50/60 border-slate-300 hover:border-slate-500 shadow-slate-500/5",
    icon: ShieldCheck,
    iconColor: "text-[#153E6E] bg-slate-100 border-slate-300",
    badge: "Playbook Redlining",
  },
  {
    n: "07",
    product: "Learning Assistant",
    title: "Adaptive Practice Quizzes",
    body: "Transforms static syllabi and course slides into spaced-repetition modules and self-pacing practice quizzes tailored to student mastery.",
    tag: "EdTech AI",
    tagColor: "bg-purple-100 text-purple-800 border-purple-300",
    cardBg: "bg-gradient-to-br from-purple-50/90 via-white to-fuchsia-50/60 border-purple-300/80 hover:border-purple-500 shadow-purple-500/5",
    icon: GraduationCap,
    iconColor: "text-purple-700 bg-purple-100 border-purple-300",
    badge: "Adaptive Syllabus",
  },
  {
    n: "08",
    product: "Learning Assistant",
    title: "Real-time Tutoring Feedback",
    body: "Provides instant constructive feedback on student submissions, aligning answers with grading rubrics and learning objectives.",
    tag: "EdTech AI",
    tagColor: "bg-purple-100 text-purple-800 border-purple-300",
    cardBg: "bg-gradient-to-br from-purple-50/90 via-white to-fuchsia-50/60 border-purple-300/80 hover:border-purple-500 shadow-purple-500/5",
    icon: Layers,
    iconColor: "text-purple-700 bg-purple-100 border-purple-300",
    badge: "Instant Rubrics",
  },
  {
    n: "09",
    product: "Agentic AI Services",
    title: "Custom Stack Integration",
    body: "Engineered AI agent workflows tailored to your custom databases, API endpoints, tool integrations, and human-in-the-loop approvals.",
    tag: "Enterprise",
    tagColor: "bg-amber-100 text-amber-800 border-amber-300",
    cardBg: "bg-gradient-to-br from-amber-50/90 via-white to-orange-50/60 border-amber-300/80 hover:border-amber-500 shadow-amber-500/5",
    icon: Cpu,
    iconColor: "text-amber-700 bg-amber-100 border-amber-300",
    badge: "Custom Agent Build",
  },
  {
    n: "10",
    product: "Agentic AI Services",
    title: "Evaluation & Production Rollout",
    body: "Full testing suites, benchmark evaluation frameworks, and dedicated engineering support to ensure production safety and speed.",
    tag: "Enterprise",
    tagColor: "bg-amber-100 text-amber-800 border-amber-300",
    cardBg: "bg-gradient-to-br from-amber-50/90 via-white to-orange-50/60 border-amber-300/80 hover:border-amber-500 shadow-amber-500/5",
    icon: CheckCircle2,
    iconColor: "text-amber-700 bg-amber-100 border-amber-300",
    badge: "6-Week Deployment",
  },
];

/** Horizontally scroll-jacked rail driven by vertical scroll. */
export function HorizontalRail() {
  const { ref, progress } = useSectionProgress<HTMLDivElement>();
  const shift = progress * (RAIL.length - 2.2) * 360;

  return (
    <section id="agents" ref={ref} className="relative" style={{ height: "350vh" }}>
      <div className="sticky top-0 flex h-screen w-screen max-w-full flex-col justify-center overflow-hidden">
        <div className="container-page w-full">
          <SectionLabel>Product capability rail</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-[28px] leading-[1.1] tracking-tight text-graphite sm:text-[36px] md:text-heading-lg font-bold font-cal">
            What our specialized software and engineers deliver
          </h2>
          <p className="mt-2 text-body text-slate">
            Scroll to explore core capabilities across NoruvaAI Copilot, Torii Immigration, Law, Learning, and Custom Builds.
          </p>
        </div>

        <div className="container-page mt-8 w-full overflow-hidden">
          <div
            className="flex gap-6 will-change-transform py-4"
            style={{ transform: `translate3d(${-shift}px, 0, 0)`, transition: "transform 120ms linear" }}
          >
            {RAIL.map((r) => (
              <article
                key={r.title}
                className={`card-surface w-[300px] shrink-0 p-6 sm:w-[350px] transition-all duration-300 hover:shadow-xl flex flex-col justify-between ${r.cardBg}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg border ${r.iconColor}`}>
                      <r.icon className="h-5 w-5" />
                    </div>
                    <span className={`rounded-md px-2.5 py-0.5 text-[9px] font-bold border uppercase tracking-wider ${r.tagColor}`}>
                      {r.tag}
                    </span>
                  </div>

                  <p className="mt-4 font-mono text-[10px] font-bold text-stone uppercase tracking-wider">{r.product} · {r.n}</p>
                  <h3 className="mt-1 text-heading-sm font-bold font-cal text-graphite">{r.title}</h3>
                  <p className="mt-2.5 text-body-sm text-slate leading-relaxed">{r.body}</p>
                </div>

                <div className="mt-6 border-t border-silver/60 pt-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 font-inter text-[11px] font-bold text-graphite">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    {r.badge}
                  </span>
                  <span className="font-inter text-caption text-stone font-semibold">Step {r.n} / 10</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 h-1.5 w-full max-w-md rounded-full bg-silver/60 overflow-hidden">
            <div className="h-full bg-graphite transition-[width] duration-150 rounded-full" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>
      </div>
    </section>
  );
}
