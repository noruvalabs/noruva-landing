import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useTranslation } from "../../lib/i18n/use-translation";

export function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setFeedbackMsg("");

    try {
      // Send to Netlify serverless function
      let res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Fallback directly to function path if /api rewrite is pending
      if (res.status === 404) {
        res = await fetch("/.netlify/functions/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }

      const result = await res.json().catch(() => ({}));

      if (res.ok && (result.success || res.status === 200)) {
        setStatus("success");
        setFeedbackMsg(t.contact.successMsg);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setFeedbackMsg(result.error || t.contact.errorMsg || "Failed to send message. Please email support@noruvalabs.com directly.");
      }
    } catch {
      setStatus("error");
      setFeedbackMsg(t.contact.errorMsg || "Failed to send message. Please email support@noruvalabs.com directly.");
    }
  };

  return (
    <main className="relative vertical-lines">
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0 glow-purple" />
        <div className="container-page relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-silver px-3 py-1 font-inter text-caption text-slate">
            <Mail className="h-3.5 w-3.5 text-action-blue" />
            {t.contact.badge}
          </span>
          <h1 className="mt-5 text-[32px] leading-[1.1] tracking-[0.4px] text-graphite sm:text-[42px] md:text-heading-lg lg:text-display font-bold font-cal">
            {t.contact.headline}
          </h1>
          <p className="mt-6 max-w-lg text-subheading text-slate leading-relaxed">
            {t.contact.subheadline}
          </p>
        </div>
      </section>

      <div className="section-separator w-full" />

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-heading text-graphite md:text-heading-lg font-bold font-cal">
              {t.contact.sendMessageTitle}
            </h2>
            <p className="mt-2 text-body text-slate">
              {t.contact.sendMessageSubtitle}
            </p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-caption font-semibold text-graphite">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-body text-graphite placeholder:text-zinc-400 shadow-xs outline-none transition-all duration-150 hover:border-zinc-400 focus:border-action-blue focus:ring-2 focus:ring-action-blue/20"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-caption font-semibold text-graphite">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-body text-graphite placeholder:text-zinc-400 shadow-xs outline-none transition-all duration-150 hover:border-zinc-400 focus:border-action-blue focus:ring-2 focus:ring-action-blue/20"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="mb-1.5 block text-caption font-semibold text-graphite">
                  {t.contact.subjectLabel}
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={t.contact.subjectPlaceholder}
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-body text-graphite placeholder:text-zinc-400 shadow-xs outline-none transition-all duration-150 hover:border-zinc-400 focus:border-action-blue focus:ring-2 focus:ring-action-blue/20"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-caption font-semibold text-graphite">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-body text-graphite placeholder:text-zinc-400 shadow-xs outline-none transition-all duration-150 hover:border-zinc-400 focus:border-action-blue focus:ring-2 focus:ring-action-blue/20 resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-pill bg-action-blue text-white shadow-xs hover:bg-action-blue/90 disabled:opacity-50 transition-colors cursor-pointer flex items-center justify-center gap-2 px-6 py-2.5 font-bold"
                >
                  <Send className="h-4 w-4" />
                  <span>{status === "sending" ? t.contact.sendingBtn : t.contact.submitBtn}</span>
                </button>

                {status === "success" && (
                  <div className="flex items-center gap-1.5 text-sm font-medium text-emerald-600 animate-in fade-in">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>{feedbackMsg}</span>
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-1.5 text-sm font-medium text-red-500 animate-in fade-in">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{feedbackMsg}</span>
                  </div>
                )}
              </div>
            </form>
          </div>

          <div>
            <h2 className="text-heading text-graphite md:text-heading-lg font-bold font-cal">
              {t.contact.otherWaysTitle}
            </h2>
            <p className="mt-2 text-body text-slate">
              {t.contact.otherWaysSubtitle}
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4 rounded-xl border border-silver/80 bg-white p-5 shadow-xs transition-all hover:border-slate-300 hover:shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 border border-blue-200">
                  <Mail className="h-5 w-5 text-action-blue" />
                </div>
                <div>
                  <p className="text-caption uppercase font-bold tracking-wider text-stone">
                    {t.contact.supportTitle}
                  </p>
                  <a href="mailto:support@noruvalabs.com" className="text-[17px] text-action-blue font-bold hover:underline block mt-0.5">
                    support@noruvalabs.com
                  </a>
                  <p className="text-caption text-slate mt-1">1 business day response SLA</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-silver/80 bg-white p-5 shadow-xs transition-all hover:border-slate-300 hover:shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 border border-emerald-200">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-caption uppercase font-bold tracking-wider text-stone">
                    {t.contact.officeTitle}
                  </p>
                  <p className="text-[16px] text-graphite font-bold mt-0.5">
                    {t.contact.officeAddress}
                  </p>
                  <p className="text-caption text-slate mt-1">Minato-ku Innovation Hub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
