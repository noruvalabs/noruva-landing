import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";
import { useTranslation } from "../../lib/i18n/use-translation";
import { ALL_POSTS, type BlogPost } from "../../lib/blog-data";

export function BlogDetail({ slug }: { slug: string }) {
  const { t } = useTranslation();

  const rawPost = ALL_POSTS.find((p) => p.slug === slug) || ALL_POSTS[0]!;
  const rawOtherPosts = ALL_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  const localized = t.blog.posts?.[slug];

  const post: BlogPost = {
    ...rawPost,
    title: localized?.title || rawPost.title,
    body: localized?.body || rawPost.body,
    tag: localized?.tag || rawPost.tag,
    date: localized?.date || rawPost.date,
    readTime: localized?.readTime || rawPost.readTime,
    authorRole: localized?.authorRole || rawPost.authorRole,
    content: localized?.content || rawPost.content,
  };

  return (
    <main className="relative vertical-lines">
      {/* Article Header */}
      <article className="pt-32 pb-16">
        <div className="container-page max-w-4xl">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 font-inter text-body-sm text-slate transition-colors hover:text-graphite mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>{t.blog.backToBlog}</span>
          </a>

          <div className="flex items-center gap-3 mb-4">
            <span className="rounded-md bg-silver/60 border border-silver/80 px-2.5 py-0.5 font-inter text-caption font-semibold text-graphite">
              {post.tag}
            </span>
            <span className="flex items-center gap-1.5 font-inter text-caption text-stone">
              <Calendar className="h-3.5 w-3.5" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5 font-inter text-caption text-stone">
              <Clock className="h-3.5 w-3.5" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-[32px] leading-[1.15] tracking-tight text-graphite sm:text-[40px] md:text-[48px] font-bold font-cal">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center justify-between border-y border-silver py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-silver/60 border border-silver/80">
                <User className="h-5 w-5 text-graphite" />
              </div>
              <div>
                <p className="font-inter text-body-sm font-semibold text-graphite">{post.author}</p>
                <p className="font-inter text-caption text-slate">{post.authorRole}</p>
              </div>
            </div>
          </div>

          {/* Lead Paragraph */}
          <div className="mt-10 text-subheading leading-relaxed text-graphite font-medium">
            {post.content.intro}
          </div>

          {/* Body Sections */}
          <div className="mt-8 space-y-10 text-body leading-relaxed text-slate">
            {post.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="font-cal text-heading-sm font-bold text-graphite sm:text-heading">
                  {section.heading}
                </h2>
                <p>{section.text}</p>

                {section.quote && (
                  <blockquote className="my-6 border-l-4 border-action-blue bg-white p-5 rounded-r-xl shadow-sm italic text-graphite font-medium">
                    "{section.quote}"
                  </blockquote>
                )}

                {section.bullets && (
                  <ul className="my-4 space-y-2 pl-2">
                    {section.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-body-sm text-slate">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-action-blue shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.codeSnippet && (
                  <div className="my-6 overflow-x-auto rounded-xl bg-[#18181b] p-4 text-white text-caption font-mono shadow-md">
                    <pre>{section.codeSnippet}</pre>
                  </div>
                )}
              </div>
            ))}

            {/* Conclusion Box */}
            <div className="card-surface p-6 sm:p-8 mt-12 bg-white border border-silver/90 shadow-sm rounded-xl">
              <h3 className="font-cal text-heading-sm font-bold text-graphite">Key Takeaway</h3>
              <p className="mt-2 text-body text-slate leading-relaxed">{post.content.conclusion}</p>
            </div>
          </div>
        </div>
      </article>

      <div className="section-separator w-full" />

      {/* Related Posts */}
      <section className="container-page py-16">
        <h2 className="font-cal text-heading text-graphite mb-8 font-bold">
          {t.blog.moreArticles}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rawOtherPosts.map((p) => {
            const localizedOther = t.blog.posts?.[p.slug];
            const otherTitle = localizedOther?.title || p.title;
            const otherBody = localizedOther?.body || p.body;
            const otherTag = localizedOther?.tag || p.tag;
            const otherDate = localizedOther?.date || p.date;
            const otherReadTime = localizedOther?.readTime || p.readTime;

            return (
              <a key={p.slug} href={`/blog/${p.slug}`} className="group block h-full">
                <article className="card-surface flex h-full flex-col p-6 transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-md group-hover:border-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="rounded-md bg-silver/60 px-2.5 py-0.5 font-inter text-caption text-slate font-semibold">
                      {otherTag}
                    </span>
                    <span className="flex items-center gap-1.5 font-inter text-caption text-stone">
                      <Clock className="h-3 w-3" /> {otherReadTime}
                    </span>
                  </div>
                  <h3 className="mt-4 text-heading-sm text-graphite group-hover:text-action-blue transition-colors leading-snug font-bold font-cal">
                    {otherTitle}
                  </h3>
                  <p className="mt-2 flex-1 text-body-sm text-slate leading-relaxed">{otherBody}</p>
                  <div className="mt-5 flex items-center justify-between pt-4 border-t border-silver/60">
                    <span className="font-inter text-caption text-stone">{otherDate}</span>
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
    </main>
  );
}
