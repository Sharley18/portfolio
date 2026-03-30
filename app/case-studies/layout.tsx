import type { Metadata } from "next";
import Link from "next/link";
import "./case-studies.css";

export const metadata: Metadata = {
  title: {
    default: "Case Studies | Vergina Sharley MS",
    template: "%s | Case Studies | Vergina Sharley MS",
  },
  description:
    "Detailed digital marketing case studies by Vergina Sharley MS, focused on practical strategy and execution in Coimbatore, India.",
  alternates: {
    canonical: "https://verginasharley.me/case-studies",
  },
};

export default function CaseStudiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="case-shell relative min-h-screen text-slate-950">
      <div className="case-grid-overlay" aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16 pt-8 sm:px-10 sm:pt-10">
        <header className="case-header-card rounded-3xl p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-400 hover:text-sky-700"
            >
              Back to Portfolio
            </Link>
            <p className="text-sm text-slate-600">Coimbatore, India</p>
          </div>
          <p className="case-kicker mt-6">Marketing Practice Notes</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Case Studies by Vergina Sharley MS
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg">
            Strategy write-ups from real campaign work across local SEO, content systems, paid media,
            and brand communication.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Notes are written from practical execution experience. Confidential client data and inflated performance claims are intentionally excluded.
          </p>
        </header>
        <div className="pt-8 sm:pt-10">{children}</div>
      </div>
    </main>
  );
}
