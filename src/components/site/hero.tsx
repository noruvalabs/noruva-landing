import { useState } from "react";
import { ArrowRight, Check, ExternalLink, Gavel, GraduationCap, Plane, Video, Building2, ShieldCheck, Briefcase, Cpu, Globe2, Scale, Zap } from "lucide-react";
import { useScrollY } from "@/hooks/use-scroll-motion";
import { useTranslation } from "../../lib/i18n/use-translation";

interface ProductDef {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  liveUrl: string | null;
  ctaExternal: boolean;
  type: string;
  badgePulseColor: string;
  statusType: "live" | "soon" | "available";
  platforms?: string[];
  en: {
    name: string;
    headlineLead: string;
    headlineHighlight: string;
    headlineHighlightClass: string;
    badgeText: string;
    tagline: string;
    ctaText: string;
  };
  ja: {
    name: string;
    headlineLead: string;
    headlineHighlight: string;
    headlineHighlightClass: string;
    badgeText: string;
    tagline: string;
    ctaText: string;
  };
}

const PRODUCTS_CONFIG: ProductDef[] = [
  {
    id: "meeting",
    icon: Video,
    liveUrl: "https://ai.noruvalabs.com/en",
    ctaExternal: true,
    type: "meeting-ui",
    badgePulseColor: "bg-emerald-500",
    statusType: "live",
    platforms: ["Google Meet", "Zoom", "Webex", "HackerRank", "LeetCode", "Discord", "Telegram"],
    en: {
      name: "NoruvaAI Copilot",
      headlineLead: "Hear the question.",
      headlineHighlight: "See the answer.",
      headlineHighlightClass: "text-emerald-600 underline decoration-emerald-300/80",
      badgeText: "Real-time AI Copilot is Live",
      tagline: "NoruvaAI listens to your call, transcribes every question the instant it's asked, and hands you the right answer in real time — across interviews, sales calls, and meetings.",
      ctaText: "Try NoruvaAI Free",
    },
    ja: {
      name: "NoruvaAI Copilot",
      headlineLead: "質問を聞き、",
      headlineHighlight: "即座に回答を表示。",
      headlineHighlightClass: "text-emerald-600 underline decoration-emerald-300/80",
      badgeText: "リアルタイムAIコパイロット稼働中",
      tagline: "NoruvaAIは通話中の音声をリアルタイム認識し、質問された瞬間に的確な回答とアクションアイテムを画面に提示します。",
      ctaText: "NoruvaAIを無料で試す",
    },
  },
  {
    id: "immigration",
    icon: Plane,
    liveUrl: "https://visa.noruvalabs.com/",
    ctaExternal: true,
    type: "immigration-ui",
    badgePulseColor: "bg-blue-500",
    statusType: "live",
    en: {
      name: "Torii Immigration",
      headlineLead: "File your visa application",
      headlineHighlight: "correctly.",
      headlineHighlightClass: "text-blue-600 underline decoration-blue-300/80 font-serif italic",
      badgeText: "Torii Immigration Suite is Live",
      tagline: "Torii walks you from 'which forms do I even need?' to a submission-ready packet: branching intake, document checklists, auto-filled forms — for a fraction of a lawyer's fee.",
      ctaText: "Try Torii Visa Live",
    },
    ja: {
      name: "Torii 入国管理・ビザ",
      headlineLead: "ビザ申請書類を、",
      headlineHighlight: "正確・確実に作成。",
      headlineHighlightClass: "text-blue-600 underline decoration-blue-300/80 font-serif italic",
      badgeText: "Torii 入国管理・ビザ スイート稼働中",
      tagline: "「どの書類が必要か」から申請提出準備まで徹底サポート。分岐型ヒアリング、書類チェックリスト、公式書類自動生成を弁護士費用の数分の一で提供。",
      ctaText: "Toriiビザを今すぐ試す",
    },
  },
  {
    id: "law",
    icon: Gavel,
    liveUrl: null,
    ctaExternal: false,
    type: "law-ui",
    badgePulseColor: "bg-[#153E6E]",
    statusType: "soon",
    en: {
      name: "Law Assistant",
      headlineLead: "Research grounded in",
      headlineHighlight: "official precedent.",
      headlineHighlightClass: "text-[#153E6E] underline decoration-[#153E6E]/40",
      badgeText: "Law Assistant Suite",
      tagline: "Search matter files and public legal sources together with paragraph-level citations, clause bank extraction, and precedent-aware drafting.",
      ctaText: "See Law AI Features",
    },
    ja: {
      name: "法律AIアシスタント",
      headlineLead: "判例と公式根拠に基づく、",
      headlineHighlight: "高精度リサーチ＆ドラフト。",
      headlineHighlightClass: "text-[#153E6E] underline decoration-[#153E6E]/40",
      badgeText: "法律AIアシスタント スイート",
      tagline: "案件ファイルと公式法令データを段落単位の出典引用付きで統合検索。契約条項バンク抽出と過去判例に基づく起案を自動化します。",
      ctaText: "法律AIの詳細を見る",
    },
  },
  {
    id: "learning",
    icon: GraduationCap,
    liveUrl: null,
    ctaExternal: false,
    type: "learning-ui",
    badgePulseColor: "bg-purple-500",
    statusType: "soon",
    en: {
      name: "Learning Assistant",
      headlineLead: "Personalized study loops for",
      headlineHighlight: "every student.",
      headlineHighlightClass: "text-purple-600 underline decoration-purple-300/80",
      badgeText: "Learning Assistant Suite",
      tagline: "Turn curriculum materials into interactive study modules, adaptive practice quizzes, and real-time tutoring feedback with syllabus mastery tracking.",
      ctaText: "See Learning AI Features",
    },
    ja: {
      name: "学習AIアシスタント",
      headlineLead: "すべての学習者に合わせた、",
      headlineHighlight: "個別適応型学習ループ。",
      headlineHighlightClass: "text-purple-600 underline decoration-purple-300/80",
      badgeText: "学習AIアシスタント スイート",
      tagline: "シラバスや教材から対話型学習モジュール、適応型演習クイズ、リアルタイムの個別指導フィードバックを瞬時に生成します。",
      ctaText: "学習AIの詳細を見る",
    },
  },
  {
    id: "agents",
    icon: Cpu,
    liveUrl: "https://autonova-website.vercel.app/",
    ctaExternal: true,
    type: "agent-ui",
    badgePulseColor: "bg-amber-500",
    statusType: "available",
    en: {
      name: "Agentic AI Services",
      headlineLead: "Enterprise-grade",
      headlineHighlight: "agentic systems.",
      headlineHighlightClass: "text-amber-600 underline decoration-amber-300/80",
      badgeText: "Custom Agent Engineering",
      tagline: "Beyond our products, we design, build, and deploy custom agentic systems inside your stack with tool integrations, evaluations, and enterprise support.",
      ctaText: "Explore Agentic AI",
    },
    ja: {
      name: "自律型エージェント開発支援",
      headlineLead: "エンタープライズ対応の、",
      headlineHighlight: "自律型マルチエージェント基盤。",
      headlineHighlightClass: "text-amber-600 underline decoration-amber-300/80",
      badgeText: "カスタムAIエージェント構築",
      tagline: "既製プロダクトにとどまらず、お客様の社内基幹システムに組み込む自律型エージェントの要件定義からツール統合・本番運用まで一貫支援。",
      ctaText: "自律型AIサービスを見る",
    },
  },
];

