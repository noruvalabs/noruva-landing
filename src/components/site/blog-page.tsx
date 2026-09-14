import { useState } from "react";
import { ArrowRight, Clock, Calendar, CheckCircle2 } from "lucide-react";
import { useTranslation } from "../../lib/i18n/use-translation";
import { ALL_POSTS } from "../../lib/blog-data";

export function BlogPage() {
  const { t } = useTranslation();
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const rawFeatured = ALL_POSTS[0]!;
  const rawPosts = ALL_POSTS.slice(1);

  const getPostContent = (slug: string, fallback: typeof rawFeatured) => {
    const localized = t.blog.posts?.[slug];
    if (localized) {
      return {
        slug,
        title: localized.title,
        body: localized.body,
        tag: localized.tag,
        date: localized.date,
        readTime: localized.readTime,
      };
    }
    return fallback;
  };

  const featured = getPostContent(rawFeatured.slug, rawFeatured);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <main className="relative vertical-lines">
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0 glow-purple" />
        <div className="container-page relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-silver px-3 py-1 font-inter text-caption text-slate uppercase tracking-wider font-bold mb-4">
            {t.blog.badge}
          </span>
          <h1 className="text-[32px] leading-[1.1] tracking-[0.4px] text-graphite sm:text-[42px] md:text-heading-lg lg:text-display font-bold font-cal">
            {t.blog.title}
          </h1>
          <p className="mt-4 max-w-lg text-subheading text-slate leading-relaxed">
            {t.blog.description}
          </p>
        </div>
      </section>

      <div className="section-separator w-full" />

      {/* Featured Article */}
      <section className="container-page py-12 sm:py-20">
        <a href={`/blog/${featured.slug}`} className="group block">
          <article className="card-surface overflow-hidden transition-all duration-300 group-hover:border-slate-400 group-hover:shadow-lg">
            <div className="grid gap-6 p-6 sm:gap-8 sm:p-8 md:grid-cols-[1fr_1.4fr]">
              <div className="flex items-center justify-center rounded-xl bg-silver/40 border border-silver/80 p-10 group-hover:bg-blue-50/50 transition-colors">
                <span className="font-cal text-[64px] font-extrabold text-action-blue/40 group-hover:text-action-blue/70 transition-colors">
                  01
                </span>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <span className="rounded-md bg-silver/60 border border-silver/80 px-2.5 py-0.5 font-inter text-caption font-semibold text-graphite">
                    {featured.tag}
                  </span>
                  <span className="flex items-center gap-1.5 font-inter text-caption text-stone">
                    <Calendar className="h-3.5 w-3.5" /> {featured.date}
                  </span>
                  <span className="flex items-center gap-1.5 font-inter text-caption text-stone">
                    <Clock className="h-3.5 w-3.5" /> {featured.readTime}
                  </span>
                </div>
                <h2 className="mt-4 text-heading text-graphite group-hover:text-action-blue transition-colors md:text-heading-lg font-bold font-cal leading-tight">
                  {featured.title}
                </h2>
                <p className="mt-3 max-w-lg text-body text-slate leading-relaxed">
                  {featured.body}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-body-sm font-semibold text-action-blue group-hover:underline">
                  {t.blog.readArticle} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </article>
        </a>
      </section>

      <div className="section-separator w-full" />

      {/* Articles Grid */}
      <section className="container-page py-12 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rawPosts.map((raw) => {
            const post = getPostContent(raw.slug, raw);
            return (
              <a key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                <article className="card-surface flex h-full flex-col p-6 transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-md group-hover:border-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="rounded-md bg-silver/60 border border-silver/80 px-2.5 py-0.5 font-inter text-caption text-slate font-semibold">
                      {post.tag}
                    </span>
                    <span className="flex items-center gap-1.5 font-inter text-caption text-stone">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-4 text-heading-sm text-graphite group-hover:text-action-blue transition-colors leading-snug font-bold font-cal">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-body-sm text-slate leading-relaxed">
                    {post.body}
                  </p>
                  <div className="mt-5 flex items-center justify-between pt-4 border-t border-silver/60">
                    <span className="font-inter text-caption text-stone">{post.date}</span>
                    <span className="flex items-center gap-1 text-caption font-semibold text-action-blue group-hover:underline">
                      {t.blog.readArticle} <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </article>
              </a>
            );
          })}
        </div>
      </section>

      {/* Newsletter Subscription Card */}
      <section className="container-page pb-16 sm:pb-24">
        <div className="rounded-2xl border border-silver bg-white p-8 text-center shadow-lg sm:p-12 max-w-3xl mx-auto">
          <h2 className="text-heading text-graphite font-bold font-cal">
            {t.blog.newsletterTitle}
          </h2>
          <p className="mt-2 text-body text-slate max-w-md mx-auto">
            {t.blog.newsletterSubtitle}
          </p>
          {subscribed ? (
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-700 animate-in fade-in">
              <CheckCircle2 className="h-4 w-4" />
              <span>{t.blog.newsletterSuccess}</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-6 flex flex-wrap justify-center gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.blog.newsletterPlaceholder}
                className="w-full rounded-lg border border-silver bg-paper px-4 py-2.5 text-body text-graphite outline-none transition-colors focus:border-action-blue focus:ring-2 focus:ring-action-blue/20 sm:w-72"
              />
              <button
                type="submit"
                className="btn-pill bg-graphite text-white hover:bg-zinc-800 font-bold px-6 py-2.5 shadow-xs transition-colors cursor-pointer"
              >
                {t.blog.newsletterBtn}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
