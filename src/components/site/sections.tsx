import { ArrowRight, Check, Gavel, GraduationCap, Plane, Puzzle, UserCheck, Video, Wrench } from "lucide-react";
import { useScrollY } from "@/hooks/use-scroll-motion";
import { Reveal, SectionLabel } from "./reveal";

const CAPS = [
  {
    icon: Video,
    title: "Meeting Assistant",
    body: "Live transcripts, automated action item extraction, and executive debrief summaries.",
    status: "Live",
    statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    link: "https://ai.noruvalabs.com",
  },
  {
    icon: Plane,
    title: "Immigration Assistant",
    body: "Route guidance, document checklists and deadline tracking per case.",
    status: "Coming Soon",
    statusColor: "bg-paper text-stone border-silver",
    link: null,
  },
  {
    icon: Gavel,
    title: "Law Assistant",
    body: "Research, summaries and drafting with a citation behind every claim.",
    status: "Coming Soon",
    statusColor: "bg-paper text-stone border-silver",
    link: null,
  },
  {
    icon: GraduationCap,
    title: "Learning Assistant",
    body: "Adaptive courseware, automated tutoring, interactive quizzes and student progress tracking.",
    status: "Coming Soon",
    statusColor: "bg-paper text-stone border-silver",
    link: null,
  },
  {
    icon: Puzzle,
    title: "Agentic AI services",
    body: "Custom agents designed, built and integrated into your existing stack.",
    status: "Available",
    statusColor: "bg-paper text-graphite border-silver",
    link: null,
  },
  {
    icon: Wrench,
    title: "Engineering support",
    body: "Our team stays on after launch: evals, tuning, monitoring, iteration.",
    status: "Included",
    statusColor: "bg-paper text-slate border-silver",
    link: null,
  },
];

