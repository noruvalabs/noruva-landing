import { useState, useEffect } from "react";
import { ArrowRight, Check, CheckCircle2, ChevronDown, ExternalLink, Gavel, GraduationCap, Plane, Puzzle, Star, Video, Wrench, Zap } from "lucide-react";
import { Reveal, SectionLabel } from "./reveal";
import { useTranslation } from "../../lib/i18n/use-translation";

const CAP_STYLES = [
  {
    icon: Video,
    statusColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    iconBg: "bg-emerald-100 text-emerald-700 border-emerald-300",
    cardBg: "bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/40 border-emerald-200 shadow-emerald-500/5",
    accentColor: "text-emerald-700 font-bold",
    link: "https://ai.noruvalabs.com/en",
  },
  {
    icon: Plane,
    statusColor: "bg-blue-100 text-blue-800 border-blue-300",
    iconBg: "bg-blue-100 text-blue-700 border-blue-300",
    cardBg: "bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/40 border-blue-200 shadow-blue-500/5",
    accentColor: "text-blue-700 font-bold",
    link: "https://visa.noruvalabs.com/",
  },
  {
    icon: Gavel,
    statusColor: "bg-slate-100 text-slate-800 border-slate-300",
    iconBg: "bg-slate-100 text-[#153E6E] border-slate-300",
    cardBg: "bg-gradient-to-br from-slate-100/80 via-white to-indigo-50/40 border-slate-300 shadow-slate-500/5",
    accentColor: "text-[#153E6E] font-bold",
    link: "/products/law",
  },
  {
    icon: GraduationCap,
    statusColor: "bg-purple-100 text-purple-800 border-purple-300",
    iconBg: "bg-purple-100 text-purple-700 border-purple-300",
    cardBg: "bg-gradient-to-br from-purple-50/80 via-white to-fuchsia-50/40 border-purple-200 shadow-purple-500/5",
    accentColor: "text-purple-700 font-bold",
    link: "/products/learning",
  },
  {
    icon: Puzzle,
    statusColor: "bg-amber-100 text-amber-800 border-amber-300",
    iconBg: "bg-amber-100 text-amber-700 border-amber-300",
    cardBg: "bg-gradient-to-br from-amber-50/80 via-white to-orange-50/40 border-amber-200 shadow-amber-500/5",
    accentColor: "text-amber-700 font-bold",
    link: "https://autonova-website.vercel.app/",
  },
  {
    icon: Wrench,
    statusColor: "bg-teal-100 text-teal-800 border-teal-300",
    iconBg: "bg-teal-100 text-teal-700 border-teal-300",
    cardBg: "bg-gradient-to-br from-teal-50/80 via-white to-cyan-50/40 border-teal-200 shadow-teal-500/5",
    accentColor: "text-teal-700 font-bold",
    link: "/contact",
  },
];

