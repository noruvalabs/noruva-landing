import { useState } from "react";
import { ChevronDown, ChevronRight, Video, Plane, Gavel, GraduationCap, Cpu, Menu, X } from "lucide-react";
import { useTranslation } from "../../lib/i18n/use-translation";
import { LanguageSwitcher, MobileLanguageSelector } from "./language-switcher";

export function Header() {
  const { t } = useTranslation();
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const PRODUCTS = [
    {
      key: "copilot",
      label: "NoruvaAI Copilot",
      href: "https://ai.noruvalabs.com/en",
      external: true,
      icon: Video,
      body: t.nav.productsDescription.copilot,
      badge: t.nav.liveApp,
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      key: "torii",
      label: "Torii Immigration",
      href: "https://visa.noruvalabs.com/",
      external: true,
      icon: Plane,
      body: t.nav.productsDescription.torii,
      badge: t.nav.liveApp,
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      key: "services",
      label: "Agentic AI Services",
      href: "https://autonova-website.vercel.app/",
      external: true,
      icon: Cpu,
      body: t.nav.productsDescription.services,
      badge: t.nav.available,
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      key: "law",
      label: "Law Assistant",
      href: "/products/law",
      external: false,
      icon: Gavel,
      body: t.nav.productsDescription.law,
      badge: t.nav.soon,
      badgeColor: "bg-paper text-stone border-silver",
    },
    {
      key: "learning",
      label: "Learning Assistant",
      href: "/products/learning",
      external: false,
      icon: GraduationCap,
      body: t.nav.productsDescription.learning,
      badge: t.nav.soon,
      badgeColor: "bg-paper text-stone border-silver",
    },
  ];

  const NAV = [
    { key: "products", label: t.nav.products, href: "#platform", hasMenu: true },
    { key: "capabilities", label: t.nav.capabilities, href: "#agents" },
    { key: "services", label: t.nav.services, href: "#runtime" },
    { key: "blog", label: t.nav.blog, href: "/blog" },
    { key: "contact", label: t.nav.contact, href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="contained-nav flex h-[52px] items-center justify-between px-3 sm:px-5">
        <a href="/" className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ring)]">
          <img src="/logo.svg" alt="Noruva Labs" className="h-10 w-auto" />
          <span className="font-cal text-[18px] font-semibold text-graphite tracking-tight">
            Noruva Labs
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <div
              key={item.key}
              className="relative"
              onMouseEnter={() => item.hasMenu && setDesktopOpen(true)}
              onMouseLeave={() => item.hasMenu && setDesktopOpen(false)}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 rounded-md px-3 py-1.5 text-[13px] font-medium text-slate transition-colors hover:text-graphite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ring)]"
              >
                {item.label}
                {item.hasMenu && <ChevronDown className="h-3.5 w-3.5 opacity-50" />}
              </a>
              {item.hasMenu && desktopOpen && (
                <div className="absolute top-full left-0 mt-1 w-[340px] rounded-xl border border-silver bg-white/95 p-2 backdrop-blur-xl shadow-xl">
                  {PRODUCTS.map((p) => (
                    <a
                      key={p.key}
                      href={p.href}
                      target={p.external ? "_blank" : undefined}
                      rel={p.external ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-silver/40"
                    >
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-silver/60">
                        <p.icon className="h-4 w-4 text-action-blue" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <p className="text-[13px] font-semibold text-graphite">{p.label}</p>
                          <span className={`rounded px-1.5 py-0.5 text-[9px] font-bold border uppercase tracking-wider ${p.badgeColor}`}>
                            {p.badge}
                          </span>
                        </div>
                        <p className="text-[12px] text-slate mt-0.5">{p.body}</p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop right action buttons & Language Switcher */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <LanguageSwitcher />
          <a
            href="https://ai.noruvalabs.com/en"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-graphite px-4 py-1.5 text-[13px] font-bold text-white transition-opacity hover:opacity-90 shadow-xs flex items-center gap-1.5"
          >
            <span>{t.nav.tryLive}</span>
          </a>
        </div>

        {/* Mobile controls: switcher + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            className="flex items-center justify-center rounded-md p-2 text-slate transition-colors hover:text-graphite"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="contained-nav mt-2 px-4 py-4 lg:hidden">
          {/* Mobile Language Selector inside drawer */}
          <div className="mb-3 pb-3 border-b border-silver/50">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate/70 mb-2">Language / 言語</p>
            <MobileLanguageSelector />
          </div>

          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <div key={item.key}>
                {item.hasMenu ? (
                  <>
                    <button
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-[14px] font-medium text-slate transition-colors hover:text-graphite"
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    >
                      {item.label}
                      <ChevronRight className={`h-4 w-4 transition-transform ${mobileProductsOpen ? "rotate-90" : ""}`} />
                    </button>
                    {mobileProductsOpen && (
                      <div className="ml-3 mt-1 space-y-1 border-l border-silver/30 pl-3">
                        {PRODUCTS.map((p) => (
                          <a
                            key={p.key}
                            href={p.href}
                            target={p.external ? "_blank" : undefined}
                            rel={p.external ? "noopener noreferrer" : undefined}
                            className="flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-silver/20"
                            onClick={() => setMobileOpen(false)}
                          >
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-silver/50">
                              <p.icon className="h-3.5 w-3.5 text-action-blue" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-1">
                                <p className="text-[13px] font-medium text-graphite">{p.label}</p>
                                <span className={`rounded px-1.5 py-0.5 text-[9px] font-bold border uppercase tracking-wider ${p.badgeColor}`}>
                                  {p.badge}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate">{p.body}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-[14px] font-medium text-slate transition-colors hover:text-graphite"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>
          {/* Mobile action CTA */}
          <div className="mt-3 pt-3 border-t border-silver/50">
            <a
              href="https://ai.noruvalabs.com/en"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill w-full justify-center bg-graphite text-white font-bold text-[14px] py-2.5 rounded-md shadow-sm"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.tryLive} →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
