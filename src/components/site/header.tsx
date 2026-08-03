import { useEffect, useState } from "react";
import { ChevronDown, ArrowRight, UserCheck, Plane, Gavel } from "lucide-react";

const PRODUCTS = [
  { label: "Interview Assistant", href: "/products/interview", icon: UserCheck, body: "Structured hiring loops" },
  { label: "Immigration Assistant", href: "/products/immigration", icon: Plane, body: "Route guidance & checklists" },
  { label: "Law Assistant", href: "/products/law", icon: Gavel, body: "Cited research & drafting" },
];

const NAV = [
  { label: "Products", href: "#platform" },
  { label: "Capabilities", href: "#agents" },
  { label: "Services", href: "#runtime" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="contained-nav flex h-[52px] items-center justify-between px-5">
        <a href="/" className="flex items-center gap-2.5">
          <span className="font-cal text-[18px] font-semibold text-graphite tracking-tight">
            Noruva Labs
          </span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.label === "Products" && setProductsOpen(true)}
              onMouseLeave={() => item.label === "Products" && setProductsOpen(false)}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-[13px] font-medium text-slate transition-colors hover:text-graphite"
              >
                {item.label}
                {item.label === "Products" && <ChevronDown className="h-3.5 w-3.5 opacity-50" />}
              </a>
              {item.label === "Products" && productsOpen && (
                <div className="absolute top-full left-0 mt-1 w-[320px] rounded-xl border border-silver/40 bg-[#0d0820]/95 p-2 backdrop-blur-xl shadow-2xl">
                  {PRODUCTS.map((p) => (
                    <a
                      key={p.label}
                      href={p.href}
                      className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-silver/20"
                    >
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-silver/50">
                        <p.icon className="h-4 w-4 text-action-blue" />
                      </div>
                      <div>
                        <p className="text-[13px] font-medium text-graphite">{p.label}</p>
                        <p className="text-[12px] text-slate">{p.body}</p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#faq"
            className="hidden text-[13px] font-medium text-slate transition-colors hover:text-graphite sm:inline"
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="flex items-center gap-1.5 rounded-full border border-silver/60 bg-transparent px-4 py-1.5 text-[13px] font-medium text-graphite transition-all hover:bg-silver/30"
          >
            Get started
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