export function Capabilities() {
  const { t } = useTranslation();

  const caps = t.capabilities.items.map((item, idx) => {
    const style = CAP_STYLES[idx] || CAP_STYLES[0];
    let actionText = t.capabilities.learnMore;
    if (idx === 0 || idx === 1) actionText = t.capabilities.tryLiveApp;
    else if (idx === 4) actionText = t.capabilities.exploreService;

    return {
      ...item,
      ...style,
      actionText,
    };
  });

  return (
    <section id="runtime" className="container-page py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionLabel>{t.capabilities.sectionLabel}</SectionLabel>
          <h2 className="mt-4 text-[28px] leading-[1.1] tracking-[0.4px] text-graphite sm:text-[36px] md:text-heading-lg font-bold font-cal">
            {t.capabilities.titlePart1}
            <br />
            {t.capabilities.titlePart2}
          </h2>
          <p className="mt-4 max-w-sm text-body text-slate leading-relaxed">
            {t.capabilities.description}
          </p>
          <a
            href="#faq"
            className="mt-6 inline-flex items-center gap-1.5 text-body-sm text-action-blue font-bold hover:underline"
          >
            {t.capabilities.readHowWeWork} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {caps.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <article className={`card-surface h-full p-6 transition-all duration-300 hover:shadow-xl flex flex-col justify-between ${c.cardBg}`}>
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg border ${c.iconBg}`}>
                      <c.icon className="h-4.5 w-4.5" />
                    </div>
                    {c.status && (
                      <span className={`rounded-md px-2 py-0.5 text-[9px] font-bold border uppercase tracking-wider ${c.statusColor}`}>
                        {c.status}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 text-heading-sm font-bold font-cal text-graphite">
                    {c.link ? (
                      <a
                        href={c.link}
                        target={c.link.startsWith("http") ? "_blank" : undefined}
                        rel={c.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="hover:underline inline-flex items-center gap-1.5 group"
                      >
                        <span>{c.title}</span>
                        {c.link.startsWith("http") && <ExternalLink className="h-3.5 w-3.5 text-slate opacity-60 group-hover:opacity-100" />}
                      </a>
                    ) : (
                      c.title
                    )}
                  </h3>
                  <p className="mt-1.5 text-body-sm text-slate leading-relaxed">{c.body}</p>
                </div>
                {c.link && (
                  <a
                    href={c.link}
                    target={c.link.startsWith("http") ? "_blank" : undefined}
                    rel={c.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`mt-4 inline-flex items-center gap-1 font-inter text-caption ${c.accentColor} hover:underline`}
                  >
                    <span>{c.actionText}</span>
                    <span>→</span>
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

export function Stats() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-paper/60 border-y border-silver py-12">
      <div className="container-page relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {t.stats.items.map(([v, k], i) => (
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

interface StepDetail {
  title: string;
  sub: string;
  pct: number;
  status: "done" | "active" | "queued";
}

function AnimatedCasePipeline({
  steps,
  badgeText = "Pipeline Active",
  latency = "380ms",
}: {
  steps: StepDetail[];
  badgeText?: string;
  latency?: string;
}) {
  const [_pulse, setPulse] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse((p) => (p + 1) % 100);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-xl bg-paper/80 border border-silver p-5 sm:p-6 shadow-xs transition-all duration-300">
      {/* Pipeline Status Header */}
      <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-silver/60">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="font-mono text-[11px] font-bold text-graphite tracking-tight uppercase">
            {badgeText}
          </span>
        </div>
        <span className="font-mono text-[10px] font-bold text-slate bg-white px-2.5 py-0.5 rounded border border-silver/80 shadow-2xs">
          ⚡ {latency} Latency
        </span>
      </div>

      {/* 4 Animated Pipeline Steps */}
      <div className="space-y-3">
        {steps.map((s, r) => {
          const isDone = s.status === "done";
          const isActive = s.status === "active";
          return (
            <div
              key={s.title}
              className={`rounded-lg bg-white border p-3.5 shadow-xs transition-all duration-300 hover:shadow-md hover:border-slate-300 ${
                isActive
                  ? "border-action-blue/60 ring-1 ring-action-blue/20 bg-gradient-to-r from-white via-blue-50/20 to-white"
                  : "border-silver/80"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-caption text-graphite font-bold">
                      step_{r + 1} · {s.title}
                    </span>
                  </div>
                  <p className="font-inter text-[11px] text-stone mt-0.5 truncate">
                    {s.sub}
                  </p>
                </div>

                <div className="shrink-0 text-right">
                  {isDone ? (
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 uppercase tracking-wider">
                      <CheckCircle2 className="h-3 w-3 text-emerald-600" /> OK
                    </span>
                  ) : isActive ? (
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-action-blue bg-blue-50 px-2 py-0.5 rounded border border-blue-200 uppercase tracking-wider animate-pulse">
                      <Zap className="h-3 w-3 text-action-blue" /> {s.pct}% ACTIVE
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold text-stone bg-paper px-2 py-0.5 rounded border border-silver uppercase tracking-wider">
                      QUEUED
                    </span>
                  )}
                </div>
              </div>

              {/* Progress bar with animated fill and shimmer */}
              <div className="mt-2.5 h-1.5 w-full rounded-full bg-silver/60 overflow-hidden relative">
                <div
                  className={`h-full rounded-full transition-all duration-700 relative ${
                    isDone
                      ? "bg-action-blue"
                      : isActive
                      ? "bg-gradient-to-r from-action-blue to-teal-500"
                      : "bg-silver"
                  }`}
                  style={{ width: `${s.pct}%` }}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-white/40 animate-pulse" />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const CASE_LINKS = [
  "https://ai.noruvalabs.com/en",
  "https://visa.noruvalabs.com/",
  "/products/law",
  "/products/learning",
  "https://autonova-website.vercel.app/",
];

const CASE_STEP_METAS = [
  [
    { pct: 100, status: "done" as const },
    { pct: 100, status: "done" as const },
    { pct: 88, status: "active" as const },
    { pct: 45, status: "queued" as const },
  ],
  [
    { pct: 100, status: "done" as const },
    { pct: 100, status: "done" as const },
    { pct: 92, status: "active" as const },
    { pct: 40, status: "queued" as const },
  ],
  [
    { pct: 100, status: "done" as const },
    { pct: 100, status: "done" as const },
    { pct: 78, status: "active" as const },
    { pct: 35, status: "queued" as const },
  ],
  [
    { pct: 100, status: "done" as const },
    { pct: 100, status: "done" as const },
    { pct: 84, status: "active" as const },
    { pct: 50, status: "queued" as const },
  ],
  [
    { pct: 100, status: "done" as const },
    { pct: 100, status: "done" as const },
    { pct: 86, status: "active" as const },
    { pct: 40, status: "queued" as const },
  ],
];

export function UseCases() {
  const { t } = useTranslation();

  const cases = t.useCases.cases.map((c, idx) => {
    const link = CASE_LINKS[idx];
    const metas = CASE_STEP_METAS[idx] || CASE_STEP_METAS[0];
    const stepsWithMeta: StepDetail[] = c.steps.map((st, sIdx) => ({
      title: st.title,
      sub: st.sub,
      pct: metas[sIdx]?.pct ?? 100,
      status: metas[sIdx]?.status ?? "done",
    }));

    return {
      ...c,
      link,
      steps: stepsWithMeta,
    };
  });

  return (
    <section className="container-page space-y-6 py-16 md:py-24">
      <div className="max-w-xl">
        <SectionLabel>{t.useCases.sectionLabel}</SectionLabel>
        <h2 className="mt-4 text-[36px] leading-[1.1] tracking-[0.4px] text-graphite md:text-heading-lg font-bold font-cal">
          {t.useCases.title}
        </h2>
      </div>
      {cases.map((c, i) => (
        <Reveal key={c.label}>
          <article className="card-surface grid gap-6 p-6 md:grid-cols-2 md:gap-8 md:p-8 lg:p-10 border-silver shadow-sm hover:shadow-md transition-all duration-300">
            <div className={`flex flex-col justify-between ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <div>
                <span className="inline-block rounded-md bg-paper border border-silver px-3 py-1 font-inter text-[11px] font-bold tracking-[0.05em] uppercase text-graphite">
                  {c.label}
                </span>
                <h3 className="mt-5 text-heading font-bold font-cal text-graphite">{c.title}</h3>
                <p className="mt-3 text-body text-slate leading-relaxed">{c.body}</p>
                <ul className="mt-5 space-y-2.5">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 font-inter text-body-sm font-medium text-graphite">
                      <Check className="h-4 w-4 text-action-blue shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
              </div>

              {c.link && (
                <div className="mt-6 pt-4 border-t border-silver/50">
                  <a
                    href={c.link}
                    target={c.link.startsWith("http") ? "_blank" : undefined}
                    rel={c.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 font-inter text-[13px] font-bold text-action-blue hover:underline"
                  >
                    <span>{c.linkText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center">
              <AnimatedCasePipeline
                steps={c.steps}
                badgeText={c.pipelineBadge}
                latency={c.latency}
              />
            </div>
          </article>
        </Reveal>
      ))}
    </section>
  );
}

const QUOTE_METAS = [
  {
    avatar: "/avatars/dana-reyes.jpg",
    tagColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
  },
  {
    avatar: "/avatars/marcus-lin.jpg",
    tagColor: "bg-blue-100 text-blue-800 border-blue-300",
  },
  {
    avatar: "/avatars/priya-raman.jpg",
    tagColor: "bg-amber-100 text-amber-800 border-amber-300",
  },
];

export function Quotes() {
  const { t } = useTranslation();

  const quotes = t.quotes.items.map((item, idx) => ({
    ...item,
    ...(QUOTE_METAS[idx] || QUOTE_METAS[0]),
  }));

  return (
    <section className="py-16 md:py-24">
      <div className="container-page mb-8 max-w-xl">
        <SectionLabel>{t.quotes.sectionLabel}</SectionLabel>
        <h2 className="mt-4 text-[28px] leading-[1.1] tracking-tight text-graphite sm:text-[36px] md:text-heading font-bold font-cal">
          {t.quotes.title}
        </h2>
      </div>

      <div className="container-page grid gap-6 md:grid-cols-3">
        {quotes.map((q, i) => (
          <Reveal key={q.n} delay={i * 80}>
            <figure className="card-surface h-full p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-silver/80 bg-gradient-to-b from-white via-white to-paper/30">
              <div>
                {/* Rating stars & product badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star key={starIdx} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className={`rounded-md px-2 py-0.5 text-[9px] font-bold border uppercase tracking-wider ${q.tagColor}`}>
                    {q.product}
                  </span>
                </div>

                {/* Quote text */}
                <blockquote className="text-[15px] text-graphite leading-relaxed font-normal">
                  "{q.q}"
                </blockquote>
              </div>

              {/* Author info with avatar */}
              <div className="mt-8 pt-5 border-t border-silver/60 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <img
                    src={q.avatar}
                    alt={q.n}
                    className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-silver/80 shadow-xs"
                    loading="lazy"
                  />
                  <figcaption className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="font-cal font-bold text-graphite text-[15px] truncate">{q.n}</p>
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    </div>
                    <p className="font-inter text-caption text-slate truncate">
                      {q.r} · <span className="font-semibold text-graphite">{q.c}</span>
                    </p>
                  </figcaption>
                </div>
              </div>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Faq() {
  const { t } = useTranslation();

  return (
    <section id="faq" className="container-page py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <SectionLabel>{t.faq.sectionLabel}</SectionLabel>
          <h2 className="mt-4 text-[28px] leading-[1.1] tracking-[0.4px] text-graphite sm:text-[36px] md:text-heading-lg font-bold font-cal">
            {t.faq.titlePart1}
            <br />
            {t.faq.titlePart2}
          </h2>
          <p className="mt-4 text-body text-slate max-w-sm">
            {t.faq.description}
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center gap-1.5 text-body-sm text-action-blue font-bold hover:underline"
          >
            <span>{t.faq.contactUs}</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="space-y-3">
          {t.faq.items.map(([q, a], i) => (
            <Reveal key={q} delay={i * 60}>
              <details className="card-surface group p-5 sm:p-6 transition-all duration-300 hover:border-slate-300 hover:shadow-md open:border-slate-300 open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-cal text-[16px] sm:text-heading-sm font-bold text-graphite select-none [&::-webkit-details-marker]:hidden">
                  <span>{q}</span>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper border border-silver/80 text-stone group-hover:text-graphite group-hover:border-stone/40 group-open:bg-graphite group-open:text-white group-open:border-graphite transition-all duration-300">
                    <ChevronDown className="h-4 w-4 transition-transform duration-300 group-open:rotate-180" />
                  </div>
                </summary>
                <div className="mt-3.5 pt-3.5 border-t border-silver/50 text-body text-slate leading-relaxed">
                  <p>{a}</p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  const { t } = useTranslation();

  return (
    <section id="cta" className="container-page pb-24">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-zinc-900 via-slate-900 to-[#153E6E] border border-zinc-800 px-6 py-16 text-center shadow-2xl sm:px-10 sm:py-20 text-white">
        <div className="pointer-events-none absolute inset-0 bg-radial from-emerald-500/10 via-transparent to-transparent" />
        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <span className="inline-block rounded-full bg-emerald-500/20 border border-emerald-400/30 px-3.5 py-1 font-inter text-[11px] font-semibold tracking-wider text-emerald-300 uppercase">
              {t.cta.copilotBadge}
            </span>
            <span className="inline-block rounded-full bg-blue-500/20 border border-blue-400/30 px-3.5 py-1 font-inter text-[11px] font-semibold tracking-wider text-blue-300 uppercase">
              {t.cta.immigrationBadge}
            </span>
          </div>
          <h2 className="mx-auto max-w-2xl text-[28px] leading-[1.1] tracking-tight text-white sm:text-[36px] md:text-heading-lg font-bold font-cal">
            {t.cta.titlePart1}
            <br className="hidden sm:inline" />
            {t.cta.titlePart2}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-body text-slate-300 leading-relaxed">
            {t.cta.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://ai.noruvalabs.com/en"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill bg-emerald-500 text-zinc-950 hover:bg-emerald-400 font-bold text-[14px] sm:text-[15px] px-5 py-2.5 sm:px-6 sm:py-3 shadow-lg flex items-center gap-1.5"
            >
              <span>{t.cta.tryCopilotBtn}</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="https://visa.noruvalabs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill bg-blue-500 text-white hover:bg-blue-400 font-bold text-[14px] sm:text-[15px] px-5 py-2.5 sm:px-6 sm:py-3 shadow-lg flex items-center gap-1.5"
            >
              <span>{t.systems.items[1].title}</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="https://autonova-website.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill bg-amber-500 text-zinc-950 hover:bg-amber-400 font-bold text-[14px] sm:text-[15px] px-5 py-2.5 sm:px-6 sm:py-3 shadow-lg flex items-center gap-1.5"
            >
              <span>{t.systems.items[4].title}</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <a href="/contact" className="btn-pill bg-white/10 border border-white/20 text-white hover:bg-white/20 font-semibold text-[14px] sm:text-[15px] px-5 py-2.5 sm:px-6 sm:py-3">
              {t.cta.contactBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const FOOTER_LINK_MAP: Record<string, { href: string; external?: boolean }> = {
  // English & Japanese titles mapped to target URLs
  "NoruvaAI Copilot": { href: "https://ai.noruvalabs.com/en", external: true },
  "Torii Immigration": { href: "https://visa.noruvalabs.com/", external: true },
  "Torii 入国管理・ビザ": { href: "https://visa.noruvalabs.com/", external: true },
  "Law Assistant": { href: "/products/law" },
  "法律AIアシスタント": { href: "/products/law" },
  "Learning Assistant": { href: "/products/learning" },
  "学習AIアシスタント": { href: "/products/learning" },
  "Agentic AI Services": { href: "https://autonova-website.vercel.app/", external: true },
  "自律型AIエージェント構築": { href: "https://autonova-website.vercel.app/", external: true },

  // Company
  About: { href: "/about" },
  会社概要: { href: "/about" },
  Careers: { href: "/careers" },
  採用情報: { href: "/careers" },
  Security: { href: "/security" },
  セキュリティ: { href: "/security" },
  Contact: { href: "/contact" },
  お問い合わせ: { href: "/contact" },

  // Resources
  Docs: { href: "/docs" },
  ドキュメント: { href: "/docs" },
  Blog: { href: "/blog" },
  ブログ: { href: "/blog" },
  Changelog: { href: "/changelog" },
  更新履歴: { href: "/changelog" },
  Status: { href: "/status" },
  稼働状況: { href: "/status" },
  Privacy: { href: "/privacy" },
  プライバシーポリシー: { href: "/privacy" },
};

const SOCIAL_LINKS = [
  {
    name: "X (Twitter)",
    href: "https://x.com/labsnoruva",
    icon: () => (
      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61592682184241&_rdc=1&_rdr#",
    icon: () => (
      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/noruvalabs1/",
    icon: () => (
      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@NoruvaLabs-Jpn",
    icon: () => (
      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@noruvalabs",
    icon: () => (
      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-silver">
      <div className="container-page grid gap-8 py-10 sm:grid-cols-2 md:grid-cols-[1.2fr_repeat(3,0.6fr)] md:gap-10 md:py-14">
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Noruva Labs" className="h-10 w-auto" />
            <span className="font-cal text-heading-sm text-graphite font-bold">Noruva Labs</span>
          </div>
          <p className="mt-3 max-w-xs text-body-sm text-slate leading-relaxed">
            {t.footer.tagline}
            <br />
            <strong className="text-graphite font-semibold">Minato-ku, Tokyo, Japan 105-8511</strong>
          </p>
          <a href={`mailto:${t.footer.supportEmail}`} className="mt-2.5 inline-block font-inter text-caption font-bold text-action-blue hover:underline">
            {t.footer.supportEmail}
          </a>

          {/* Social Media Links */}
          <div className="mt-5">
            <p className="font-inter text-[11px] font-bold text-stone uppercase tracking-wider mb-2.5">{t.footer.followUs}</p>
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-silver bg-white text-slate hover:text-graphite hover:border-graphite/50 hover:bg-silver/20 transition-all shadow-2xs"
                  title={s.name}
                  aria-label={s.name}
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
        {t.footer.cols.map((col) => (
          <div key={col.title}>
            <p className="font-inter text-caption tracking-[0.08em] text-stone uppercase">{col.title}</p>
            <ul className="mt-3 space-y-2">
              {col.links.map((linkName) => {
                const linkInfo = FOOTER_LINK_MAP[linkName];
                return (
                  <li key={linkName}>
                    <a
                      href={linkInfo ? linkInfo.href : "#top"}
                      target={linkInfo?.external ? "_blank" : undefined}
                      rel={linkInfo?.external ? "noopener noreferrer" : undefined}
                      className="text-body-sm text-slate hover:text-graphite transition-colors inline-flex items-center gap-1"
                    >
                      <span>{linkName}</span>
                      {linkInfo?.external && <ExternalLink className="h-3 w-3 opacity-50" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="container-page flex flex-col items-center gap-3 border-t border-silver py-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <p className="font-inter text-caption text-stone">{t.footer.copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-[12px] text-stone">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-graphite transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
        <p className="font-inter text-caption text-stone">{t.footer.certifications}</p>
      </div>
    </footer>
  );
}
