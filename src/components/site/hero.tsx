import { ArrowRight, Check, Gavel, GraduationCap, Plane, Terminal, UserCheck, Building2, ShieldCheck, Briefcase, Cpu, Globe2, Scale, Zap } from "lucide-react";
import { useScrollY } from "@/hooks/use-scroll-motion";

const LOG = [
  { t: "00:00.12", m: "agent.start — interview.assistant" },
  { t: "00:00.48", m: "tool:parse_resume → 6 skills matched" },
  { t: "00:01.03", m: "tool:question_bank → 9 tailored prompts" },
  { t: "00:01.77", m: "scoring.rubric → structured feedback" },
  { t: "00:02.41", m: "tool:report.build → committed" },
  { t: "00:02.66", m: "agent.done — candidate brief ready" },
];

export function Hero() {
  const y = useScrollY();
  const p = Math.min(y, 900);

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Gradient glow background */}
      <div className="pointer-events-none absolute inset-0 glow-purple" />

      <div className="container-page relative grid items-center gap-10 py-20 lg:grid-cols-[1.03fr_1fr] lg:gap-14 lg:py-36">
        <div style={{ transform: `translate3d(0, ${p * -0.06}px, 0)` }}>
          <span className="inline-flex items-center gap-2 rounded-md border border-silver bg-white px-3 py-1 font-inter text-[11px] font-semibold tracking-[0.05em] uppercase text-graphite shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-action-blue" />
            Enterprise Applied AI Platform
          </span>
          <h1 className="mt-5 text-[32px] leading-[1.1] tracking-tight text-graphite sm:text-[42px] md:text-heading-lg lg:text-display font-bold font-cal">
            Software that
            <br />
            thinks through
            <br />
            hard decisions
          </h1>
          <p className="mt-6 max-w-md text-subheading text-slate leading-relaxed">
            Noruva Labs is a software company shipping four assistants — Interview, Immigration, Law and
            Learning — and building custom agentic AI systems for teams that need more than a chatbot.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#cta" className="btn-pill btn-ink">
              Talk to our team <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#platform" className="btn-pill btn-ghost">
              See our products
            </a>
          </div>
          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 font-inter text-caption text-slate">
            {["4 shipped products", "Custom agentic AI services", "Your data stays yours"].map((i) => (
              <li key={i} className="inline-flex items-center gap-1.5 font-medium">
                <Check className="h-3.5 w-3.5 text-action-blue" /> {i}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:pl-10 lg:pr-4" style={{ transform: `translate3d(0, ${p * -0.14}px, 0)` }}>
          <div className="card-surface overflow-hidden text-[11px] sm:text-[12px] shadow-md border-silver">
            <div className="flex items-center gap-2 border-b border-silver bg-paper px-4 py-3">
              <Terminal className="h-4 w-4 text-stone" />
              <p className="font-inter text-caption font-semibold text-graphite">run · interview.assistant · live</p>
              <span className="ml-auto rounded-md bg-white border border-silver px-2 py-0.5 font-inter text-[10px] font-semibold text-graphite">
                p50 2.4s
              </span>
            </div>
            <div className="space-y-2 p-3 font-inter text-[10px] sm:p-4 sm:text-caption bg-white">
              {LOG.map((l, i) => (
                <div key={l.t} className="flex gap-2 sm:gap-3 items-center">
                  <span className="shrink-0 text-stone font-mono text-[11px] tabular-nums">{l.t}</span>
                  <span className={`truncate font-medium ${i === LOG.length - 1 ? "text-action-blue font-bold" : "text-slate"}`}>{l.m}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 border-t border-silver bg-paper">
              {[
                ["Products", "04"],
                ["Sessions run", "65k+"],
                ["Client teams", "80+"],
              ].map(([k, v]) => (
                <div key={k} className="border-r border-silver px-3 py-3 last:border-r-0 sm:px-4 sm:py-3.5">
                  <p className="font-cal text-[22px] font-extrabold text-graphite sm:text-heading">{v}</p>
                  <p className="font-inter text-[10px] font-bold text-stone tracking-[0.05em] uppercase mt-0.5">{k}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="card-surface absolute -left-6 -bottom-16 hidden w-52 p-4 lg:block border-silver shadow-md"
            style={{ transform: `translate3d(0, ${p * 0.1}px, 0)` }}
          >
            <Plane className="h-4 w-4 text-action-blue" />
            <p className="mt-2 font-cal text-body font-bold text-graphite">Immigration Assistant</p>
            <p className="font-inter text-caption text-slate">Case checklists that stay current.</p>
          </div>
          <div
            className="card-surface absolute -right-4 -top-16 hidden w-48 p-4 lg:block border-silver shadow-md"
            style={{ transform: `translate3d(0, ${p * 0.18}px, 0)` }}
          >
            <Gavel className="h-4 w-4 text-action-blue" />
            <p className="mt-2 font-cal text-body font-bold text-graphite">Law Assistant</p>
            <p className="font-inter text-caption text-slate">Cited answers, never invented ones.</p>
          </div>
          <div
            className="card-surface absolute -left-10 top-8 hidden w-44 p-4 xl:block border-silver shadow-md"
            style={{ transform: `translate3d(0, ${p * 0.06}px, 0)` }}
          >
            <UserCheck className="h-4 w-4 text-action-blue" />
            <p className="mt-2 font-cal text-body font-bold text-graphite">Interview Assistant</p>
            <p className="font-inter text-caption text-slate">Structured, fairer hiring loops.</p>
          </div>
          <div
            className="card-surface absolute -right-6 -bottom-8 hidden w-48 p-4 xl:block border-silver shadow-md"
            style={{ transform: `translate3d(0, ${p * 0.12}px, 0)` }}
          >
            <GraduationCap className="h-4 w-4 text-action-blue" />
            <p className="mt-2 font-cal text-body font-bold text-graphite">Learning Assistant</p>
            <p className="font-inter text-caption text-slate">Adaptive courseware & study loops.</p>
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
