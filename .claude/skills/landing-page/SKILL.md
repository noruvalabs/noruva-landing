---
name: landing-page
description: Use when adding, reordering, or restyling sections on this Astro/React marketing site (index.astro, product pages, blog, contact) — covers the standard high-converting section order, the shared design tokens/utilities, and known pitfalls in this codebase (guide-line breakpoint, card-surface color).
---

# Landing page conventions

This site follows the section order most SaaS/product marketing sites converge on
(Linear, Vercel, Stripe-style). When adding a new page or section, default to this
order unless the user asks for something different:

1. **Header** — fixed, floating "contained" nav bar (`contained-nav`), logo + nav
   links + mobile hamburger. `src/components/site/header.tsx`.
2. **Hero** — one-sentence value prop headline, subhead, two CTAs (primary filled,
   secondary ghost), a visual/product proof element to the side. `hero.tsx` (`Hero`).
3. **Logo marquee** — "trusted by" social proof, infinite scroll strip.
   `hero.tsx` (`LogoMarquee`).
4. **Capabilities / features grid** — short label + heading + card grid (icon,
   title, one-line body). `sections.tsx` (`Capabilities`).
5. **Stats band** — 3-4 numeric proof points in a bordered strip.
   `sections.tsx` (`Stats`).
6. **Use cases / how it works** — one deep-dive block per product/offering,
   alternating image-left/image-right. `sections.tsx` (`UseCases`).
7. **Testimonials** — short quote + name + role, 3-up grid. `sections.tsx` (`Quotes`).
8. **FAQ** — accordion (`<details>`), label + heading on the left, questions on
   the right. `sections.tsx` (`Faq`).
9. **Final CTA banner** — one more conversion push before the footer.
   `sections.tsx` (`FinalCta`).
10. **Footer** — logo + blurb, link columns, legal/compliance line.
    `sections.tsx` (`Footer`).

Reveal-on-scroll (`Reveal` in `reveal.tsx`) wraps most section content; stagger
siblings with `delay={i * 60}` or `delay={i * 80}`.

## Design tokens (`src/styles/global.css`)

- Colors are theme vars under `@theme inline`: `--color-ink`, `--color-action-blue`
  (the one accent — blue), `--color-graphite`/`--color-slate`/`--color-stone` (text
  hierarchy), `--color-silver` (borders/muted fills), `--color-paper`/`--color-card`
  (surface backgrounds). Don't hardcode new hex/rgba colors for surfaces — reuse
  these tokens so new sections don't drift from the palette (this is exactly what
  caused `card-surface` to render purple instead of navy before it was fixed to use
  `rgba(12, 26, 46, 0.7)`, matching `--color-card: #0c1a2e`).
- `card-surface` (`@utility`) is the one card treatment: translucent navy bg, 12px
  radius, border, box-shadow. Every card-like block (feature cards, testimonial
  cards, FAQ items, use-case panels) should use it — don't invent a one-off
  `bg-white/5` or `bg-black/*` card style; it'll look inconsistent next to
  everything else (this is what happened to the `Quotes` cards).
- `container-page` (`@utility`) is the standard content wrapper: `max-width: 1200px`,
  centered, `padding-inline: 24px`. Use it for every section instead of ad-hoc
  padding.
- `.vertical-lines` / `.section-separator` are the decorative fixed guide-rule
  lines flanking the container and the crosshair dividers between sections. Their
  inset math (`max(24px, calc(50% - 600px))`) only produces a real gutter once the
  viewport reaches 1200px content + 2×24px padding = **1248px**. Below that they'd
  sit exactly on top of the content edge, so `.vertical-lines::before/::after` are
  `display: none` by default and only turned on via `@media (min-width: 1248px)`.
  Keep that guard if you touch this rule — don't re-enable the lines unconditionally.
- Buttons: `btn-pill` + one of `btn-ink` (primary, filled) or `btn-ghost` (secondary,
  outlined).

## Adding a new product/offering page

Follow the existing pattern in `src/pages/products/{interview,immigration,law}.astro`:
same `Base` layout, same `<main class="relative vertical-lines">` wrapper, reuse
`Header`/`Footer`, and build the body from the section components above rather than
one-off markup.
