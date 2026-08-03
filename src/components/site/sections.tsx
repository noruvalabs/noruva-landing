import { ArrowRight, Check, Gavel, Plane, Puzzle, ShieldCheck, UserCheck, Wrench } from "lucide-react";
import { useScrollY } from "@/hooks/use-scroll-motion";
import { Reveal, SectionLabel } from "./reveal";

const CAPS = [
  { icon: UserCheck, title: "Interview Assistant", body: "Structured question sets, live notes and comparable candidate scorecards." },
  { icon: Plane, title: "Immigration Assistant", body: "Route guidance, document checklists and deadline tracking per case." },
  { icon: Gavel, title: "Law Assistant", body: "Research, summaries and drafting with a citation behind every claim." },
  { icon: Puzzle, title: "Agentic AI services", body: "Custom agents designed, built and integrated into your existing stack." },
  { icon: Wrench, title: "Engineering support", body: "Our team stays on after launch: evals, tuning, monitoring, iteration." },
  { icon: ShieldCheck, title: "Private by default", body: "Your documents and matter data are never used to train shared models." },
];

export function Capabilities() {
  return (
    <section id="runtime" className="container-page py-24">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionLabel>Products & services</SectionLabel>
          <h2 className="mt-4 text-[36px] leading-[1.1] tracking-[0.4px] text-graphite md:text-heading-lg">
            Software first,
            <br />
            AI where it earns it
          </h2>
          <p className="mt-4 max-w-sm text-body text-slate">
            We are an engineering studio. We ship licensed products, and we build agentic AI
            systems for teams who need something only they would need.
          </p>
          <a
            href="#faq"
            className="mt-6 inline-flex items-center gap-1.5 text-body-sm text-action-blue"
          >
            Read how we work <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {CAPS.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <article className="card-surface h-full p-6 transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-silver">
                  <c.icon className="h-4 w-4 text-action-blue" />
                </div>
                <h3 className="mt-4 text-heading-sm text-graphite">{c.title}</h3>
                <p className="mt-1.5 text-body-sm text-slate">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const STATS = [
  ["03", "Products in the line"],
  ["48k", "Interview sessions run"],
  ["120+", "Immigration case types covered"],
  ["6 wks", "Typical custom agent build"],
];

export function Stats() {
  const y = useScrollY();
  return (
    <section className="relative overflow-hidden border-y border-silver">
      <div
        className="pointer-events-none absolute inset-0 grid-lines opacity-20"
        style={{ transform: `translate3d(0, ${(y % 800) * -0.05}px, 0)` }}
      />
      <div className="container-page relative grid gap-8 py-20 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map(([v, k], i) => (
          <Reveal key={k} delay={i * 80}>
            <p className="font-cal text-heading-lg text-graphite">{v}</p>
            <p className="mt-1 font-inter text-body-sm text-slate">{k}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const CASES = [
  {
    label: "Interview Assistant",
    title: "Hire on evidence, not on who interviewed best",
    body: "Generate a role-specific interview loop from the job spec, capture notes while the conversation happens, and produce a scorecard the whole panel reads the same way.",
    bullets: ["Role-specific question sets", "Live note capture", "Comparable scorecards"],
    steps: ["parse spec", "build loop", "capture notes", "score"],
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
    label: "Agentic AI services",
    title: "When the workflow is yours alone",
    body: "We scope the process, build the agent against your tools and data, set up evaluations and approval gates, and stay with you through rollout and iteration.",
    bullets: ["Discovery & scoping", "Custom integrations", "Evals and rollout"],
    steps: ["scope", "build", "evaluate", "ship"],
  },
];

export function UseCases() {
  return (
    <section className="container-page space-y-6 py-24">
      <div className="max-w-xl">
        <SectionLabel>In practice</SectionLabel>
        <h2 className="mt-4 text-[36px] leading-[1.1] tracking-[0.4px] text-graphite md:text-heading-lg">
          Built for work with real consequences
        </h2>
      </div>
      {CASES.map((c, i) => (
        <Reveal key={c.label}>
          <article className="card-surface grid gap-8 p-8 md:grid-cols-2 md:p-10">
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <span className="rounded-full bg-silver px-3 py-1 font-inter text-caption text-slate">
                {c.label}
              </span>
              <h3 className="mt-5 text-heading text-graphite">{c.title}</h3>
              <p className="mt-3 text-body text-slate">{c.body}</p>
              <ul className="mt-5 space-y-2">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 font-inter text-body-sm text-graphite">
                    <Check className="h-4 w-4 text-action-blue" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-silver/30 p-6">
              <div className="space-y-3">
                {[0, 1, 2, 3].map((r) => (
                  <div key={r} className="rounded-lg bg-white/5 p-3 shadow-[var(--shadow-card)]">
                    <div className="flex items-center justify-between">
                      <p className="font-inter text-caption text-graphite">
                        step_{r + 1} · {c.steps[r]}
                      </p>
                      <span className="font-inter text-[10px] text-stone">ok</span>
                    </div>
                    <div className="mt-2 h-1 w-full rounded-full bg-silver">
                      <div
                        className="h-1 rounded-full bg-action-blue"
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
    <section className="border-y border-silver py-24">
      <div className="container-page grid gap-5 md:grid-cols-3">
        {QUOTES.map((q, i) => (
          <Reveal key={q.n} delay={i * 80}>
            <figure className="h-full rounded-xl bg-white/5 p-6">
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
  ["What are the three products?", "Interview Assistant for structured hiring loops, Immigration Assistant for route guidance and case documents, and Law Assistant for cited research and drafting."],
  ["Do the assistants replace professionals?", "No. Each one drafts, checks and organises; a recruiter, consultant or lawyer reviews and signs off. Every output is traceable to its source."],
  ["What does an agentic AI engagement look like?", "A short discovery, a scoped build against your own tools and data, an evaluation suite, then rollout with our engineers alongside your team. Most first builds ship in about six weeks."],
  ["Where does our data live?", "In your environment where you need it there. We never train shared models on client documents, matter files or candidate data."],
];

export function Faq() {
  return (
    <section id="faq" className="container-page py-24">
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-4 text-[36px] leading-[1.1] tracking-[0.4px] text-graphite md:text-heading-lg">
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
      <div className="relative overflow-hidden rounded-xl bg-action-blue/20 border border-action-blue/30 px-6 py-20 text-center">
        <div
          className="pointer-events-none absolute inset-0 opacity-10 grid-lines"
          style={{ transform: `translate3d(0, ${(y % 600) * 0.08}px, 0)` }}
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-[34px] leading-[1.1] tracking-[0.4px] text-graphite md:text-heading-lg">
            Pick a product, or bring us a problem
          </h2>
          <p className="mx-auto mt-4 max-w-md text-body text-slate">
            Trial Interview, Immigration or Law Assistant today — or talk to our engineers about a
            custom agentic AI build for your own workflow.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#pricing" className="btn-pill bg-action-blue text-white hover:bg-action-blue/80">
              Start a trial
            </a>
            <a href="#platform" className="btn-pill border border-silver text-graphite hover:bg-silver/30">
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
    ["Products", ["Interview Assistant", "Immigration Assistant", "Law Assistant", "Agentic AI services"]],
    ["Company", ["About", "Careers", "Security", "Contact"]],
    ["Resources", ["Docs", "Changelog", "Status", "Privacy"]],
  ] as const;

  return (
    <footer className="border-t border-silver">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.2fr_repeat(3,0.6fr)]">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink font-cal text-caption text-white">
              N
            </span>
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
      <div className="container-page flex flex-wrap items-center justify-between gap-3 border-t border-silver py-6">
        <p className="font-inter text-caption text-stone">© 2026 Noruva Labs B.V.</p>
        <p className="font-inter text-caption text-stone">SOC 2 Type II · GDPR · ISO 27001</p>
      </div>
    </footer>
  );
}