export function Capabilities() {
  return (
    <section id="runtime" className="container-page py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionLabel>Products & services</SectionLabel>
          <h2 className="mt-4 text-[28px] leading-[1.1] tracking-[0.4px] text-graphite sm:text-[36px] md:text-heading-lg font-bold font-cal">
            Software first,
            <br />
            AI where it earns it
          </h2>
          <p className="mt-4 max-w-sm text-body text-slate">
            We build specialized AI products starting with our live Meeting Assistant engine.
          </p>
          <a
            href="#faq"
            className="mt-6 inline-flex items-center gap-1.5 text-body-sm text-action-blue font-medium hover:underline"
          >
            Read how we work <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {CAPS.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <article className="card-surface h-full p-6 transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-silver/60 border border-silver/80">
                      <c.icon className="h-4 w-4 text-action-blue" />
                    </div>
                    {c.status && (
                      <span className={`rounded px-2 py-0.5 text-[9px] font-bold border uppercase tracking-wider ${c.statusColor}`}>
                        {c.status}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 text-heading-sm font-bold font-cal text-graphite">{c.title}</h3>
                  <p className="mt-1.5 text-body-sm text-slate">{c.body}</p>
                </div>
                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 font-inter text-caption font-bold text-action-blue hover:underline"
                  >
                    Launch Live App (ai.noruvalabs.com) →
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const STATS = [
  ["04", "Products in the line"],
  ["65k+", "Sessions & loops run"],
  ["15k+", "Active learners supported"],
  ["6 wks", "Typical custom agent build"],
];

export function Stats() {
  const y = useScrollY();
  return (
    <section className="relative overflow-hidden bg-paper/60 border-y border-silver py-12">
      <div className="container-page relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map(([v, k], i) => (
          <Reveal key={k} delay={i * 80}>
            <div className="border-l-2 border-action-blue pl-4">
              <p className="font-cal text-[48px] sm:text-[56px] font-extrabold text-graphite leading-none tracking-tight">{v}</p>
              <p className="mt-2 font-inter text-[11px] font-bold tracking-[0.05em] uppercase text-stone">{k}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const CASES = [
  {
    label: "Meeting Assistant",
    title: "Turn long conversations into instant action items",
    body: "Capture live transcripts, extract owner assignments, generate executive debrief summaries, and push action items straight to your issue tracker.",
    bullets: ["Live transcript capture", "Automated action item extraction", "Executive debrief summaries"],
    steps: ["record sync", "parse transcript", "extract tasks", "sync CRM"],
  },
  {
    label: "Immigration Assistant",
    title: "Every case, every document, every deadline",
    body: "Answer eligibility questions, pick the right route, and generate the exact evidence checklist. Missing or expiring documents surface before they become a refusal.",
    bullets: ["Route eligibility", "Evidence checklists", "Deadline tracking"],
    steps: ["intake", "route match", "checklist", "review"],
  },
  {
    label: "Law Assistant",
    title: "Research you can hand to a partner",
    body: "Search matter files and public sources together, get a summary with paragraph-level citations, and draft from your own precedent bank instead of a generic template.",
    bullets: ["Cited summaries", "Clause extraction", "Precedent-aware drafting"],
    steps: ["retrieve", "cite", "draft", "verify"],
  },
  {
    label: "Learning Assistant",
    title: "Personalized learning loops for every student",
    body: "Turn curriculum materials into interactive study modules, generate adaptive practice quizzes, and provide real-time tutoring feedback with syllabus mastery tracking.",
    bullets: ["Adaptive quiz generation", "Live tutoring feedback", "Syllabus & progress tracking"],
    steps: ["parse syllabus", "generate quiz", "tutor session", "track mastery"],
  },
  {
    label: "Agentic AI services",
    title: "When the workflow is yours alone",
    body: "We scope the process, build the agent against your tools and data, set up evaluations and approval gates, and stay with you through rollout and iteration.",
    bullets: ["Discovery & scoping", "Custom integrations", "Evals and rollout"],
    steps: ["scope", "build", "evaluate", "ship"],
  },
];

export function UseCases() {
  return (
    <section className="container-page space-y-6 py-16 md:py-24">
      <div className="max-w-xl">
        <SectionLabel>In practice</SectionLabel>
        <h2 className="mt-4 text-[36px] leading-[1.1] tracking-[0.4px] text-graphite md:text-heading-lg font-bold font-cal">
          Built for work with real consequences
        </h2>
      </div>
      {CASES.map((c, i) => (
        <Reveal key={c.label}>
          <article className="card-surface grid gap-6 p-6 md:grid-cols-2 md:gap-8 md:p-8 lg:p-10 border-silver shadow-sm">
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <span className="inline-block rounded-md bg-paper border border-silver px-3 py-1 font-inter text-[11px] font-bold tracking-[0.05em] uppercase text-graphite">
                {c.label}
              </span>
              <h3 className="mt-5 text-heading font-bold font-cal text-graphite">{c.title}</h3>
              <p className="mt-3 text-body text-slate leading-relaxed">{c.body}</p>
              <ul className="mt-5 space-y-2">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 font-inter text-body-sm font-medium text-graphite">
                    <Check className="h-4 w-4 text-action-blue" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-paper border border-silver p-6">
              <div className="space-y-3">
                {[0, 1, 2, 3].map((r) => (
                  <div key={r} className="rounded-lg bg-white border border-silver p-3 shadow-xs">
                    <div className="flex items-center justify-between">
                      <p className="font-inter text-caption text-graphite font-bold font-mono">
                        step_{r + 1} · {c.steps[r]}
                      </p>
                      <span className="font-inter text-[10px] font-bold text-stone uppercase tracking-wider">ok</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-silver">
                      <div
                        className="h-1.5 rounded-full bg-action-blue"
                        style={{ width: `${[100, 82, 64, 48][r]}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </section>
  );
}

const QUOTES = [
  {
    q: "Our panels finally score the same candidate the same way. The interview briefs go straight into the hiring committee doc.",
    n: "Dana Reyes",
    r: "Head of Talent, Kestrel",
  },
  {
    q: "The immigration checklists caught two expiring documents we would have filed without. That alone paid for the year.",
    n: "Marcus Lin",
    r: "Principal Consultant, Fielded",
  },
  {
    q: "We asked for a custom agent on top of our matter system. Noruva scoped it, built it and stayed through rollout.",
    n: "Priya Raman",
    r: "Managing Partner, Orbital Law",
  },
];

export function Quotes() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page grid gap-5 md:grid-cols-3">
        {QUOTES.map((q, i) => (
          <Reveal key={q.n} delay={i * 80}>
            <figure className="card-surface h-full p-6">
              <blockquote className="text-body text-graphite">"{q.q}"</blockquote>
              <figcaption className="mt-6 font-inter text-caption text-stone">
                {q.n} · {q.r}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const FAQ = [
  ["Are you a SaaS company?", "We are a software company. We build and licence products, and we take on engineering work — custom agentic AI systems built for a single client's process."],
  ["What are the four products?", "Meeting Assistant for live transcripts and action items, Immigration Assistant for route guidance and case documents, Law Assistant for cited research and drafting, and Learning Assistant for adaptive courseware and tutoring."],
  ["Do the assistants replace professionals?", "No. Each one drafts, checks and organises; a team lead, consultant, lawyer or educator reviews and signs off. Every output is traceable to its source."],
  ["What does an agentic AI engagement look like?", "A short discovery, a scoped build against your own tools and data, an evaluation suite, then rollout with our engineers alongside your team. Most first builds ship in about six weeks."],
  ["Where does our data live?", "In your environment where you need it there. We never train shared models on client documents, matter files, course material or meeting data."],
];

export function Faq() {
  return (
    <section id="faq" className="container-page py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-4 text-[28px] leading-[1.1] tracking-[0.4px] text-graphite sm:text-[36px] md:text-heading-lg">
            Questions we
            <br />
            get weekly
          </h2>
        </div>
        <div className="space-y-3">
          {FAQ.map(([q, a], i) => (
            <Reveal key={q} delay={i * 60}>
              <details className="card-surface group p-6">
                <summary className="cursor-pointer list-none font-cal text-heading-sm text-graphite">
                  {q}
                </summary>
                <p className="mt-3 text-body text-slate">{a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  const y = useScrollY();
  return (
    <section id="cta" className="container-page pb-24">
      <div className="relative overflow-hidden rounded-2xl bg-white border border-silver px-5 py-14 text-center shadow-lg sm:px-6 sm:py-20">

        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-[28px] leading-[1.1] tracking-[0.4px] text-graphite sm:text-[34px] md:text-heading-lg">
            Pick a product, or bring us a problem
          </h2>
          <p className="mx-auto mt-4 max-w-md text-body text-slate">
            Trial Meeting, Immigration, Law or Learning Assistant today — or talk to our engineers about a
            custom agentic AI build for your own workflow.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="https://ai.noruvalabs.com" target="_blank" rel="noopener noreferrer" className="btn-pill btn-ink">
              Start Meeting AI Trial →
            </a>
            <a href="#platform" className="btn-pill btn-ghost">
              Talk to our team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const cols = [
    ["Products", ["Meeting Assistant", "Immigration Assistant", "Law Assistant", "Learning Assistant", "Agentic AI services"]],
    ["Company", ["About", "Careers", "Security", "Contact"]],
    ["Resources", ["Docs", "Blog", "Changelog", "Status", "Privacy"]],
  ] as const;

  return (
    <footer className="border-t border-silver">
      <div className="container-page grid gap-8 py-10 sm:grid-cols-2 md:grid-cols-[1.2fr_repeat(3,0.6fr)] md:gap-10 md:py-14">
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Noruva Labs" className="h-10 w-auto" />
            <span className="font-cal text-heading-sm text-graphite">Noruva Labs</span>
          </div>
          <p className="mt-3 max-w-xs text-body-sm text-slate">
            A software company building applied AI products and custom agentic systems. Built in
            Amsterdam and Toronto.
          </p>
        </div>
        {cols.map(([title, links]) => (
          <div key={title}>
            <p className="font-inter text-caption tracking-[0.08em] text-stone uppercase">{title}</p>
            <ul className="mt-3 space-y-2">
              {links.map((l) => (
                <li key={l}>
                  <a href="#top" className="text-body-sm text-slate hover:text-graphite transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container-page flex flex-col items-center gap-3 border-t border-silver py-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-inter text-caption text-stone">© 2026 Noruva Labs B.V.</p>
        <p className="font-inter text-caption text-stone">SOC 2 Type II · GDPR · ISO 27001</p>
      </div>
    </footer>
  );
}
