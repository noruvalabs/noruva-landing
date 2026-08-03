import { useSectionProgress } from "@/hooks/use-scroll-motion";
import { SectionLabel } from "./reveal";

const STEPS = [
  {
    n: "01",
    title: "Interview Assistant",
    body: "Turns a job description into a structured interview loop: tailored questions, live note capture, rubric scoring and a candidate brief the panel can actually compare.",
    stat: ["Interviews structured", "48k"],
  },
  {
    n: "02",
    title: "Immigration Assistant",
    body: "Walks an applicant or consultant through the right route, builds the document checklist, flags missing evidence, and keeps track of deadlines across a whole caseload.",
    stat: ["Case types covered", "120+"],
  },
  {
    n: "03",
    title: "Law Assistant",
    body: "Research, summarisation and drafting grounded in your own matter files and public sources — every answer carries a citation back to the paragraph it came from.",
    stat: ["Answers with citations", "100%"],
  },
  {
    n: "04",
    title: "Agentic AI services",
    body: "Beyond our products we design, build and run custom agent systems inside your stack: tool integrations, evaluations, approvals and deployment support from our engineers.",
    stat: ["Typical first build", "6 wks"],
  },
];

/** Scroll-jacked section: the panel is pinned while steps advance with scroll. */
export function ScrollStory() {
  const { ref, progress } = useSectionProgress<HTMLDivElement>();
  const index = Math.min(STEPS.length - 1, Math.floor(progress * STEPS.length * 0.999));
  const active = STEPS[index]!;

  return (
    <section id="platform" ref={ref} className="relative" style={{ height: "400vh" }}>
      <div className="sticky top-0 flex h-screen w-screen max-w-full items-center overflow-hidden">
        <div className="container-page w-full min-w-0">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel>What we build</SectionLabel>
              <h2 className="mt-4 text-[36px] leading-[1.1] tracking-[0.4px] text-graphite md:text-heading-lg">
                Three products,
                <br />
                one engineering team
              </h2>
              <p className="mt-4 max-w-sm text-body text-slate">
                Keep scrolling to walk through the product line and the services we wrap around it.
              </p>

              <ol className="mt-8 space-y-3">
                {STEPS.map((s, i) => (
                  <li key={s.n} className="flex items-center gap-3">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full font-inter text-caption transition-colors duration-300 ${
                        i <= index ? "bg-action-blue text-white" : "bg-silver text-stone"
                      }`}
                    >
                      {s.n}
                    </span>
                    <span
                      className={`font-inter text-body-sm transition-colors duration-300 ${
                        i === index ? "text-graphite" : "text-stone"
                      }`}
                    >
                      {s.title}
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
                  className="card-surface absolute inset-x-0 top-0 p-8 transition-all duration-300"
                  style={{
                    opacity: i === index ? 1 : 0,
                    transform:
                      i === index
                        ? "translateY(0) scale(1)"
                        : `translateY(${i < index ? -24 : 24}px) scale(0.97)`,
                    pointerEvents: i === index ? "auto" : "none",
                  }}
                >
                  <span className="inline-block rounded-full bg-silver px-3 py-1 font-inter text-caption text-slate">
                    {i === STEPS.length - 1 ? "Services" : `Product ${s.n}`}
                  </span>
                  <h3 className="mt-5 text-heading text-graphite">{s.title}</h3>
                  <p className="mt-3 max-w-lg text-subheading text-slate">{s.body}</p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-silver/30 p-4">
                      <p className="font-inter text-[10px] tracking-[0.08em] text-stone uppercase">
                        {s.stat[0]}
                      </p>
                      <p className="mt-1 font-cal text-heading text-graphite">{s.stat[1]}</p>
                    </div>
                    <div className="rounded-xl bg-silver/30 p-4">
                      <p className="font-inter text-[10px] tracking-[0.08em] text-stone uppercase">
                        Section progress
                      </p>
                      <div className="mt-3 h-1.5 w-full rounded-full bg-silver">
                        <div
                          className="h-1.5 rounded-full bg-action-blue"
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
  { title: "Custom agent builds", body: "Bespoke agentic workflows wired into your own tools and data." },
  { title: "Evaluation & rollout", body: "Test suites, approval gates and hands-on deployment support." },
];

/** Horizontally scroll-jacked rail driven by vertical scroll. */
export function HorizontalRail() {
  const { ref, progress } = useSectionProgress<HTMLDivElement>();
  const shift = progress * (RAIL.length - 2.2) * 340;

  return (
    <section id="agents" ref={ref} className="relative" style={{ height: "320vh" }}>
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
              <article key={r.title} className="card-surface w-[320px] shrink-0 p-6">
                <span className="font-inter text-caption text-stone">
                  0{i + 1} / 0{RAIL.length}
                </span>
                <h3 className="mt-6 text-heading-sm text-graphite">{r.title}</h3>
                <p className="mt-2 text-body-sm text-slate">{r.body}</p>
                <div className="mt-8 flex items-center gap-2">
                  <span className="rounded-full bg-silver px-3 py-1 font-inter text-caption text-slate">
                    {i > 5 ? "Service" : "Product"}
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
