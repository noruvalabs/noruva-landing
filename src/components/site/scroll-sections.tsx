import { useSectionProgress } from "@/hooks/use-scroll-motion";
import { SectionLabel } from "./reveal";

const STEPS = [
  {
    n: "01",
    title: "Meeting Assistant",
    body: "Captures live meeting transcripts, automatically extracts action items, organizes speaker debriefs, and syncs key decisions across your organization.",
    stat: ["Meetings structured", "48k"],
    status: "Live",
    statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    link: "https://ai.noruvalabs.com",
  },
  {
    n: "02",
    title: "Immigration Assistant",
    body: "Walks an applicant or consultant through the right route, builds the document checklist, flags missing evidence, and keeps track of deadlines across a whole caseload.",
    stat: ["Case types covered", "120+"],
    status: "Coming Soon",
    statusColor: "bg-paper text-stone border-silver",
    link: null,
  },
  {
    n: "03",
    title: "Law Assistant",
    body: "Research, summarisation and drafting grounded in your own matter files and public sources — every answer carries a citation back to the paragraph it came from.",
    stat: ["Answers with citations", "100%"],
    status: "Coming Soon",
    statusColor: "bg-paper text-stone border-silver",
    link: null,
  },
  {
    n: "04",
    title: "Learning Assistant",
    body: "Generates interactive curriculum, adaptive quizzes and personalized study loops for students, corporate teams and educational institutions.",
    stat: ["Active learners", "15k+"],
    status: "Coming Soon",
    statusColor: "bg-paper text-stone border-silver",
    link: null,
  },
  {
    n: "05",
    title: "Agentic AI services",
    body: "Beyond our products we design, build and run custom agent systems inside your stack: tool integrations, evaluations, approvals and deployment support from our engineers.",
    stat: ["Typical first build", "6 wks"],
    status: "Available",
    statusColor: "bg-paper text-graphite border-silver",
    link: null,
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
              <h2 className="mt-4 text-[28px] leading-[1.1] tracking-[0.4px] text-graphite sm:text-[36px] md:text-heading-lg">
                Four products,
                <br />
                one engineering team
              </h2>
              <p className="mt-4 max-w-sm text-body text-slate">
                Keep scrolling to walk through our live products and upcoming software suite.
              </p>

              <ol className="mt-8 space-y-3">
                {STEPS.map((s, i) => (
                  <li key={s.n} className="flex items-center gap-3">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-md font-inter text-caption transition-colors duration-300 ${
                        i <= index ? "bg-graphite text-white font-bold" : "bg-silver/80 text-stone"
                      }`}
                    >
                      {s.n}
                    </span>
                    <span
                      className={`font-inter text-body-sm transition-colors duration-300 ${
                        i === index ? "text-graphite font-bold" : "text-stone"
                      }`}
                    >
                      {s.title}
                    </span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded border uppercase tracking-wider ${s.statusColor}`}>
                      {s.status}
                    </span>
                  </li>
                ))}
              </ol>

              <div className="mt-8 h-px w-full bg-silver">
                <div
                  className="h-px bg-action-blue transition-[width] duration-150"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
            </div>

            <div className="relative min-h-[380px]">
              {STEPS.map((s, i) => (
                <article
                  key={s.n}
                  className="card-surface absolute inset-x-0 top-0 p-8 shadow-md border-silver transition-all duration-300"
                  style={{
                    opacity: i === index ? 1 : 0,
                    transform:
                      i === index
                        ? "translateY(0) scale(1)"
                        : `translateY(${i < index ? -24 : 24}px) scale(0.97)`,
                    pointerEvents: i === index ? "auto" : "none",
                  }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-block rounded-md bg-paper border border-silver px-3 py-1 font-inter text-[11px] font-bold tracking-[0.05em] uppercase text-graphite">
                      {i === STEPS.length - 1 ? "Services" : `Product ${s.n}`}
                    </span>
                    <span className={`rounded px-2.5 py-0.5 text-[10px] font-bold border uppercase tracking-wider ${s.statusColor}`}>
                      {s.status}
                    </span>
                  </div>

                  <h3 className="mt-5 text-heading font-bold font-cal text-graphite">{s.title}</h3>
                  <p className="mt-3 max-w-lg text-subheading text-slate leading-relaxed">{s.body}</p>

                  {s.link && (
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 rounded-md bg-action-blue px-4 py-2 text-[13px] font-bold text-white shadow-xs hover:opacity-90 transition-opacity"
                    >
                      Launch Live App (ai.noruvalabs.com) →
                    </a>
                  )}

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-paper border border-silver p-4">
                      <p className="font-inter text-[10px] font-bold tracking-[0.05em] text-stone uppercase">
                        {s.stat[0]}
                      </p>
                      <p className="mt-1 font-cal text-[32px] font-extrabold text-graphite tracking-tight">{s.stat[1]}</p>
                    </div>
                    <div className="rounded-xl bg-paper border border-silver p-4">
                      <p className="font-inter text-[10px] font-bold tracking-[0.05em] text-stone uppercase">
                        Section progress
                      </p>
                      <div className="mt-3 h-2 w-full rounded-full bg-silver">
                        <div
                          className="h-2 rounded-full bg-action-blue"
                          style={{
                            width: `${Math.min(100, Math.max(0, (progress * STEPS.length - i) * 100))}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
              <p className="absolute -bottom-2 right-0 font-inter text-caption text-stone">
                {active.n} / 0{STEPS.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const RAIL = [
  { title: "Interview question sets", body: "Role-specific prompts generated from the job spec and levelling guide." },
  { title: "Panel scorecards", body: "Consistent rubrics, bias-flagged language and comparable candidate briefs." },
  { title: "Visa route finder", body: "Answers eligibility questions and maps the applicant to the right route." },
  { title: "Document checklists", body: "Tracks evidence, expiry dates and what is still missing per case." },
  { title: "Legal research", body: "Cited summaries drawn from your matter files and public sources." },
  { title: "Contract drafting", body: "Clause extraction, playbook comparison and redline suggestions." },
  { title: "Adaptive courseware", body: "Personalized learning pathways, interactive quizzes and knowledge checks." },
  { title: "Automated tutoring", body: "Instant feedback on student assignments, syllabus alignment and progress rubrics." },
  { title: "Custom agent builds", body: "Bespoke agentic workflows wired into your own tools and data." },
  { title: "Evaluation & rollout", body: "Test suites, approval gates and hands-on deployment support." },
];

/** Horizontally scroll-jacked rail driven by vertical scroll. */
export function HorizontalRail() {
  const { ref, progress } = useSectionProgress<HTMLDivElement>();
  const shift = progress * (RAIL.length - 2.2) * 340;

  return (
    <section id="agents" ref={ref} className="relative" style={{ height: "350vh" }}>
      <div className="sticky top-0 flex h-screen w-screen max-w-full flex-col justify-center overflow-hidden">
        <div className="container-page w-full">
          <SectionLabel>Capability rail</SectionLabel>
          <h2 className="mt-4 max-w-xl text-[36px] leading-[1.1] tracking-[0.4px] text-graphite md:text-heading-lg">
            What our products and engineers deliver
          </h2>
        </div>
        <div className="container-page mt-10 w-full overflow-hidden">
          <div
            className="flex gap-5 will-change-transform"
            style={{ transform: `translate3d(${-shift}px, 0, 0)`, transition: "transform 120ms linear" }}
          >
            {RAIL.map((r, i) => (
              <article key={r.title} className="card-surface w-[280px] shrink-0 p-6 sm:w-[320px]">
                <span className="font-inter text-caption text-stone">
                  {i + 1 < 10 ? `0${i + 1}` : i + 1} / {RAIL.length < 10 ? `0${RAIL.length}` : RAIL.length}
                </span>
                <h3 className="mt-6 text-heading-sm text-graphite">{r.title}</h3>
                <p className="mt-2 text-body-sm text-slate">{r.body}</p>
                <div className="mt-8 flex items-center gap-2">
                  <span className="rounded-full bg-silver px-3 py-1 font-inter text-caption text-slate">
                    {i > 7 ? "Service" : "Product"}
                  </span>
                  <span className="rounded-full bg-silver px-3 py-1 font-inter text-caption text-slate">
                    Human in the loop
                  </span>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 h-px w-full max-w-xs bg-silver">
            <div className="h-px bg-action-blue" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>
      </div>
    </section>
  );
}
