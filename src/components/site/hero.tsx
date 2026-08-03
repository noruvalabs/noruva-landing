import { ArrowRight, Check, Gavel, Plane, Terminal, UserCheck } from "lucide-react";
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
      <div
        className="pointer-events-none absolute inset-0 grid-lines opacity-[0.2]"
        style={{
          transform: `translate3d(0, ${p * 0.12}px, 0)`,
          maskImage: "radial-gradient(70% 60% at 50% 35%, #000 30%, transparent 100%)",
        }}
      />
      <div className="container-page relative grid items-center gap-14 py-28 lg:grid-cols-[1.03fr_1fr] lg:py-36">
        <div style={{ transform: `translate3d(0, ${p * -0.06}px, 0)` }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-silver px-3 py-1 font-inter text-caption text-slate">
            <span className="h-1.5 w-1.5 rounded-full bg-action-blue" />
            A software company building applied AI
          </span>
          <h1 className="mt-5 text-[42px] leading-[1.08] tracking-[0.4px] text-graphite md:text-heading-lg lg:text-display">
            Software that
            <br />
            thinks through
            <br />
            hard decisions
          </h1>
          <p className="mt-6 max-w-md text-subheading text-slate">
            Noruva Labs is a software company shipping three assistants — Interview, Immigration and
            Law — and building custom agentic AI systems for teams that need more than a chatbot.
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
            {["3 shipped products", "Custom agentic AI services", "Your data stays yours"].map((i) => (
              <li key={i} className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-action-blue" /> {i}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:pl-10 lg:pr-4" style={{ transform: `translate3d(0, ${p * -0.14}px, 0)` }}>
          <div className="card-surface overflow-hidden">
            <div className="flex items-center gap-2 border-b border-silver px-4 py-3">
              <Terminal className="h-4 w-4 text-stone" />
              <p className="font-inter text-caption text-stone">run · interview.assistant · live</p>
              <span className="ml-auto rounded-full bg-paper px-2 py-0.5 font-inter text-[10px] text-slate">
                p50 2.4s
              </span>
            </div>
            <div className="space-y-1.5 p-4 font-inter text-caption">
              {LOG.map((l, i) => (
                <div key={l.t} className="flex gap-3">
                  <span className="text-stone tabular-nums">{l.t}</span>
                  <span className={i === LOG.length - 1 ? "text-action-blue" : "text-slate"}>{l.m}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 border-t border-silver">
              {[
                ["Products", "03"],
                ["Sessions run", "48k"],
                ["Client teams", "60+"],
              ].map(([k, v]) => (
                <div key={k} className="border-r border-silver px-4 py-3 last:border-r-0">
                  <p className="font-cal text-heading-sm text-graphite">{v}</p>
                  <p className="font-inter text-[10px] text-stone uppercase">{k}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="card-surface absolute -left-6 -bottom-16 hidden w-52 p-4 lg:block"
            style={{ transform: `translate3d(0, ${p * 0.1}px, 0)` }}
          >
            <Plane className="h-4 w-4 text-action-blue" />
            <p className="mt-2 font-cal text-body text-graphite">Immigration Assistant</p>
            <p className="font-inter text-caption text-slate">Case checklists that stay current.</p>
          </div>
          <div
            className="card-surface absolute -right-4 -top-16 hidden w-48 p-4 lg:block"
            style={{ transform: `translate3d(0, ${p * 0.18}px, 0)` }}
          >
            <Gavel className="h-4 w-4 text-action-blue" />
            <p className="mt-2 font-cal text-body text-graphite">Law Assistant</p>
            <p className="font-inter text-caption text-slate">Cited answers, never invented ones.</p>
          </div>
          <div
            className="card-surface absolute -left-10 top-8 hidden w-44 p-4 xl:block"
            style={{ transform: `translate3d(0, ${p * 0.06}px, 0)` }}
          >
            <UserCheck className="h-4 w-4 text-action-blue" />
            <p className="mt-2 font-cal text-body text-graphite">Interview Assistant</p>
            <p className="font-inter text-caption text-slate">Structured, fairer hiring loops.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const LOGOS = ["Northbeam", "Kestrel", "Fielded", "Vantiq", "Orbital", "Halden", "Provolt"];

export function LogoMarquee() {
  return (
    <section className="border-y border-silver py-6">
      <p className="container-page mb-4 text-center font-inter text-caption text-stone">
        Trusted by hiring teams, immigration consultancies and law firms
      </p>
      <div className="mx-auto max-w-[1200px] overflow-hidden px-6 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-14 pr-14">
          {[...LOGOS, ...LOGOS].map((l, i) => (
            <span key={i} className="font-cal text-heading-sm whitespace-nowrap text-stone">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
