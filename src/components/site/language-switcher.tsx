import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { useTranslation } from "../../lib/i18n/use-translation";
import type { Language } from "../../lib/i18n/translations";

export function UsaFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={`inline-block rounded-xs shadow-xs object-cover border border-slate-300/60 shrink-0 ${className}`}
      aria-hidden="true"
    >
      <g fillRule="evenodd">
        <path fill="#bd3d44" d="M0 0h640v480H0z" />
        <path stroke="#fff" strokeWidth="37" d="M0 55.4h640M0 129.2h640M0 203h640M0 277h640M0 350.8h640M0 424.6h640" />
        <path fill="#192f5d" d="M0 0h256v258.5H0z" />
        {/* Crisp star cluster pattern */}
        <g fill="#fff">
          <circle cx="32" cy="24" r="7" />
          <circle cx="85" cy="24" r="7" />
          <circle cx="138" cy="24" r="7" />
          <circle cx="191" cy="24" r="7" />
          <circle cx="224" cy="24" r="7" />

          <circle cx="58" cy="50" r="7" />
          <circle cx="111" cy="50" r="7" />
          <circle cx="164" cy="50" r="7" />
          <circle cx="217" cy="50" r="7" />

          <circle cx="32" cy="76" r="7" />
          <circle cx="85" cy="76" r="7" />
          <circle cx="138" cy="76" r="7" />
          <circle cx="191" cy="76" r="7" />
          <circle cx="224" cy="76" r="7" />

          <circle cx="58" cy="102" r="7" />
          <circle cx="111" cy="102" r="7" />
          <circle cx="164" cy="102" r="7" />
          <circle cx="217" cy="102" r="7" />

          <circle cx="32" cy="128" r="7" />
          <circle cx="85" cy="128" r="7" />
          <circle cx="138" cy="128" r="7" />
          <circle cx="191" cy="128" r="7" />
          <circle cx="224" cy="128" r="7" />

          <circle cx="58" cy="154" r="7" />
          <circle cx="111" cy="154" r="7" />
          <circle cx="164" cy="154" r="7" />
          <circle cx="217" cy="154" r="7" />

          <circle cx="32" cy="180" r="7" />
          <circle cx="85" cy="180" r="7" />
          <circle cx="138" cy="180" r="7" />
          <circle cx="191" cy="180" r="7" />
          <circle cx="224" cy="180" r="7" />

          <circle cx="58" cy="206" r="7" />
          <circle cx="111" cy="206" r="7" />
          <circle cx="164" cy="206" r="7" />
          <circle cx="217" cy="206" r="7" />

          <circle cx="32" cy="232" r="7" />
          <circle cx="85" cy="232" r="7" />
          <circle cx="138" cy="232" r="7" />
          <circle cx="191" cy="232" r="7" />
          <circle cx="224" cy="232" r="7" />
        </g>
      </g>
    </svg>
  );
}

export function JapanFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={`inline-block rounded-xs shadow-xs object-cover border border-slate-300/60 shrink-0 ${className}`}
      aria-hidden="true"
    >
      <rect width="640" height="480" fill="#ffffff" />
      <circle cx="320" cy="240" r="144" fill="#bc002d" />
    </svg>
  );
}

const LANGUAGES: { code: Language; label: string; native: string; Flag: typeof UsaFlag }[] = [
  {
    code: "en",
    label: "English",
    native: "USA (English)",
    Flag: UsaFlag,
  },
  {
    code: "ja",
    label: "日本語",
    native: "Japan (日本語)",
    Flag: JapanFlag,
  },
];

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLangObj = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];
  const CurrentFlag = currentLangObj.Flag;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={`relative inline-block text-left ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-2 rounded-lg border border-silver/80 bg-white/80 px-2.5 py-1.5 text-[13px] font-medium text-graphite shadow-xs backdrop-blur-md transition-all hover:bg-white hover:border-slate/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ring)]"
      >
        <CurrentFlag className="w-4.5 h-3" />
        <span className="font-semibold uppercase tracking-wider text-[11px] text-slate-700">
          {currentLangObj.code}
        </span>
        <ChevronDown className={`h-3 w-3 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="absolute right-0 mt-1.5 w-44 origin-top-right rounded-xl border border-silver/90 bg-white/95 p-1.5 shadow-xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate/60 border-b border-silver/50 mb-1">
            Language / 言語
          </div>
          {LANGUAGES.map((item) => {
            const isSelected = item.code === lang;
            const Flag = item.Flag;
            return (
              <button
                key={item.code}
                role="menuitem"
                type="button"
                onClick={() => handleSelect(item.code)}
                className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-[13px] font-medium transition-colors ${
                  isSelected
                    ? "bg-action-blue/10 text-action-blue font-semibold"
                    : "text-graphite hover:bg-silver/40"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Flag className="w-5 h-3.5 shadow-xs" />
                  <span>{item.label}</span>
                </div>
                {isSelected && <Check className="h-3.5 w-3.5 text-action-blue" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function MobileLanguageSelector({ className = "" }: { className?: string }) {
  const { lang, setLanguage } = useTranslation();

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {LANGUAGES.map((item) => {
        const isSelected = item.code === lang;
        const Flag = item.Flag;
        return (
          <button
            key={item.code}
            type="button"
            onClick={() => setLanguage(item.code)}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg border py-2 px-3 text-[13px] font-medium transition-all ${
              isSelected
                ? "border-action-blue bg-action-blue/10 text-action-blue font-semibold shadow-xs"
                : "border-silver bg-white/70 text-slate hover:text-graphite hover:bg-white"
            }`}
          >
            <Flag className="w-4.5 h-3" />
            <span>{item.label}</span>
            {isSelected && <Check className="h-3.5 w-3.5 text-action-blue ml-0.5" />}
          </button>
        );
      })}
    </div>
  );
}
