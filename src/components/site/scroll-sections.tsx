import { useState, useRef, useEffect } from "react";
import { useSectionProgress } from "@/hooks/use-scroll-motion";
import { SectionLabel } from "./reveal";
import { Video, Plane, Gavel, GraduationCap, Cpu, Zap, CheckCircle2, ShieldCheck, FileText, Layers, ExternalLink, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "../../lib/i18n/use-translation";

const SYSTEM_STYLES = [
  {
    statusType: "live",
    cardBg: "bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/60 border-emerald-200 shadow-emerald-500/5",
    accentColor: "text-emerald-600",
    link: "https://ai.noruvalabs.com/en",
  },
  {
    statusType: "live",
    cardBg: "bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/60 border-blue-200 shadow-blue-500/5",
    accentColor: "text-blue-600",
    link: "https://visa.noruvalabs.com/",
  },
  {
    statusType: "soon",
    cardBg: "bg-gradient-to-br from-slate-100/90 via-white to-indigo-50/60 border-slate-300 shadow-slate-500/5",
    accentColor: "text-[#153E6E]",
    link: "/products/law",
  },
  {
    statusType: "soon",
    cardBg: "bg-gradient-to-br from-purple-50/90 via-white to-fuchsia-50/60 border-purple-200 shadow-purple-500/5",
    accentColor: "text-purple-600",
    link: "/products/learning",
  },
  {
    statusType: "available",
    cardBg: "bg-gradient-to-br from-amber-50/90 via-white to-orange-50/60 border-amber-200 shadow-amber-500/5",
    accentColor: "text-amber-600",
    link: "https://autonova-website.vercel.app/",
  },
];

const RAIL_STYLES = [
  {
    icon: Video,
    iconColor: "text-emerald-700 bg-emerald-100 border-emerald-300",
    tagColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    cardBg: "bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/60 border-emerald-300/80 hover:border-emerald-500 shadow-emerald-500/5",
    link: "https://ai.noruvalabs.com/en",
  },
  {
    icon: Zap,
    iconColor: "text-emerald-700 bg-emerald-100 border-emerald-300",
    tagColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    cardBg: "bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/60 border-emerald-300/80 hover:border-emerald-500 shadow-emerald-500/5",
    link: "https://ai.noruvalabs.com/en",
  },
  {
    icon: Plane,
    iconColor: "text-blue-700 bg-blue-100 border-blue-300",
    tagColor: "bg-blue-100 text-blue-800 border-blue-300",
    cardBg: "bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/60 border-blue-300/80 hover:border-blue-500 shadow-blue-500/5",
    link: "https://visa.noruvalabs.com/",
  },
  {
    icon: FileText,
    iconColor: "text-blue-700 bg-blue-100 border-blue-300",
    tagColor: "bg-blue-100 text-blue-800 border-blue-300",
    cardBg: "bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/60 border-blue-300/80 hover:border-blue-500 shadow-blue-500/5",
    link: "https://visa.noruvalabs.com/",
  },
  {
    icon: Gavel,
    iconColor: "text-[#153E6E] bg-slate-100 border-slate-300",
    tagColor: "bg-slate-100 text-slate-800 border-slate-300",
    cardBg: "bg-gradient-to-br from-slate-100/90 via-white to-indigo-50/60 border-slate-300 hover:border-slate-500 shadow-slate-500/5",
    link: "/products/law",
  },
  {
    icon: ShieldCheck,
    iconColor: "text-[#153E6E] bg-slate-100 border-slate-300",
    tagColor: "bg-slate-100 text-slate-800 border-slate-300",
    cardBg: "bg-gradient-to-br from-slate-100/90 via-white to-indigo-50/60 border-slate-300 hover:border-slate-500 shadow-slate-500/5",
    link: "/products/law",
  },
  {
    icon: GraduationCap,
    iconColor: "text-purple-700 bg-purple-100 border-purple-300",
    tagColor: "bg-purple-100 text-purple-800 border-purple-300",
    cardBg: "bg-gradient-to-br from-purple-50/90 via-white to-fuchsia-50/60 border-purple-300/80 hover:border-purple-500 shadow-purple-500/5",
    link: "/products/learning",
  },
  {
    icon: Layers,
    iconColor: "text-purple-700 bg-purple-100 border-purple-300",
    tagColor: "bg-purple-100 text-purple-800 border-purple-300",
    cardBg: "bg-gradient-to-br from-purple-50/90 via-white to-fuchsia-50/60 border-purple-300/80 hover:border-purple-500 shadow-purple-500/5",
    link: "/products/learning",
  },
  {
    icon: Cpu,
    iconColor: "text-amber-700 bg-amber-100 border-amber-300",
    tagColor: "bg-amber-100 text-amber-800 border-amber-300",
    cardBg: "bg-gradient-to-br from-amber-50/90 via-white to-orange-50/60 border-amber-300/80 hover:border-amber-500 shadow-amber-500/5",
    link: "https://autonova-website.vercel.app/",
  },
  {
    icon: CheckCircle2,
    iconColor: "text-amber-700 bg-amber-100 border-amber-300",
    tagColor: "bg-amber-100 text-amber-800 border-amber-300",
    cardBg: "bg-gradient-to-br from-amber-50/90 via-white to-orange-50/60 border-amber-300/80 hover:border-amber-500 shadow-amber-500/5",
    link: "https://autonova-website.vercel.app/",
  },
];

/** Scroll-jacked section: the panel is pinned while steps advance with scroll, with interactive click & navigation controls. */
export function ScrollStory() {
  const { t } = useTranslation();
  const { ref, progress } = useSectionProgress<HTMLDivElement>();
  const [activeStep, setActiveStep] = useState(0);
  const isManualRef = useRef(false);
  const manualTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const steps = t.systems.items.map((item, idx) => {
    const style = SYSTEM_STYLES[idx] || SYSTEM_STYLES[0];
    let statusText = t.systems.comingSoonTag;
    let statusColor = "bg-slate-100 text-slate-800 border-slate-300";

    if (style.statusType === "live") {
      statusText = t.systems.liveTag;
      statusColor = "bg-emerald-100 text-emerald-800 border-emerald-300";
    } else if (style.statusType === "available") {
      statusText = t.systems.availableTag;
      statusColor = "bg-amber-100 text-amber-800 border-amber-300";
    }

    return {
      ...item,
      ...style,
      status: statusText,
      statusColor,
    };
  });

  // Sync scroll progress to activeStep when not in manual click lock
  const scrollIndex = Math.min(steps.length - 1, Math.max(0, Math.floor(progress * steps.length * 0.999)));

  useEffect(() => {
    if (!isManualRef.current) {
      setActiveStep(scrollIndex);
    }
  }, [scrollIndex]);

  const selectStep = (newIndex: number) => {
    const clamped = Math.max(0, Math.min(steps.length - 1, newIndex));
    setActiveStep(clamped);
    isManualRef.current = true;
    if (manualTimerRef.current) clearTimeout(manualTimerRef.current);

    // Smooth scroll the page to sync scroll position
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const currentScrollY = window.scrollY;
      const sectionTop = currentScrollY + rect.top;
      const total = rect.height - window.innerHeight;
      if (total > 0) {
        const targetProgress = (clamped + 0.35) / steps.length;
        const targetY = sectionTop + targetProgress * total;
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }
    }

    manualTimerRef.current = setTimeout(() => {
      isManualRef.current = false;
    }, 700);
  };

  return (
    <section id="platform" ref={ref} className="relative" style={{ minHeight: "260vh" }}>
      <div className="sticky top-0 flex min-h-screen w-screen max-w-full items-center overflow-hidden py-12">
        <div className="container-page w-full min-w-0">
          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel>{t.systems.sectionLabel}</SectionLabel>
              <h2 className="mt-4 text-[28px] leading-[1.1] tracking-[0.4px] text-graphite sm:text-[36px] md:text-heading-lg font-bold font-cal">
                {t.systems.titlePart1}
                <br />
                {t.systems.titlePart2}
              </h2>
              <p className="mt-4 max-w-sm text-body text-slate">
                {t.systems.description}
              </p>

              <ol className="mt-8 space-y-2.5">
                {steps.map((s, i) => {
                  const isCurrent = i === activeStep;
                  return (
                    <li key={s.n} className="flex items-center gap-2 sm:gap-3">
                      <button
                        type="button"
                        onClick={() => selectStep(i)}
                        className={`group flex items-center gap-3 rounded-lg px-2.5 py-1.5 text-left transition-all duration-200 cursor-pointer w-full hover:bg-silver/40 ${
                          isCurrent ? "bg-silver/60 font-bold" : "text-slate"
                        }`}
                        aria-label={`View ${s.title}`}
                      >
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md font-inter text-caption transition-colors duration-200 font-bold ${
                            isCurrent
                              ? "bg-graphite text-white shadow-xs"
                              : i < activeStep
                              ? "bg-emerald-100 text-emerald-800 font-bold"
                              : "bg-silver/80 text-stone group-hover:bg-silver"
                          }`}
                        >
                          {s.n}
                        </span>

                        <span
                          className={`font-inter text-body-sm transition-colors duration-200 flex-1 ${
                            isCurrent ? "text-graphite font-bold" : "text-slate group-hover:text-graphite"
                          }`}
                        >
                          {s.title}
                        </span>

                        <span
                          className={`text-[9px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider shrink-0 ${s.statusColor}`}
                        >
                          {s.status}
                        </span>
                      </button>

                      {s.link && (
                        <a
                          href={s.link}
                          target={s.link.startsWith("http") ? "_blank" : undefined}
                          rel={s.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-stone hover:text-graphite p-1.5 transition-colors"
                          title={`Open ${s.title}`}
                          aria-label={`Open ${s.title}`}
                        >
                          <ExternalLink className="h-3.5 w-3.5 opacity-60 hover:opacity-100" />
                        </a>
                      )}
                    </li>
                  );
                })}
              </ol>

              {/* Progress and controls */}
              <div className="mt-8 flex items-center gap-4">
                <div className="h-1.5 flex-1 rounded-full bg-silver/60 overflow-hidden">
                  <div
                    className="h-full bg-graphite transition-[width] duration-200 rounded-full"
                    style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  />
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={() => selectStep(activeStep - 1)}
                    disabled={activeStep === 0}
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-silver bg-white text-graphite hover:bg-silver/40 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    aria-label="Previous system"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => selectStep(activeStep + 1)}
                    disabled={activeStep === steps.length - 1}
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-silver bg-white text-graphite hover:bg-silver/40 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    aria-label="Next system"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="relative min-h-[400px]">
              {steps.map((s, i) => {
                const isCurrent = i === activeStep;
                return (
                  <article
                    key={s.n}
                    className={`card-surface absolute inset-x-0 top-0 p-6 sm:p-8 shadow-lg transition-all duration-300 ${s.cardBg}`}
                    style={{
                      opacity: isCurrent ? 1 : 0,
                      transform: isCurrent
                        ? "translateY(0) scale(1)"
                        : `translate3d(0, ${i < activeStep ? -20 : 20}px, 0) scale(0.97)`,
                      pointerEvents: isCurrent ? "auto" : "none",
                    }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-caption text-stone">{s.n} / 05</span>
                      <span className={`rounded-md px-2.5 py-1 text-[10px] font-bold border uppercase tracking-wider ${s.statusColor}`}>
                        {s.status}
                      </span>
                    </div>

                    <h3 className="mt-4 text-heading sm:text-heading-lg text-graphite font-bold font-cal">
                      {s.link ? (
                        <a
                          href={s.link}
                          target={s.link.startsWith("http") ? "_blank" : undefined}
                          rel={s.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="hover:underline inline-flex items-center gap-2 group"
                        >
                          <span>{s.title}</span>
                          {s.link.startsWith("http") && (
                            <ExternalLink className="h-4 w-4 text-stone group-hover:text-graphite transition-colors" />
                          )}
                        </a>
                      ) : (
                        s.title
                      )}
                    </h3>
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
                          <span>{s.statusType === "live" ? t.systems.tryLiveBtn : s.statusType === "available" ? t.systems.exploreBtn : t.systems.viewDetailsBtn}</span>
                          <span>→</span>
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Continuous right-to-left capability rail. */
export function HorizontalRail() {
  const { t } = useTranslation();
  const [isPaused, setIsPaused] = useState(false);

  const railCards = t.rail.cards.map((card, idx) => {
    const style = RAIL_STYLES[idx] || RAIL_STYLES[0];
    return {
      ...card,
      ...style,
    };
  });

  return (
    <section id="agents" className="relative py-16 md:py-24 overflow-hidden bg-paper/50">
      <div className="container-page mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <SectionLabel>{t.rail.sectionLabel}</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-[28px] leading-[1.1] tracking-tight text-graphite sm:text-[36px] md:text-heading-lg font-bold font-cal">
            {t.rail.title}
          </h2>
          <p className="mt-2 text-body text-slate">
            {t.rail.description}
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-end shrink-0">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-silver bg-white px-3 py-1 font-inter text-[11px] font-semibold text-graphite shadow-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            {t.rail.statusBadge}
          </span>
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="btn-pill btn-ghost px-3 py-1.5 text-[12px] font-semibold flex items-center gap-1.5 border border-silver bg-white hover:bg-silver/40 transition-colors"
            title={isPaused ? t.rail.resumeBtn : t.rail.pauseBtn}
            aria-label={isPaused ? t.rail.resumeBtn : t.rail.pauseBtn}
          >
            {isPaused ? <Play className="h-3.5 w-3.5 text-emerald-600" /> : <Pause className="h-3.5 w-3.5 text-slate" />}
            <span>{isPaused ? t.rail.resumeBtn : t.rail.pauseBtn}</span>
          </button>
        </div>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_3%,#000_97%,transparent)]">
        <div
          className={`flex gap-6 w-max animate-marquee-slow py-4 px-6 ${isPaused ? "marquee-paused" : ""}`}
        >
          {[...railCards, ...railCards].map((r, idx) => (
            <article
              key={`${r.title}-${idx}`}
              className={`card-surface w-[300px] shrink-0 p-6 sm:w-[350px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between ${r.cardBg}`}
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

                <p className="mt-4 font-mono text-[10px] font-bold text-stone uppercase tracking-wider">
                  {r.link ? (
                    <a
                      href={r.link}
                      target={r.link.startsWith("http") ? "_blank" : undefined}
                      rel={r.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="hover:underline hover:text-graphite inline-flex items-center gap-1"
                    >
                      <span>{r.product}</span>
                      <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                    </a>
                  ) : (
                    r.product
                  )}{" "}
                  · {r.n}
                </p>
                <h3 className="mt-1 text-heading-sm font-bold font-cal text-graphite">{r.title}</h3>
                <p className="mt-2.5 text-body-sm text-slate leading-relaxed">{r.body}</p>
              </div>

              <div className="mt-6 border-t border-silver/60 pt-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 font-inter text-[11px] font-bold text-graphite">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  {r.badge}
                </span>
                <span className="font-inter text-caption text-stone font-semibold">{t.rail.stepPrefix} {r.n} / 10</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