export function Hero() {
  const { lang, t } = useTranslation();
  const y = useScrollY();
  const p = Math.min(y, 900);
  const [activeTab, setActiveTab] = useState(0);

  const rawProduct = PRODUCTS_CONFIG[activeTab]!;
  const localized = rawProduct[lang];

  const getStatusBadge = (statusType: "live" | "soon" | "available") => {
    switch (statusType) {
      case "live":
        return { label: t.systems.liveTag, color: "bg-emerald-50 text-emerald-700 border-emerald-200" };
      case "available":
        return { label: t.systems.availableTag, color: "bg-amber-50 text-amber-700 border-amber-200" };
      case "soon":
      default:
        return { label: t.systems.comingSoonTag, color: "bg-paper text-stone border-silver" };
    }
  };

  const currentBadge = getStatusBadge(rawProduct.statusType);

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 glow-purple" />

      <div className="container-page relative grid items-center gap-10 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:py-20">
        {/* Left Column - Text & CTAs dynamically synced with active tab */}
        <div className="min-w-0 w-full transition-all duration-300" style={{ transform: `translate3d(0, ${p * -0.04}px, 0)` }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-silver bg-white px-3.5 py-1 font-inter text-[11px] font-semibold tracking-[0.05em] uppercase text-graphite shadow-xs">
            <span className={`h-2 w-2 rounded-full ${rawProduct.badgePulseColor} animate-pulse`} />
            {localized.badgeText}
          </span>

          <h1 className="mt-4 text-[28px] sm:text-[38px] md:text-[46px] lg:text-[54px] leading-[1.1] tracking-tight text-graphite font-bold font-cal">
            {localized.headlineLead}
            <br />
            <span className={`${localized.headlineHighlightClass} underline-offset-4 font-extrabold`}>
              {localized.headlineHighlight}
            </span>
          </h1>

          <p className="mt-4 max-w-md text-[15px] sm:text-[17px] md:text-[18px] text-slate leading-relaxed">
            {localized.tagline}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
            <a
              href={rawProduct.liveUrl || (rawProduct.id === "law" ? "/products/law" : "/products/learning")}
              target={rawProduct.ctaExternal ? "_blank" : undefined}
              rel={rawProduct.ctaExternal ? "noopener noreferrer" : undefined}
              className="btn-pill justify-center bg-graphite text-white hover:bg-zinc-800 shadow-md font-bold text-[14px] sm:text-[15px] px-5 py-2.5 rounded-md flex items-center gap-2 group"
            >
              <span>{localized.ctaText}</span>
              {rawProduct.ctaExternal ? (
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 text-emerald-400" />
              ) : (
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              )}
            </a>
            <a href="#platform" className="btn-pill justify-center btn-ghost px-5 py-2.5 text-[14px] sm:text-[15px] font-semibold">
              {lang === "ja" ? "すべての製品一覧を見る" : "See All Products"}
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5 font-inter text-caption text-slate">
            <li className="inline-flex items-center gap-1.5 font-semibold text-graphite">
              <Check className="h-3.5 w-3.5 text-emerald-600" />
              <a href="https://ai.noruvalabs.com/en" target="_blank" rel="noopener noreferrer" className="hover:underline text-emerald-700 inline-flex items-center gap-1">
                <span>Noruva AI Live (ai.noruvalabs.com)</span>
                <ExternalLink className="h-3 w-3 opacity-60" />
              </a>
            </li>
            <li className="inline-flex items-center gap-1.5 font-semibold text-graphite">
              <Check className="h-3.5 w-3.5 text-blue-600" />
              <a href="https://visa.noruvalabs.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700 inline-flex items-center gap-1">
                <span>Torii Immigration Live (visa.noruvalabs.com)</span>
                <ExternalLink className="h-3 w-3 opacity-60" />
              </a>
            </li>
            <li className="inline-flex items-center gap-1.5 font-semibold text-graphite">
              <Check className="h-3.5 w-3.5 text-amber-600" />
              <a href="https://autonova-website.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline text-amber-700 inline-flex items-center gap-1">
                <span>Agentic AI Service</span>
                <ExternalLink className="h-3 w-3 opacity-60" />
              </a>
            </li>
          </ul>
        </div>

        {/* Right Column - Browser Mockup Console Window */}
        <div
          className="relative min-w-0 w-full max-w-full"
          style={{
            transform: `translate3d(0, ${p * -0.08}px, 0) scale(${Math.max(0.97, 1 - p * 0.0001)})`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="card-surface overflow-hidden border-silver shadow-xl max-w-full rounded-xl">
            {/* macOS Browser Chrome Controls */}
            <div className="flex items-center justify-between border-b border-silver bg-paper/90 px-3.5 py-2">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="font-mono text-[10px] font-semibold text-stone bg-white px-3 py-0.5 rounded border border-silver">
                {rawProduct.liveUrl || "noruvalabs.com/products"}
              </span>
              <span className="text-[10px] font-mono text-emerald-600 font-bold">● LIVE</span>
            </div>

            {/* Header Product Selector Tabs */}
            <div className="flex items-center border-b border-silver bg-paper overflow-x-auto p-1.5 gap-1 scrollbar-none max-w-full">
              {PRODUCTS_CONFIG.map((prod, idx) => {
                const badge = getStatusBadge(prod.statusType);
                return (
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
                    <span>{prod[lang].name}</span>
                    <span className={`text-[8px] sm:text-[9px] font-bold px-1.5 py-0.2 rounded border uppercase ${badge.color}`}>
                      {badge.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Render Mockup UI for Active Product */}
            <div className="p-4 sm:p-5 bg-white space-y-4 max-w-full overflow-hidden">
              <div className="flex flex-wrap items-start justify-between gap-2 border-b border-silver/60 pb-3">
                <div>
                  <div className="flex items-center gap-2">
                    {rawProduct.liveUrl ? (
                      <a
                        href={rawProduct.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-cal text-[17px] font-bold text-graphite hover:underline inline-flex items-center gap-1.5"
                      >
                        <span>{localized.name}</span>
                        <ExternalLink className="h-3.5 w-3.5 text-slate opacity-70" />
                      </a>
                    ) : (
                      <span className="font-cal text-[17px] font-bold text-graphite">{localized.name}</span>
                    )}
                    <span className={`rounded px-2 py-0.5 text-[9px] font-bold border uppercase tracking-wider ${currentBadge.color}`}>
                      {currentBadge.label}
                    </span>
                  </div>
                  <p className="font-cal text-[14px] font-bold text-slate mt-0.5">"{localized.headlineLead} {localized.headlineHighlight}"</p>
                </div>

                {rawProduct.liveUrl ? (
                  <a
                    href={rawProduct.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-graphite px-3.5 py-1.5 text-[12px] font-bold text-white shadow-xs hover:opacity-90 transition-opacity shrink-0"
                  >
                    <span>{rawProduct.statusType === "live" ? (lang === "ja" ? "今すぐ試す" : "Try Free") : (lang === "ja" ? "サービス詳細" : "Explore")}</span>
                    <ExternalLink className="h-3.5 w-3.5 text-emerald-400" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-md bg-paper border border-silver px-3 py-1 text-[11px] font-bold text-stone shrink-0">
                    {t.systems.comingSoonTag}
                  </span>
                )}
              </div>

              {/* NoruvaAI Meeting App UI Mockup */}
              {rawProduct.type === "meeting-ui" && (
                <div className="space-y-3 font-inter text-[11px]">
                  {/* Video call frame */}
                  <div className="relative rounded-lg bg-[#0e2a26] p-3.5 text-white overflow-hidden shadow-inner min-h-[140px] flex flex-col justify-between">
                    <div className="flex items-center justify-between font-mono text-[10px] opacity-90">
                      <span className="font-bold">{lang === "ja" ? "NoruvaAI · ライブミーティング中" : "NoruvaAI · Live Call"}</span>
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-white/20 px-1.5 py-0.5 text-[9px] font-bold text-emerald-300">
                          {lang === "ja" ? "回答生成完了" : "Answer ready"}
                        </span>
                        <span className="flex items-center gap-1 text-red-400 font-bold">🔴 REC</span>
                      </div>
                    </div>
                    {/* Interviewer avatar */}
                    <div className="my-3 flex items-center justify-center gap-3">
                      <div className="h-12 w-12 rounded-full border-2 border-emerald-400/80 bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center font-bold text-[14px]">
                        AI
                      </div>
                      <div>
                        <p className="font-bold text-[12px]">{lang === "ja" ? "面接官 / 顧客" : "Interviewer"}</p>
                        <p className="text-[10px] text-emerald-300 font-medium">{lang === "ja" ? "発言中..." : "Speaking..."}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="rounded bg-black/50 px-2 py-0.5 text-[9px]">{lang === "ja" ? "通話相手" : "Interviewer"}</span>
                      <div className="h-8 w-10 rounded border border-white/30 bg-slate/70 flex items-center justify-center text-[9px] font-bold">
                        {lang === "ja" ? "あなた" : "You"}
                      </div>
                    </div>
                  </div>

                  {/* Live Answer Prompt Box */}
                  <div className="rounded-lg bg-emerald-50/70 border border-emerald-200 p-3 text-graphite space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] font-bold text-emerald-800">
                      <span className="inline-flex items-center gap-1">📊 {lang === "ja" ? "検出された質問" : "Question"}</span>
                      <span className="font-mono text-[9px]">claude-opus-4.8 · <span className="text-emerald-600 font-bold">● {t.systems.liveTag}</span></span>
                    </div>
                    <p className="font-semibold text-[11px] text-graphite">
                      {lang === "ja" ? "Q: 「OAuth実装におけるトークン更新プロトコルと再認証の仕組みを説明してください」" : "Q: Walk me through a tradeoff you made under real pressure."}
                    </p>
                    <p className="text-[11px] text-slate leading-snug italic bg-white/80 p-2 rounded border border-emerald-100">
                      {lang === "ja"
                        ? "「RFC 6749に準拠し、/oauth/tokenにてリフレッシュトークンを即時更新。単一利用失効と自動ローテーションによりセキュアなセッション維持を実現しています。」"
                        : "\"At my last role we had to cut scope a week before launch. I framed it as protecting quality over completeness, aligned the team on the key metric, and shipped on time...\""}
                    </p>
                  </div>

                  {/* Platforms marquee */}
                  <div className="flex items-center justify-between text-[9px] font-bold text-stone pt-1 border-t border-silver/50 overflow-x-auto scrollbar-none gap-2">
                    <span className="uppercase text-stone shrink-0">{lang === "ja" ? "対応ツール:" : "Listening on:"}</span>
                    {rawProduct.platforms?.map((p) => (
                      <span key={p} className="rounded bg-paper border border-silver px-2 py-0.5 text-graphite shrink-0">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Torii Immigration App UI Mockup */}
              {rawProduct.type === "immigration-ui" && (
                <div className="space-y-3 font-inter text-[11px] rounded-lg bg-[#0e1726] p-4 text-white">
                  <div className="flex items-center justify-between text-[10px]">
                    <div>
                      <span className="font-mono font-bold text-emerald-400">JP-WORK-2049</span>
                      <span className="ml-2 text-slate-400">{lang === "ja" ? "日本語 ロケール · 実演中" : "EN locale · Live demo"}</span>
                    </div>
                    <span className="rounded bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2 py-0.5 text-[9px]">
                      {lang === "ja" ? "申請データ入力中" : "Intake in progress"}
                    </span>
                  </div>

                  {/* Stepper */}
                  <div className="flex items-center justify-between gap-1 text-[10px] pt-1 text-slate-400 border-b border-white/10 pb-2">
                    <span className="text-blue-400 font-bold">{lang === "ja" ? "問診 ›" : "Intake ›"}</span>
                    <span>{lang === "ja" ? "資格確認 ›" : "Eligibility ›"}</span>
                    <span>{lang === "ja" ? "必要書類 ›" : "Checklist ›"}</span>
                    <span>{lang === "ja" ? "申請書作成 ›" : "Forms ›"}</span>
                    <span>{lang === "ja" ? "最終確認" : "Review"}</span>
                  </div>

                  {/* Question Prompt */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                      {lang === "ja" ? "質問 4 / 12" : "Question 4 of 12"}
                    </span>
                    <p className="font-bold text-[13px] text-white">
                      {lang === "ja" ? "申請する在留資格の種類を選択してください" : "Which visa category are you applying for?"}
                    </p>
                    <div className="rounded-md bg-blue-600 px-3.5 py-2 text-[11px] font-semibold text-white shadow-xs">
                      ✓ {lang === "ja" ? "技術・人文知識・国際業務 (Engineer / Specialist)" : "Engineer / Specialist in Humanities"}
                    </div>
                  </div>

                  <p className="text-[10px] text-slate-400 pt-1">
                    {lang === "ja"
                      ? "Toriiは出入国在留管理庁の公式様式に準拠した提出用書類一式を自動生成します。"
                      : "Torii builds a submission-ready packet with auto-filled government forms and official page citations."}
                  </p>
                </div>
              )}

              {/* Law UI Mockup */}
              {rawProduct.type === "law-ui" && (
                <div className="space-y-2.5 font-inter text-[11px] p-3 rounded-lg bg-paper border border-silver">
                  <div className="flex items-center justify-between font-mono text-[10px] text-stone">
                    <span>{lang === "ja" ? "判例調査クエリ · 契約条項 第14条" : "Research Query · Contract Clause §14"}</span>
                    <span className="text-action-blue font-bold">100% Cited</span>
                  </div>
                  <p className="text-[11px] text-graphite font-semibold">
                    {lang === "ja"
                      ? "要約: 損害賠償上限は直接損害にのみ適用されます [引用: 関連判例 第4条第2項]。"
                      : "Summary: Indemnity cap applies to direct damages only [Ref: Precedent §4.2]."}
                  </p>
                  <div className="rounded bg-white p-2 text-[10px] text-slate border border-silver font-mono">
                    {lang === "ja"
                      ? "「10万件超の過去裁判例・契約書を走査 → 正確な段落引用付きで3つの該当条項を抽出。」"
                      : "\"Searched 100k+ matter files → extracted 3 precedent clauses with paragraph citations.\""}
                  </div>
                </div>
              )}

              {/* Learning UI Mockup */}
              {rawProduct.type === "learning-ui" && (
                <div className="space-y-2.5 font-inter text-[11px] p-3 rounded-lg bg-paper border border-silver">
                  <div className="flex items-center justify-between font-mono text-[10px] text-stone">
                    <span>{lang === "ja" ? "シラバス適応型演習クイズ" : "Syllabus Adaptive Quiz"}</span>
                    <span className="text-emerald-700 font-bold">15k Active Learners</span>
                  </div>
                  <p className="text-[11px] text-graphite font-semibold">
                    {lang === "ja"
                      ? "第3章: ニューラルネットワーク最適化と誤差逆伝播法"
                      : "Module 3: Neural Network Optimization & Backprop"}
                  </p>
                  <div className="rounded bg-white p-2 text-[10px] text-slate border border-silver">
                    {lang === "ja"
                      ? "前回のテスト結果に基づき、弱点領域に特化した5つの適応型練習問題を生成しました。"
                      : "Generated 5 adaptive practice questions tailored to recent quiz performance."}
                  </div>
                </div>
              )}

              {/* Agentic AI UI Mockup */}
              {rawProduct.type === "agent-ui" && (
                <div className="space-y-2.5 font-inter text-[11px] p-3.5 rounded-lg bg-[#111827] text-white border border-amber-400/30">
                  <div className="flex items-center justify-between font-mono text-[10px] text-amber-400">
                    <span>{lang === "ja" ? "Autonova エージェント統合基盤" : "Autonova Agent Orchestration"}</span>
                    <span className="text-emerald-400 font-bold">● Active Cluster</span>
                  </div>
                  <p className="text-[11px] text-white font-semibold">
                    {lang === "ja"
                      ? "マルチエージェント協調エンジン: 外部API連携 & 人間による承認フロー"
                      : "Multi-Agent Workflow Engine: Tool Calling & Human-in-the-Loop Approvals"}
                  </p>
                  <div className="rounded bg-black/40 p-2 text-[10px] text-slate-300 border border-white/10 font-mono">
                    {lang === "ja"
                      ? "「社内ERPおよびCRM連携完了: 要件定義から最短6週間で本番稼働。」"
                      : "\"Integrated with customer ERP & CRM API: 6-week production delivery.\""}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Window Bar */}
            <div className="grid grid-cols-3 border-t border-silver bg-paper divide-x divide-silver text-center">
              <div className="py-2.5 px-2">
                <a href="https://ai.noruvalabs.com/en" target="_blank" rel="noopener noreferrer" className="hover:underline block">
                  <p className="font-cal text-[14px] sm:text-[16px] font-extrabold text-emerald-700">01 Noruva AI</p>
                  <p className="font-inter text-[9px] font-bold text-stone uppercase truncate">ai.noruvalabs.com</p>
                </a>
              </div>
              <div className="py-2.5 px-2">
                <a href="https://visa.noruvalabs.com/" target="_blank" rel="noopener noreferrer" className="hover:underline block">
                  <p className="font-cal text-[14px] sm:text-[16px] font-extrabold text-blue-700">02 Torii Visa</p>
                  <p className="font-inter text-[9px] font-bold text-stone uppercase truncate">visa.noruvalabs.com</p>
                </a>
              </div>
              <div className="py-2.5 px-2">
                <a href="https://autonova-website.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline block">
                  <p className="font-cal text-[14px] sm:text-[16px] font-extrabold text-amber-700">05 Agentic AI</p>
                  <p className="font-inter text-[9px] font-bold text-stone uppercase truncate">autonova app</p>
                </a>
              </div>
            </div>
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
  const { t } = useTranslation();

  return (
    <section className="py-8 bg-paper/40">
      <p className="container-page mb-6 text-center font-inter text-[11px] font-bold tracking-[0.06em] uppercase text-stone">
        {t.hero.trustedBy}
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
